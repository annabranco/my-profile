import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bool, func } from 'prop-types';
import {
  allLanguagesSelector,
  currentLanguageSelector,
  languagesModelTextsSelector
} from '../../../redux/selectors';
import { changeLanguage } from '../../../redux/actions/languages';
import { getFlagURL } from '../../../utils/icons';
import AppButton from '../../elements/AppButton';
import {
  BackgroundOverlay,
  CheckBox,
  CheckBoxArea,
  Flag,
  FlagsWrapper,
  Image,
  Label,
  ModalWrapper,
  Text
} from './styles';

const updateLanguageSettings = (language, hideForever) =>
  localStorage.setItem(
    "Anna Branco's professional profile",
    JSON.stringify({
      language,
      hideLanguagesModalForever: hideForever
    })
  );

export const onChangeLanguage = (
  currentLang,
  newLang,
  hideForever,
  dispatch
) => {
  if (newLang !== currentLang) {
    dispatch(changeLanguage(newLang));
    updateLanguageSettings(newLang, hideForever);
  }
};

const LanguagesModal = ({
  hideForever,
  onCloseLanguageModal,
  toggleBlockLangModal
}) => {
  const texts = useSelector(languagesModelTextsSelector);
  const languages = useSelector(allLanguagesSelector);
  const languageSelected = useSelector(currentLanguageSelector);

  const dispatch = useDispatch();

  const onClickClose = event => {
    event.stopPropagation();
    onCloseLanguageModal(hideForever);
    updateLanguageSettings(languageSelected, hideForever);
  };

  const onCLickFlag = event => {
    event.stopPropagation();
    onChangeLanguage(
      languageSelected,
      event.currentTarget.lang,
      hideForever,
      dispatch
    );
  };

  return (
    <BackgroundOverlay>
      <ModalWrapper>
        <FlagsWrapper>
          {languages.map(item => (
            <Flag
              active={item.active}
              aria-label={item.language}
              key={item.languageCode}
              lang={item.languageCode}
              languageSelected={languageSelected}
              onClick={onCLickFlag}
              role="button"
              tabIndex={0}
            >
              <Label>{item.language}</Label>
              <Image
                alt=""
                lang={item.languageCode}
                languageSelected={languageSelected}
                src={getFlagURL({
                  country: item.flagCode,
                  style: 'flat3d',
                  size: 'small'
                })}
              />
            </Flag>
          ))}
        </FlagsWrapper>

        <Text>{texts.changeUpperBar}</Text>
        <CheckBoxArea role="checkbox" onClick={toggleBlockLangModal}>
          <CheckBox
            checked={hideForever}
            className="languages__checkbox"
            id="checkLang"
            name="hideForever"
            onClick={toggleBlockLangModal}
            readOnly
            type="checkbox"
          />
          <label htmlFor="blockLang">{texts.chekboxText}</label>
        </CheckBoxArea>
        <AppButton buttonStyle="confirm" onClick={onClickClose} text="ok" />
      </ModalWrapper>
    </BackgroundOverlay>
  );
};

LanguagesModal.propTypes = {
  hideForever: bool.isRequired,
  onCloseLanguageModal: func.isRequired,
  toggleBlockLangModal: func.isRequired
};

export default LanguagesModal;
