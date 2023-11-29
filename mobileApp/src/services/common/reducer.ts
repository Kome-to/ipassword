import {ReducerFactory} from 'redux-actions-ts-reducer';
import {
  setDownloadProgressPercent,
  setLoading,
  toggleDownloadProgress,
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
}

const defaultState: CommonState = {
  loading: false,
  showDownLoadProgress: false,
  downloadProgressPercent: 0,
  downloadType: null,
};

class State {
  loading = defaultState.loading;
  showDownLoadProgress = defaultState.showDownLoadProgress;
  downloadProgressPercent = defaultState.downloadProgressPercent;
  downloadType = defaultState.downloadType;
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

  .toReducer();

export default reducer;

export {State as CommonState};
