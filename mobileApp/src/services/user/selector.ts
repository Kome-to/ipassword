import {GlobalState} from '@common/redux/rootReducer';

export const selectCurrentUser = (state: GlobalState) => state.user.currentUser;
export const selectFilter = (state: GlobalState) => state.user.filter;
export const selectAddPassword = (state: GlobalState) => state.user.addPassword;
export const selectPasswords = (state: GlobalState) => state.user.passwords;
export const selectNotes = (state: GlobalState) => state.user.notes;
export const selectCards = (state: GlobalState) => state.user.cards;
export const selectGroups = (state: GlobalState) => state.user.groups;
export const selectSelectedPassword = (state: GlobalState) =>
  state.user.selectedPassword;
export const selectSelectedNote = (state: GlobalState) =>
  state.user.selectedNote;
export const selectSelectedCard = (state: GlobalState) =>
  state.user.selectedCard;
export const selectCurrentGroup = (state: GlobalState) =>
  state.user.currentGroup;
