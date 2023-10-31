import React from 'react';
import PropTypes from 'prop-types';
import css from './contactList.module.css';

export const ContactList = ({ contacts, onDelete }) => (
  <>
    <ul>
      {contacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.delButton}
            onClick={() => onDelete(contact.id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};
