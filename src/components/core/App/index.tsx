import { useEffect, ReactElement } from 'react';
import { ILanguagePreferences } from '../../../types/interfaces';
import ErrorBoundary from '../ErrorBoundary';
import { useStateWithLabel } from '../../../utils/hooks';
import Header from '../../mainComponents/Header';
import LanguagesModal from '../../elements/LanguagesModal';
import MainArea from '../../mainComponents/MainArea';
import {
  HIDE_FOREVER,
  LANG_MODAL_VISIBLE,
  SETTINGS_LOADED
} from '../../../constants';
import { GlobalStyles } from '../../../styles/global';

const App = (): ReactElement => {
  const languageSettings: ILanguagePreferences | Record<string, never> =
    JSON.parse(
      localStorage.getItem("Anna Branco's professional profile") as string
    ) || {};

  const [hideForever, toggleHideForever] = useStateWithLabel<boolean>(
    languageSettings.hideLanguagesModalForever || false,
    HIDE_FOREVER
  );
  const [settingsLoaded, setSettingsLoaded] = useStateWithLabel<boolean>(
    false,
    SETTINGS_LOADED
  );
  const [langModalVisible, toggleModalVisible] = useStateWithLabel<boolean>(
    false,
    LANG_MODAL_VISIBLE
  );
  const [isSeabedElementOpened, openSeabedElement] = useStateWithLabel<boolean>(
    false,
    'isSeabedElementOpened'
  );
  const toggleBlockLangModal = (): void =>
    toggleHideForever(prevState => !prevState);

  const onCloseLanguageModal = (): void => {
    toggleModalVisible(false);
    toggleHideForever(hideForever);
    // setTimeout(() => {
    // // TODO: Review modal button clicking on e2e test. It is not closing modal.
    //   console.log('$$$ langModalVisible', langModalVisible);
    // }, 3000);
  };

  useEffect(() => {
    const loadLanguageSettings = (): void => {
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
      <GlobalStyles />
      {langModalVisible && (
        <LanguagesModal
          hideForever={hideForever}
          onCloseLanguageModal={onCloseLanguageModal}
          toggleBlockLangModal={toggleBlockLangModal}
        />
      )}
      <Header
        hideForever={hideForever}
        isSeabedElementOpened={isSeabedElementOpened}
      />
      {settingsLoaded && (
        <MainArea
          isSeabedElementOpened={isSeabedElementOpened}
          langModalVisible={langModalVisible}
          openSeabedElement={openSeabedElement}
        />
      )}
    </ErrorBoundary>
  );
};

export default App;
