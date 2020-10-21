import React from 'react';
import { arrayOf, string } from 'prop-types';
import FrontendSkillGroup from '../FrontendSkillGroup';
import SkillLevel from '../SkillLevel';
import { skillGroupsPropType } from '../../../types';
import {
  SkillsArea,
  Title,
  SkillsGrid,
  SkillItem,
  Name,
  SkillGroup,
  SkillsInsideGroup,
  Logo
} from './styles';

export const SKILLS_FIRST_ROW = 'skillsFirstRow';
export const SKILLS_SECOND_ROW = 'skillsSecondRow';
export const SKILLS_THIRD_ROW = 'skillsLastRow';

const Skills = ({ skills, cuePointsActivated }) => {
  const FIRST_ROW_ITEMS = 'Frontend';
  const SECOND_ROW_ITEMS = [1, 2, 3, 4];
  const THIRD_ROW_ITEMS = [5, 6, 7, 8];
  const isVisible = identificator => {
    if (
      cuePointsActivated.includes(SKILLS_FIRST_ROW) &&
      FIRST_ROW_ITEMS.includes(identificator)
    ) {
      return true;
    }
    if (
      cuePointsActivated.includes(SKILLS_SECOND_ROW) &&
      SECOND_ROW_ITEMS.includes(identificator)
    ) {
      return true;
    }
    if (
      cuePointsActivated.includes(SKILLS_THIRD_ROW) &&
      THIRD_ROW_ITEMS.includes(identificator)
    ) {
      return true;
    }
    return false;
  };

  return (
    <SkillsArea>
      {skills.map((skillObject, index) => (
        <>
          {skillObject.name === 'Frontend' ? (
            <FrontendSkillGroup
              key={skillObject.name}
              details={skillObject}
              visible={isVisible(skillObject.name)}
            />
          ) : (
            <SkillGroup
              key={skillObject.name}
              isVisible={isVisible(index)}
              position={index}
            >
              <Title>{skillObject.name}</Title>
              <SkillsInsideGroup>
                <Logo src={skillObject.logo} alt="" />
                <SkillsGrid>
                  {skillObject.skills.map(skill => (
                    <SkillItem
                      key={skill.skill}
                      isLastElementAlone={skillObject.skills.length % 2 !== 0}
                    >
                      <Name>{skill.skill}</Name>
                      <SkillLevel level={skill.level} />
                    </SkillItem>
                  ))}
                </SkillsGrid>
              </SkillsInsideGroup>
            </SkillGroup>
          )}
        </>
      ))}
    </SkillsArea>
  );
};

Skills.propTypes = {
  skills: arrayOf(skillGroupsPropType).isRequired,
  cuePointsActivated: arrayOf(string).isRequired
};

export default Skills;
