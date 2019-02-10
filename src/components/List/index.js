/**
* Module dependencies.
*/

import PropTypes from 'prop-types';
import React from 'react';

/**
* `List` component.
*/

const List = (props) => (
  <div className={props.className}>
    {props.items.map((value, index) => {
      return props.children(value, index);
    })}
  </div>
);

/**
* Props validation.
*/

List.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
};

/**
 * Export `List`.
 */

export default List;
