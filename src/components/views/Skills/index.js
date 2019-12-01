import React from 'react';
import { PropTypes } from 'prop-types';
import FrontendSkillGroup from '../FrontendSkillGroup';
import SkillLevel from '../SkillLevel';
import { skillGroupsPropType } from '../../../types';
import {
  Sidebar,
  SkillGroupTitle,
  SkillsGrid,
  SkillWrapper,
  SkillName,
  SkillGroup
} from './styles';

const Skills = ({ skills }) => (
  <Sidebar width={(window.innerWidth * 0, 9)}>
    {skills.map(skillGroup => (
      <>
        {skillGroup.name === 'Frontend' ? (
          <FrontendSkillGroup key={skillGroup.name} details={skillGroup} />
        ) : (
          <SkillGroup key={skillGroup.name}>
            <SkillGroupTitle>{skillGroup.name}</SkillGroupTitle>
            <SkillsGrid>
              {skillGroup.skills.map(skill => (
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
            </SkillsGrid>
          </SkillGroup>
        )}
      </>
    ))}
  </Sidebar>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(skillGroupsPropType).isRequired
};

export default Skills;
