import {ModalNames} from '@common/constants';
import {ReducerFactory} from 'redux-actions-ts-reducer';
import {
  closeModal,
  setDownloadProgressPercent,
  setLoading,
  toggleDownloadProgress,
  toggleModal,
} from './actions';

export enum DownloadType {
  FILE = 'file',
  FOLDER = 'folder',
}

interface CommonState {
  loading: boolean;
  showDownLoadProgress: boolean;
  downloadProgressPercent: number;
  downloadType: DownloadType | null;
  modals: {[key: string]: boolean};
}

const defaultState: CommonState = {
  loading: false,
  showDownLoadProgress: false,
  downloadProgressPercent: 0,
  downloadType: null,
  modals: {PASSWORD_GENERATOR: false},
};

class State {
  loading = defaultState.loading;
  showDownLoadProgress = defaultState.showDownLoadProgress;
  downloadProgressPercent = defaultState.downloadProgressPercent;
  downloadType = defaultState.downloadType;
  modals = defaultState.modals;
}

const reducer = new ReducerFactory(new State())
  .addReducer(setLoading, (state, action): State => {
    return {
      ...state,
      loading: action.payload,
    };
  })
  .addReducer(toggleDownloadProgress, (state, action): State => {
    return {
      ...state,
      showDownLoadProgress: action.payload.isShow,
      downloadType: action.payload.type || null,
    };
  })
  .addReducer(setDownloadProgressPercent, (state, action): State => {
    return {
      ...state,
      downloadProgressPercent: action.payload,
    };
  })
  .addReducer(toggleModal, (state, action): State => {
    const modals = {...state.modals};
    console.log(action);
    modals[action.payload] = !modals[action.payload];
    return {
      ...state,
      modals,
    };
  })
  .addReducer(closeModal, (state, action): State => {
    const modals = {...state.modals};
    modals[String(action.payload)] = false;
    return {
      ...state,
      modals,
    };
  })

  .toReducer();

export default reducer;

export {State as CommonState};
