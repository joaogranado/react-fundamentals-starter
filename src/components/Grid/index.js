/**
 * Module dependencies.
 */

import './Grid.css';
import List from '../List';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * `Grid` component.
 */

const Grid = (props) => (
  <List className="grid" items={props.items}>
    {props.children}
  </List>
);

/**
 * Props validation.
 */

Grid.propTypes = {
  children: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

/**
 * Export `Grid`.
 */

export default Grid;
