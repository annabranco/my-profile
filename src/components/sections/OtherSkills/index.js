import React from 'react';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';
import { otherSkillsTextSelector } from '../../../redux/selectors';
import { isDesktop } from '../../../utils/device';
import OtherSkillsInfo from './OtherSkillsInfo';
import { MacNotebook } from '../../../assets/images';
import { seabedElementsPropType } from '../../../types/propTypes';
import { TextFindSomething } from '../Seabed/styles';
import {
  KeyboardKeysWrapper,
  Keys,
  MacKeyboard,
  MacScreen,
  SectionOtherSkills,
  TopBar
} from './styles';

const OtherSkills = ({
  onClickClose,
  onClickOpen,
  status: { read, visible }
}) => {
  const texts = useSelector(otherSkillsTextSelector);

  return (
    <>
      {!read && isDesktop ? (
        <>
          <TextFindSomething>{texts.find}</TextFindSomething>
          <TextFindSomething>{texts.find2}</TextFindSomething>
          <TextFindSomething>{texts.investigate}</TextFindSomething>
        </>
      ) : null}

      <SectionOtherSkills id="Other Skills Section" visible={visible}>
        {isDesktop && <TopBar visible={visible} src={MacNotebook} alt="" />}
        <MacScreen visible={visible}>
          <OtherSkillsInfo
            onClickOpen={onClickOpen}
            onClickClose={onClickClose}
            visible={visible}
          />
        </MacScreen>
        <MacKeyboard hidden={visible} />
        <KeyboardKeysWrapper hidden={visible}>
          <Keys> . . . . . . . ...</Keys>
          <Keys>... . . . . . . ..</Keys>
          <Keys>. . . . . . . . . .</Keys>
          <Keys>. . . . . . . . . .</Keys>
          <Keys>------......</Keys>
        </KeyboardKeysWrapper>
      </SectionOtherSkills>
    </>
  );
};

OtherSkills.propTypes = {
  onClickClose: func.isRequired,
  onClickOpen: func.isRequired,
  status: seabedElementsPropType.isRequired
};

export default OtherSkills;
