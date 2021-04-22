import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContact } from '../../redux/phonebook/phonebookActions';

import ContactListItem from '../ContactListItem/ContactListItem';

class ContactList extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.stateContacts !== this.props.stateContacts) {
      localStorage.setItem(
        'contacts',
        JSON.stringify(this.props.stateContacts),
      );
    }
  }

  render() {
    const { contacts } = this.props;
    return (
      <ul className="contact_list">
        {contacts.map(el => {
          return <ContactListItem key={el.id} contact={el} />;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return {
    contacts: visibleContacts,
    stateContacts: state.contacts,
  };
};

const mapDispatchToProps = {
  getContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
