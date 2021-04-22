import React, { Component } from 'react';

import { connect } from 'react-redux';
import { filterChange } from '../../redux/phonebook/phonebookActions';

class Filter extends Component {
  state = {
    filter: '',
  };

  handleFilterChange = e => {
    const { filterChange } = this.props;
    this.setState({ [e.target.name]: e.target.value });
    filterChange(e.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="filter" className="label">
          Find contacts by name
        </label>
        <input
          type="text"
          name="filter"
          onChange={this.handleFilterChange}
          value={this.state.filter}
          className="input"
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  filterChange,
};

export default connect(null, mapDispatchToProps)(Filter);
