import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactItem } from './ContactItem';

import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
// import store from '../../redux/store';

const ContactList = ({ contacts, filtered, deleteContact }) => {
  // console.log('STATE ---> ', store.getState());

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filtered.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteBtnPush={deleteContact}
            />
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnPush: PropTypes.func,
};

const mapStateToProps = ({ contacts, filtered }) => {
  return {
    contacts,
    filtered,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
