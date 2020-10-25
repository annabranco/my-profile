import React from 'react';
import { bool } from 'prop-types';
import SkillLevel from '../SkillLevel';
import { FrontendGroup, Logo, LogoWrapper, SkillsWrapper } from './styles';
import { Name, SkillItem, Title } from '../Skills/styles';
import { skillGroupsPropType } from '../../types';

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
  details: skillGroupsPropType.isRequired,
  visible: bool.isRequired
};

export default FrontendSkillGroup;
