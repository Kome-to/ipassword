import {createAction} from 'redux-actions';
import {DownloadType} from './reducer';

const ns = 'common/';

export interface PayloadCreateBabyBook {
  name: string;
  data: any;
  filename?: string;
  type?: string;
}

export const ActionsTypes = {
  setLoading: `${ns}SET_LOADING`,
  toggleDownloadProgress: `${ns}TOGGLE_DOWNLOAD_PROGRESS`,
  setDownloadProgressPercent: `${ns}SET_DOWNLOAD_PROGRESS_PERCENT`,
  toggleModal: `${ns}TOGGLE_MODAL`,
  closeModal: `${ns}CLOSE_MODAL`,
};

export const setLoading = createAction<boolean>(ActionsTypes.setLoading);
export const toggleDownloadProgress = createAction<{
  isShow: boolean;
  type?: DownloadType;
}>(ActionsTypes.toggleDownloadProgress);
export const setDownloadProgressPercent = createAction<number>(
  ActionsTypes.setDownloadProgressPercent,
);
export const toggleModal = createAction<string>(ActionsTypes.toggleModal);
export const closeModal = createAction<string>(ActionsTypes.closeModal);
