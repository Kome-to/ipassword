import {ReducerFactory} from 'redux-actions-ts-reducer';
import {
  getCurrentUser,
  setAddPassword,
  setCards,
  setCurrentGroup,
  setCurrentUser,
  setFilter,
  setGroups,
  setNotes,
  setPasswords,
  setSelectedCard,
  setSelectedNote,
  setSelectedPassword,
} from './actions';

class DefaultState {
  masterPassword: string;
  currentUser: any;
  filter: 'password' | 'note' | 'card';
  addPassword: string;
  passwords: any[];
  notes: any[];
  cards: any[];
  groups: any[];
  currentGroup: any;
  selectedPassword: any;
  selectedNote: any;
  selectedCard: any;
}

class State {
  currentUser: any;
  filter: 'password' | 'note' | 'card';
  addPassword: string;
  passwords: any[];
  notes: any[];
  cards: any[];
  groups: any[];
  currentGroup: any;
  selectedPassword: any;
  selectedNote: any;
  selectedCard: any;
}

const reducer = new ReducerFactory(new State())
  .addReducer(getCurrentUser, (state: DefaultState): State => {
    return {...state};
  })
  .addReducer(setCurrentUser, (state: DefaultState, action): State => {
    return {...state, currentUser: action.payload};
  })

  .addReducer(setAddPassword, (state: DefaultState, action): State => {
    return {...state, addPassword: action.payload};
  })
  .addReducer(setFilter, (state, action) => {
    return {...state, filter: action.payload};
  })
  .addReducer(setPasswords, (state, action) => {
    return {...state, passwords: action.payload};
  })
  .addReducer(setNotes, (state, action) => {
    return {...state, notes: action.payload};
  })
  .addReducer(setCards, (state, action) => {
    return {...state, cards: action.payload};
  })
  .addReducer(setGroups, (state, action) => {
    return {...state, groups: action.payload};
  })
  .addReducer(setCurrentGroup, (state, action) => {
    return {...state, currentGroup: action.payload};
  })
  .addReducer(setSelectedPassword, (state, action) => {
    return {...state, selectedPassword: action.payload};
  })
  .addReducer(setSelectedNote, (state, action) => {
    return {...state, selectedNote: action.payload};
  })
  .addReducer(setSelectedCard, (state, action) => {
    return {...state, selectedCard: action.payload};
  })
  .toReducer();

export default reducer;

export {State as UserState};
