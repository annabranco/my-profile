import React, { useEffect } from 'react';
import { arrayOf, string } from 'prop-types';
import { useStateWithLabel } from '../../../utils/hooks';
import { getLanguageCodeByName } from '../../../utils/languages';
import ErrorBoundary from '../ErrorBoundary';
import { MainArea } from '../../containers';
import { Header } from '../../views';
import {
  BLOCK_LANG_MODAL,
  DISPLAY_THANKS,
  LANGUAGE,
  SETTINGS_LOADED
} from '../../../constants';
import {
  allLanguagesTextsPropType,
  experiencesTextPropType,
  formationPropType,
  languagesPropType,
  projectsPropType,
  skillGroupsPropType
} from '../../../types';

const DEFAULT_PAGE_LANGUAGE = 'English';

const App = ({
  APP_VERSION,
  experiences,
  formation,
  languages,
  projects,
  skills,
  texts
}) => {
  const [blockLangModal, toggleBlockModal] = useStateWithLabel(
    false,
    BLOCK_LANG_MODAL
  );
  const [displayThanks, setDisplayThanks] = useStateWithLabel(
    false,
    DISPLAY_THANKS
  );
  const [language, setLanguage] = useStateWithLabel(
    getLanguageCodeByName(DEFAULT_PAGE_LANGUAGE),
    LANGUAGE
  );
  const [settingsLoaded, setSettingsLoaded] = useStateWithLabel(
    false,
    SETTINGS_LOADED
  );

  const onChangeLanguage = event => setLanguage(event.currentTarget.lang);

  const closeLanguageModal = hideForever => {
    toggleBlockModal(hideForever);
    localStorage.setItem(
      "Anna Branco's professional profile",
      JSON.stringify({
        language,
        hideLanguagesModalForever: hideForever
      })
    );
  };

  const triggerThankYouMessage = () => setDisplayThanks(true);

  useEffect(() => {
    const loadLanguageSettings = () => {
      const languageSettings =
        JSON.parse(
          localStorage.getItem("Anna Branco's professional profile")
        ) || {};
      toggleBlockModal(
        languageSettings.hideLanguagesModalForever || blockLangModal
      );
      setSettingsLoaded(true);
    };

    loadLanguageSettings();
  }, [blockLangModal, language, setSettingsLoaded, toggleBlockModal]);

  return (
    <ErrorBoundary texts={texts[language].error}>
      <Header
        APP_VERSION={APP_VERSION}
        language={language}
        languages={languages}
        onChangeLanguage={onChangeLanguage}
        texts={texts[language].header}
      />
      {settingsLoaded && (
        <MainArea
          blockLangModal={blockLangModal}
          closeLanguageModal={closeLanguageModal}
          displayThanks={displayThanks}
          experiences={experiences}
          formation={formation}
          language={language}
          languages={languages}
          onChangeLanguage={onChangeLanguage}
          projects={projects}
          skills={skills}
          texts={texts[language]}
          triggerThankYouMessage={triggerThankYouMessage}
        />
      )}
    </ErrorBoundary>
  );
};

App.propTypes = {
  APP_VERSION: string.isRequired,
  experiences: arrayOf(experiencesTextPropType).isRequired,
  formation: arrayOf(formationPropType).isRequired,
  languages: arrayOf(languagesPropType).isRequired,
  projects: arrayOf(projectsPropType).isRequired,
  skills: arrayOf(skillGroupsPropType).isRequired,
  texts: allLanguagesTextsPropType.isRequired
};

export default App;
