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
  SkillGroup,
  SkillsList,
  SkillsLogo
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
            <SkillsList>
              <SkillsLogo src={skillGroup.logo} alt="" />
              <SkillsGrid>
                {skillGroup.skills.map(skill => (
                  <SkillWrapper
                    key={skill.skill}
                    isLastElementAlone={skillGroup.skills.length % 2 !== 0}
                  >
                    <SkillName>{skill.skill}</SkillName>
                    <SkillLevel level={skill.level} />
                  </SkillWrapper>
                ))}
              </SkillsGrid>
            </SkillsList>
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
