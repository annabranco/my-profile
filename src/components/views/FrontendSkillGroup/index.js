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

          {skill.logo && (
            <div className="skills__inner--icon">
              <img src={skill.logo} alt="" className="skills__icon" />
            </div>
          )}

          <SkillLevel level={skill.level} />
        </SkillWrapper>
      ))}
    </FrontendSkillsWrapper>
  </FrontendSkillWrapper>
);

// const get = () => import('../../../images/skills/js.png');

// const FrontendSkillGroup = ({ details }) => {
//   // .then(module => module.default)
//   // .then(path => path);
//   // console.log('$$$ temp2', temp2);
//   // return temp2;

//   return get().then(a => (
//     <FrontendSkillWrapper>
//       <img src={a.default} alt="" />
//       <SkillGroupTitle group={details.name}>{details.name}</SkillGroupTitle>
//       <FrontendSkillsWrapper>
//         {details.skills.map(skill => (
//           <SkillWrapper key={skill.skill}>
//             <SkillName>{skill.skill}</SkillName>
//             {/*
//                   <div className="skills__inner--icon">
//                      <img src={Css} alt="" className="skills__icon" />
//                   </div>
//                   */}
//             <SkillLevel level={skill.level} />
//           </SkillWrapper>
//         ))}
//       </FrontendSkillsWrapper>
//     </FrontendSkillWrapper>
//   ));
// };

FrontendSkillGroup.propTypes = {
  details: PropTypes.string.isRequired
};

export default FrontendSkillGroup;
