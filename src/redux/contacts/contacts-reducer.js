import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContact, deleteContact, changeFilter } from './contacts-actions';

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => {
    if (state.find(item => item.name === payload.name)) {
      alert(`${payload.name + ' is already in contacts'}`);

      return state;
    }
    return (state = [payload, ...state]);
  },

  [deleteContact]: (state, { payload }) => {
    return state.filter(contact => contact.id !== payload);
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  contacts,
  filter,
});
