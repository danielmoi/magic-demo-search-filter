import React, { Component } from 'react';
import { fromJS } from 'immutable';
import { SearchFilter } from 'react-search-filter';
import options from '../../fixtures/options';

export class RSFComponent extends Component {
  handleSearch = ({ filter, search }) => {
    console.log('filter:', filter);
    console.log('search:', search);
  }

  render () {
    return (
      <div className="demo__container">
        <SearchFilter
          id="demo-search"
          handleSearch={this.handleSearch}
          data={fromJS(options)}
        />
      </div>
    );
  }
}

export default RSFComponent;
