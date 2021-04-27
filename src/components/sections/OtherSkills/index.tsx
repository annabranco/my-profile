import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';
import { ISeabedElements } from '../../../types/interfaces';
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

interface Props {
  onClickClose: (type: string) => void;
  onClickOpen: (type: string) => void;
  status: ISeabedElements;
}

const OtherSkills = ({
  onClickClose,
  onClickOpen,
  status: { read, visible }
}: Props): ReactElement => {
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
