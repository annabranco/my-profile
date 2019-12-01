import React from 'react';
import { PropTypes } from 'prop-types';
import { StarsWrapper, Star } from './styles';

const SkillLevel = ({ level }) => {
  const stars = new Array(level).fill('*');

  return (
    <StarsWrapper>
      {stars.map(() => (
        <Star className="fas fa-star" aria-hidden key={Math.random()} />
      ))}
    </StarsWrapper>
  );
};

SkillLevel.propTypes = {
  level: PropTypes.number
};

SkillLevel.defaultProps = {
  level: 1
};

export default SkillLevel;
