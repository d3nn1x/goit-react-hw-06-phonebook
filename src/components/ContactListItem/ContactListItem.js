import React from 'react';

import { connect } from 'react-redux';
import { removeContact } from '../../redux/phonebook/phonebookActions';

const ContactListItem = ({ contact, removeContact }) => {
  return (
    <div className="contact_list_item">
      <li>
        {contact.name}: <span>{contact.number}</span>
      </li>
      <button
        type="button"
        onClick={() => removeContact(contact.id)}
        className="btn_form"
      >
        X
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  contact: ownProps.contact,
});

const mapDispatchToProps = {
  removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
