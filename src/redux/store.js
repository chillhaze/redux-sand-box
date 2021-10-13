import { createStore } from 'redux';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filtered: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      if (state.contacts.find(item => item.name === payload.name)) {
        alert(`${payload.name + ' is already in contacts'}`);

        return state;
      }
      // return { contacts: [...state.contacts, payload] };
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };

    case 'contacts/delete':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };

    case 'contacts/filter':
      return {
        ...state,
        filtered: payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
// import { contactsReducer } from './contacts/contacts-reducer';

// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: 'filter',
// };

// export const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactsReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
