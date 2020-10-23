import React from 'react';
import { bool, string } from 'prop-types';
import SkillLevel from '../SkillLevel';
import { FrontendGroup, SkillsWrapper, LogoWrapper, Logo } from './styles';
import { Title, SkillItem, Name } from '../Skills/styles';

const FrontendSkillGroup = ({ details, visible }) => (
  <FrontendGroup visible={visible}>
    <Title group={details.name}>{details.name}</Title>
    <SkillsWrapper>
      {details.skills.map(skill => (
        <SkillItem key={`${skill.order}-${skill.skill}`}>
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
