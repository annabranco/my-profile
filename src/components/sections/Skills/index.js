import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { instanceOf } from 'prop-types';
import FrontendSkillGroup from './FrontendSkillGroup';
import SkillLevel from './SkillLevel';
import { skillsSelector } from '../../../redux/selectors';
import {
  SKILLS_FIRST_ROW,
  SKILLS_SECOND_ROW,
  SKILLS_THIRD_ROW
} from '../../../constants';
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
import { isDesktop } from '../../../utils/device';

const FIRST_ROW_ITEMS = 'Frontend';
const SECOND_ROW_ITEMS = new Set([1, 2, 3, 4]);
const THIRD_ROW_ITEMS = new Set([5, 6, 7, 8]);

const Skills = ({ cuePointsActivated }) => {
  const skills = useSelector(skillsSelector);

  const isVisible = identificator => {
    if (
      cuePointsActivated.has(SKILLS_FIRST_ROW) &&
      FIRST_ROW_ITEMS.includes(identificator)
    ) {
      return true;
    }
    if (
      cuePointsActivated.has(SKILLS_SECOND_ROW) &&
      SECOND_ROW_ITEMS.has(identificator)
    ) {
      return true;
    }
    if (
      cuePointsActivated.has(SKILLS_THIRD_ROW) &&
      THIRD_ROW_ITEMS.has(identificator)
    ) {
      return true;
    }
    return false;
  };

  return (
    <SkillsArea>
      {skills.map((skillObject, index) => (
        <Fragment key={skillObject.name}>
          {skillObject.name === 'Frontend' ? (
            <FrontendSkillGroup
              details={skillObject}
              visible={isVisible(skillObject.name)}
            />
          ) : (
            <SkillGroup isVisible={isVisible(index)} position={index}>
              <Title>
                <h3>{skillObject.name}</h3>
              </Title>
              <SkillsInsideGroup>
                {isDesktop && <Logo src={skillObject.logo} alt="" />}
                <SkillsGrid>
                  {skillObject.skills.map(skill => {
                    if (skill.extended && !isDesktop) {
                      return null;
                    }
                    return (
                      <SkillItem
                        key={skill.skill}
                        isLastElementAlone={skillObject.skills.length % 2 !== 0}
                      >
                        <Name>{skill.skill}</Name>
                        <SkillLevel level={skill.level} skill={skill.skill} />
                      </SkillItem>
                    );
                  })}
                </SkillsGrid>
              </SkillsInsideGroup>
            </SkillGroup>
          )}
        </Fragment>
      ))}
    </SkillsArea>
  );
};

Skills.propTypes = {
  cuePointsActivated: instanceOf(Set).isRequired
};

export default Skills;
