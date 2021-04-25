import React from 'react';
import { number, string } from 'prop-types';
import { Star, StarsWrapper } from './styles';

const SkillLevel = ({
  level,
  skill
}: {
  level: number;
  skill: string;
}): JSX.Element => {
  const stars: '*'[] = new Array(level).fill('*');

  return (
    <StarsWrapper>
      {stars.map((_, index) => (
        <Star
          aria-hidden
          className="fas fa-star"
          key={`${skill}-${level}-${index}`} // eslint-disable-line react/no-array-index-key
        />
      ))}
    </StarsWrapper>
  );
};

SkillLevel.propTypes = {
  skill: string.isRequired,
  level: number.isRequired
};

export default SkillLevel;
