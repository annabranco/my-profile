import React from 'react';
import { PropTypes } from 'prop-types';
import SkillLevel from '../SkillLevel';
import { SkillGroupTitle, SkillWrapper, SkillName } from '../Skills/styles';
import { FrontendSkillWrapper, FrontendSkillsWrapper } from './styles';

const FrontendSkillGroup = ({ details }) => (
  <FrontendSkillWrapper>
    <SkillGroupTitle group={details.name}>{details.name}</SkillGroupTitle>
    <FrontendSkillsWrapper>
      {details.skills.map(skill => (
        <SkillWrapper key={skill.skill}>
          <SkillName>{skill.skill}</SkillName>
          {/*
                <div className="skills__inner--icon">
                   <img src={Css} alt="" className="skills__icon" />
                </div>
                */}
          <SkillLevel level={skill.level} />
        </SkillWrapper>
      ))}
    </FrontendSkillsWrapper>
  </FrontendSkillWrapper>
);

FrontendSkillGroup.propTypes = {
  details: PropTypes.string.isRequired
};

export default FrontendSkillGroup;
