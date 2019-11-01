import React from 'react';
import { PropTypes } from 'prop-types';

const InbetweenBar = ({ title }) => (
  <div className="innertext--between">
    <h2 className="innertext--title">{title}</h2>
  </div>
);

InbetweenBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default InbetweenBar;
