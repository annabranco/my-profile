import React from 'react';
import { string, arrayOf, func } from 'prop-types';
import { languagesTextPropType, languagesPropType } from '../../../types/index';
import {
  BackgroundOverlay,
  ModalWrapper,
  ModalText,
  FlagsWrapper,
  FlagImage,
  FlagLabel,
  Flag,
  CheckBox,
  CheckBoxArea
} from './styles';
import AppButton from '../../elements/AppButton';

const LanguagesModal = ({
  texts,
  languages,
  languageSelected,
  onChangeLanguage,
  onCloseLanguageModal,
  handleShowLanguageModalAgain
}) => (
  <BackgroundOverlay>
    <ModalWrapper>
      <FlagsWrapper>
        {languages.map(item => (
          <Flag
            onClick={onChangeLanguage}
            role="button"
            aria-label={item.language}
            tabIndex={0}
            lang={item.languageCode}
            languageSelected={languageSelected}
            key={item.languageCode}
            active={item.active}
          >
            <FlagLabel>{item.language}</FlagLabel>
            <FlagImage
              src={`https://www.countryflags.io/${item.flagCode}/shiny/64.png`}
              alt=""
              lang={item.languageCode}
              languageSelected={languageSelected}
            />
          </Flag>
        ))}
      </FlagsWrapper>

      <ModalText>{texts.changeUpperBar}</ModalText>
      <CheckBoxArea>
        <CheckBox
          type="checkbox"
          className="languages__checkbox"
          onClick={handleShowLanguageModalAgain}
        />
        {texts.chekboxText}
      </CheckBoxArea>
      <AppButton
        text="ok"
        onClick={onCloseLanguageModal}
        buttonStyle="confirm"
      />
    </ModalWrapper>
  </BackgroundOverlay>
);

LanguagesModal.propTypes = {
  texts: languagesTextPropType.isRequired,
  languageSelected: string.isRequired,
  languages: arrayOf(languagesPropType).isRequired,
  onChangeLanguage: func.isRequired,
  onCloseLanguageModal: func.isRequired,
  handleShowLanguageModalAgain: func.isRequired
};

export default LanguagesModal;
