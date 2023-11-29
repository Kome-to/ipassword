import common, {CommonState} from '@services/common/reducer';
import user, {UserState} from '@services/user/reducer';
import {combineReducers} from 'redux';

export interface GlobalState {
  common: CommonState;
  user: UserState;
}

const rootReducer = combineReducers<GlobalState>({
  common,
  user,
});

export default rootReducer;
