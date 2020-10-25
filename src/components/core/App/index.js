import React, { useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { useStateWithLabel } from '../../../utils/hooks';
import Header from '../../Header';
import LanguagesModal from '../../LanguagesModal';
import MainArea from '../../MainArea';
import {
  HIDE_FOREVER,
  LANG_MODAL_VISIBLE,
  SETTINGS_LOADED
} from '../../../constants';

const App = () => {
  const languageSettings =
    JSON.parse(localStorage.getItem("Anna Branco's professional profile")) ||
    {};

  const [hideForever, toggleHideForever] = useStateWithLabel(
    languageSettings.hideLanguagesModalForever || false,
    HIDE_FOREVER
  );
  const [settingsLoaded, setSettingsLoaded] = useStateWithLabel(
    false,
    SETTINGS_LOADED
  );
  const [langModalVisible, toggleModalVisible] = useStateWithLabel(
    false,
    LANG_MODAL_VISIBLE
  );

  const toggleBlockLangModal = () => toggleHideForever(prevState => !prevState);

  const onCloseLanguageModal = () => {
    toggleModalVisible(false);
    toggleHideForever(hideForever);
  };

  useEffect(() => {
    const loadLanguageSettings = () => {
      toggleHideForever(
        languageSettings.hideLanguagesModalForever || hideForever
      );
      setSettingsLoaded(true);
    };
    loadLanguageSettings();
    if (!hideForever) {
      toggleModalVisible(true);
    }
  }, [
    hideForever,
    languageSettings.hideLanguagesModalForever,
    setSettingsLoaded,
    toggleHideForever,
    toggleModalVisible
  ]);

  return (
    <ErrorBoundary>
      {langModalVisible && (
        <LanguagesModal
          hideForever={hideForever}
          onCloseLanguageModal={onCloseLanguageModal}
          toggleBlockLangModal={toggleBlockLangModal}
        />
      )}
      <Header hideForever={hideForever} />
      {settingsLoaded && <MainArea langModalVisible={langModalVisible} />}
    </ErrorBoundary>
  );
};

export default App;
