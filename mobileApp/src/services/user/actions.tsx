import {createAction} from 'redux-actions';

const ns = 'user/';

export const ActionTypes = {
  getCurrentUser: `${ns}GET_CURRENT_USER`,
  setCurrentUser: `${ns}SET_CURRENT_USER`,
  setFilter: `${ns}SET_FILTER`,
  setAddPassword: `${ns}SET_ADD_PASSWORD`,
  setPasswords: `${ns}SET_PASSWORDS`,
  setNotes: `${ns}SET_NOTES`,
  setCards: `${ns}SET_CARDS`,
};

export const getCurrentUser = createAction(ActionTypes.getCurrentUser);
export const setCurrentUser = createAction(ActionTypes.setCurrentUser);
export const setFilter = createAction(ActionTypes.setFilter);
export const setAddPassword = createAction(ActionTypes.setAddPassword);
export const setPasswords = createAction(ActionTypes.setPasswords);
export const setNotes = createAction(ActionTypes.setNotes);
export const setCards = createAction(ActionTypes.setCards);
