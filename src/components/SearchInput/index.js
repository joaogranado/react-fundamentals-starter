/**
 * Module dependencies.
 */

import './SearchInput.css';
import Input from '../Input';
import React from 'react';

/**
 * `SearchInput` component.
 */

class SearchInput extends React.Component {
  render() {
    return (
      <div className="input-search-container">
        <div className="input-search-wrapper">
          <Input
            className="input-search"
            {...this.props}
          />
        </div>
      </div>
    )
  }
}

/**
 * Export `SearchInput`;
 */

export default SearchInput;
