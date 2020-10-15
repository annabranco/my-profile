import React from 'react';
import { string } from 'prop-types';
import SkillLevel from '../SkillLevel';
import { SkillGroupTitle, SkillWrapper, SkillName } from '../Skills/styles';
import {
  FrontendSkillWrapper,
  FrontendSkillsWrapper,
  FrondendSkillsLogoWrapper,
  FrondendSkillsLogo
} from './styles';

const FrontendSkillGroup = ({ details }) => (
  <FrontendSkillWrapper>
    <SkillGroupTitle group={details.name}>{details.name}</SkillGroupTitle>
    <FrontendSkillsWrapper>
      {details.skills.map(skill => (
        <SkillWrapper key={skill.skill}>
          <SkillName>{skill.skill}</SkillName>

          {skill.logo && (
            <FrondendSkillsLogoWrapper>
              <FrondendSkillsLogo src={skill.logo} alt="" />
            </FrondendSkillsLogoWrapper>
          )}

          <SkillLevel level={skill.level} />
        </SkillWrapper>
      ))}
    </FrontendSkillsWrapper>
  </FrontendSkillWrapper>
);

FrontendSkillGroup.propTypes = {
  details: string.isRequired
};

export default FrontendSkillGroup;
