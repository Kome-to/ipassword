import { Op, WhereOptions, Model } from 'sequelize';
import { CursorPayload, OrderConfig, PaginationQuery, SearchParam } from './types';

export const parseCursor = (cursor: string): CursorPayload | null => {
  if (!cursor) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(cursor, 'base64').toString('utf8'));
  } catch (e) {
    return null;
  }
};

export const getPrimaryKeyFields = (model: any): string[] => {
  const primaryKeyFields = Object.entries(model.rawAttributes)
    .filter(([, attribute]: any) => attribute.primaryKey)
    .map(([column]) => column);

  return primaryKeyFields;
};

const normalizePrimaryKeyField = (primaryKeyField: string | string[]): string[] =>
  Array.isArray(primaryKeyField) ? primaryKeyField : [primaryKeyField];

const ensurePrimaryKeyFieldInOrder = (order: OrderConfig, primaryKeyField: string[]): OrderConfig => {
  const missingPrimaryKeyFields = primaryKeyField.filter((pkField) => !order.find(([field]) => field === pkField));

  const primaryKeyOrder: OrderConfig = missingPrimaryKeyFields.map((field) => [field, 'ASC']);

  return [...order, ...primaryKeyOrder];
};

export const normalizeOrder = (order: any, primaryKeyField: string | string[], omitPrimaryKeyFromOrder: boolean): OrderConfig => {
  const normalizedPrimaryKeyField = normalizePrimaryKeyField(primaryKeyField);

  let normalized: any[] = [];

  if (Array.isArray(order)) {
    normalized = order.map((o) => {
      if (typeof o === 'string') {
        return [o, 'ASC'];
      }

      if (Array.isArray(o)) {
        const [field, direction] = o;

        return [field, direction || 'ASC'];
      }

      return o;
    });
  }

  return omitPrimaryKeyFromOrder ? normalized : ensurePrimaryKeyFieldInOrder(normalized, normalizedPrimaryKeyField);
};

export const reverseOrder = (order: OrderConfig): OrderConfig =>
  order.map(([field, direction]) => [field, direction.toLowerCase() === 'desc' ? 'ASC' : 'DESC']);

const serializeCursor = (payload: CursorPayload): string => Buffer.from(JSON.stringify(payload)).toString('base64');

export const createCursor = <ModelType extends Model>(instance: ModelType, order: OrderConfig): string => {
  const payload = order.map(([field]) => instance.get(field));

  return serializeCursor(payload);
};

const isValidCursor = (cursor: CursorPayload, order: OrderConfig): boolean => cursor.length === order.length;

const recursivelyGetPaginationQuery = (order: OrderConfig, cursor: CursorPayload): WhereOptions<any> => {
  const currentOp = order[0][1].toLowerCase() === 'desc' ? Op.lt : Op.gt;

  if (order.length === 1) {
    return {
      [order[0][0]]: {
        [currentOp]: cursor[0],
      },
    };
  }
  return {
    [Op.or]: [
      {
        [order[0][0]]: {
          [currentOp]: cursor[0],
        },
      },
      {
        [order[0][0]]: cursor[0],
        ...recursivelyGetPaginationQuery(order.slice(1), cursor.slice(1)),
      },
    ],
  };
};

export const getPaginationQuery = (order: OrderConfig, cursor: CursorPayload): WhereOptions<any> | null => {
  if (!isValidCursor(cursor, order)) {
    return null;
  }

  return recursivelyGetPaginationQuery(order, cursor);
};

export const getPaginateOptions = (searchParams: SearchParam) => {
  const paginateOptions: PaginationQuery = { limit: 10 };

  // Limit options
  if (searchParams.limit) paginateOptions.limit = searchParams.limit;

  // Fetch the first limit list after the last result of response
  if (searchParams.after) paginateOptions.after = searchParams.after;

  // Fetch the last limit list after the first result of response
  if (searchParams.before) paginateOptions.before = searchParams.before;

  // Order
  if (searchParams.sortBy && searchParams.sortDirection) {
    paginateOptions.order = [[searchParams.sortBy, searchParams.sortDirection]];
  }

  return paginateOptions;
};
