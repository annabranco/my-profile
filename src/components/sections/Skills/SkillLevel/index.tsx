import React, { ReactElement } from 'react';
import { number, string } from 'prop-types';
import { Star, StarsWrapper } from './styles';

interface Props {
  level: number;
  skill: string;
}

const SkillLevel = ({ level, skill }: Props): ReactElement => {
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
