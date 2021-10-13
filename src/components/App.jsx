// import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import css from './App.module.css';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  // console.log(addContact);
  // const [contacts, setContact] = useState(() => {
  //   // ленивая инициализация состояния - lazy initialization
  //   return JSON.parse(window.localStorage.getItem('contacts' ?? ''));
  // });
  // const [filtered, setFiltered] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phonebook <RiContactsBook2Fill className={css.icon} />
      </h1>
      <ContactForm />

      <Filter />
      <h2 className={css.title}>
        Contacts
        <IoMdContacts className={css.icon} />
      </h2>
      <ContactList />
    </div>
  );
};

export default App;
