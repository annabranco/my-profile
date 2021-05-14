import { ReactElement } from 'react';
import { number, string } from 'prop-types';
import { Star, StarsWrapper } from './styles';

interface Props {
  level: number;
  skill: string;
}

const SkillLevel = ({ level, skill }: Props): ReactElement => {
  const stars: '*'[] = new Array(level).fill('*');

  return (
    <StarsWrapper data-e2e-id={`skill-${skill}_starsWrapper`}>
      {stars.map((_, index) => (
        <Star
          aria-hidden
          data-e2e-id={`skill-${skill}_star`}
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
