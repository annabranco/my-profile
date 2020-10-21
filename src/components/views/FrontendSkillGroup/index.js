import React from 'react';
import { string, bool } from 'prop-types';
import SkillLevel from '../SkillLevel';
import { Title, SkillItem, Name } from '../Skills/styles';
import { FrontendGroup, SkillsWrapper, LogoWrapper, Logo } from './styles';

const FrontendSkillGroup = ({ details, visible }) => (
  <FrontendGroup visible={visible}>
    <Title group={details.name}>{details.name}</Title>
    <SkillsWrapper>
      {details.skills.map(skill => (
        <SkillItem key={skill.skill}>
          <Name>{skill.skill}</Name>

          {skill.logo && (
            <LogoWrapper>
              <Logo src={skill.logo} alt="" />
            </LogoWrapper>
          )}

          <SkillLevel level={skill.level} />
        </SkillItem>
      ))}
    </SkillsWrapper>
  </FrontendGroup>
);

FrontendSkillGroup.propTypes = {
  details: string.isRequired,
  visible: bool
};
FrontendSkillGroup.defaultProps = {
  visible: false
};

export default FrontendSkillGroup;
