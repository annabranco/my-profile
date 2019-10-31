import React from 'react';
import { PropTypes } from 'prop-types';

const InbetweenBar = ({ title }) => (
  <div className="innertext--between">{title}</div>
);

InbetweenBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default InbetweenBar;
