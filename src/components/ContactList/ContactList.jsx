import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactListItem from '../ContactListItem/ContactListItem';

class ContactList extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
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
  };
};

export default connect(mapStateToProps)(ContactList);
