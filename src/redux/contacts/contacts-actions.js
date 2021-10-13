// import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = (name, number) => ({
  type: 'contacts/addContact',
  payload: {
    id: uuidv4(),
    name: name,
    number: number,
  },
});

export const deleteContact = id => ({
  type: 'contacts/delete',
  payload: id,
});

export const changeFilter = value => ({
  type: 'contacts/filter',
  payload: value,
});

// export const addContact = createAction(
//   'contacts/addContact',
//   (name, number) => ({
//     payload: {
//       id: uuidv4(),
//       name: name,
//       number: number,
//     },
//   }),
// );

// export const deleteContact = createAction('contacts/delete');
// export const changeFilter = createAction('contacts/filter');
