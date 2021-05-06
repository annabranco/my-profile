import { ReactElement } from 'react';
import { bool } from 'prop-types';
import { ISkillGroups } from '../../../../types/interfaces';
import SkillLevel from '../SkillLevel';
import { isDesktop } from '../../../../utils/device';
import { skillGroupsPropType } from '../../../../types/propTypes';
import { FrontendGroup, Logo, LogoWrapper, SkillsWrapper } from './styles';
import { Name, SkillItem, Title } from '../styles';

interface Props {
  details: ISkillGroups;
  visible: boolean;
}

const FrontendSkillGroup = ({ details, visible }: Props): ReactElement => (
  <FrontendGroup visible={visible}>
    <Title group={details.name}>
      <h3>{details.name}</h3>
    </Title>
    <SkillsWrapper>
      {details.skills.map(skill => {
        if (!isDesktop && skill.extended) {
          return null;
        }
        return (
          <SkillItem group={details.name} key={`${skill.order}-${skill.skill}`}>
            <Name>{skill.skill}</Name>

            {skill.logo && (
              <LogoWrapper>
                <Logo src={skill.logo} alt={skill.skill} name={skill.skill} />
              </LogoWrapper>
            )}

            <SkillLevel level={skill.level} skill={skill.skill} />
          </SkillItem>
        );
      })}
    </SkillsWrapper>
  </FrontendGroup>
);

FrontendSkillGroup.propTypes = {
  details: skillGroupsPropType.isRequired,
  visible: bool.isRequired
};

export default FrontendSkillGroup;
