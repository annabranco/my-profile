import React, { useEffect } from 'react';
import { arrayOf, string, bool, func } from 'prop-types';
import { useStateWithLabel } from '../../../utils/hooks';
import ScrollArea from '../ScrollArea';
import { LanguagesModal } from '../../views';
import { LANG_MODAL_VISIBLE, BLOCK_LANG_MODAL } from '../../../constants';
import {
  experiencesTextPropType,
  formationPropType,
  languagesPropType,
  projectsPropType,
  skillGroupsPropType,
  textsPropType
} from '../../../types';

const MainArea = ({
  blockLangModal,
  closeLanguageModal,
  onChangeLanguage,
  displayThanks,
  experiences,
  formation,
  language,
  languages,
  projects,
  skills,
  texts,
  triggerThankYouMessage
}) => {
  const [hideForever, toggleHideForever] = useStateWithLabel(
    false,
    BLOCK_LANG_MODAL
  );
  const [langModalVisible, toggleModalVisible] = useStateWithLabel(
    false,
    LANG_MODAL_VISIBLE
  );

  useEffect(() => {
    if (!blockLangModal) {
      toggleModalVisible(true);
    }
  }, []);

  const toggleBlockLangModal = event =>
    toggleHideForever(event.currentTarget.checked);

  const onCloseLanguageModal = () => {
    toggleModalVisible(false);
    closeLanguageModal(hideForever);
  };

  return (
    <main>
      {langModalVisible && (
        <LanguagesModal
          hideForever={hideForever}
          languages={languages}
          languageSelected={language}
          onChangeLanguage={onChangeLanguage}
          onCloseLanguageModal={onCloseLanguageModal}
          texts={texts.languages}
          toggleBlockLangModal={toggleBlockLangModal}
        />
      )}
      <ScrollArea
        displayThanks={displayThanks}
        experiences={experiences}
        formation={formation}
        langModalVisible={langModalVisible}
        projects={projects}
        skills={skills}
        texts={texts}
        triggerThankYouMessage={triggerThankYouMessage}
      />
    </main>
  );
};

MainArea.propTypes = {
  blockLangModal: bool.isRequired,
  closeLanguageModal: func.isRequired,
  displayThanks: bool.isRequired,
  experiences: arrayOf(experiencesTextPropType).isRequired,
  formation: arrayOf(formationPropType).isRequired,
  language: string.isRequired,
  languages: arrayOf(languagesPropType).isRequired,
  onChangeLanguage: func.isRequired,
  projects: arrayOf(projectsPropType).isRequired,
  skills: arrayOf(skillGroupsPropType).isRequired,
  texts: textsPropType.isRequired,
  triggerThankYouMessage: func.isRequired
};

export default MainArea;
