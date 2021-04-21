import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../redux/phonebook/phonebookActions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;

    addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form action="submit" onSubmit={this.handleSubmit} className="form">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            className="input"
          />
          <label htmlFor="number" className="label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            className="input"
          />
          <input type="submit" value="Add Contact" className="btn_form" />
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);
