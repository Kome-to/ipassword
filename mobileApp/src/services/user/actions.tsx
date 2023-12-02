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
  setGroups: `${ns}SET_GROUPS`,
  setCurrentGroup: `${ns}SET_CURRENT_GROUP`,
  setSelectedCard: `${ns}SET_SELECTED_CARD`,
  setSelectedPassword: `${ns}SET_SELECTED_PASSWORD`,
  setSelectedNote: `${ns}SET_SELECTED_NOTE`,
};

export const getCurrentUser = createAction(ActionTypes.getCurrentUser);
export const setCurrentUser = createAction(ActionTypes.setCurrentUser);
export const setFilter = createAction(ActionTypes.setFilter);
export const setAddPassword = createAction(ActionTypes.setAddPassword);
export const setPasswords = createAction(ActionTypes.setPasswords);
export const setNotes = createAction(ActionTypes.setNotes);
export const setCards = createAction(ActionTypes.setCards);
export const setGroups = createAction(ActionTypes.setGroups);
export const setCurrentGroup = createAction(ActionTypes.setCurrentGroup);
export const setSelectedCard = createAction(ActionTypes.setSelectedCard);
export const setSelectedPassword = createAction(
  ActionTypes.setSelectedPassword,
);
export const setSelectedNote = createAction(ActionTypes.setSelectedNote);
