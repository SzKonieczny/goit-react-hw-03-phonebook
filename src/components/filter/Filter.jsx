import React from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';

export const Filter = ({ value, onChange }) => (
  <div className={css.filterContainer}>
    <p>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} placeholder="search" />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
