// import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './contacts-types';

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// export const contactsReducer = (
//   state = initialContactsState,
//   { type, payload },
// ) => {
//   switch (type) {
//     case actions.ADD_CONTACT:
//       if (state.contacts.find(item => item.name === payload.name)) {
//         alert(`${payload.name + ' is already in contacts'}`);

//         return state;
//       }
//       // return { contacts: [...state.contacts, payload] };
//       return {
//         ...state,
//         contacts: [...state.contacts, payload],
//       };

//     case actions.DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== payload),
//       };

//     case actions.FILTERED:
//       return {
//         ...state,
//         filtered: payload,
//       };

//     default:
//       return state;
//   }
// };

const contactsReducer = (state = initialContactsState, { type, payload }) => {
  switch (type) {
    case actions.ADD_CONTACT:
      if (state.find(item => item.name === payload.name)) {
        alert(`${payload.name + ' is already in contacts'}`);
        return state;
      }
      // return { contacts: [...state.contacts, payload] };
      return [...state, payload];

    case actions.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const initinalFilterState = '';
const filteredReducer = (state = initinalFilterState, { type, payload }) => {
  switch (type) {
    case actions.FILTERED:
      return payload;

    default:
      return state;
  }
};

export const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  filtered: filteredReducer,
});

//OTHER================
// const contacts = createReducer([], {
//   [addContact]: (state, { payload }) => {
//     if (state.find(item => item.name === payload.name)) {
//       alert(`${payload.name + ' is already in contacts'}`);

//       return state;
//     }
//     return (state = [payload, ...state]);
//   },

//   [deleteContact]: (state, { payload }) => {
//     return state.filter(contact => contact.id !== payload);
//   },
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// export const contactsReducer = combineReducers({
//   contacts,
//   filter,
// });
