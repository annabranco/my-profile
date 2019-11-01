import React from 'react';
import { PropTypes } from 'prop-types';
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

const LanguagesModal = ({
  frenchClicked,
  texts,
  languages,
  languageSelected,
  onChangeLanguage,
  onCloseLanguageModal,
  handleShowLanguageModalAgain
}) => (
  <BackgroundOverlay>
    <ModalWrapper>
      <ModalText frenchClicked={frenchClicked}>
        {frenchClicked ? '' : texts.readingLanguage}
      </ModalText>

      <ModalText frenchClicked={frenchClicked}>
        {frenchClicked
          ? "Je suis désolée mais le français n'est pas encore implementé."
          : texts.changeDefault}
      </ModalText>

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
          defaultChecked
        />
        {texts.chekboxText}
      </CheckBoxArea>
      <button
        className="languages__close"
        onClick={onCloseLanguageModal}
        type="button"
      >
        ok
      </button>
    </ModalWrapper>
  </BackgroundOverlay>
);

LanguagesModal.propTypes = {
  texts: languagesTextPropType.isRequired,
  languageSelected: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(languagesPropType).isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  onCloseLanguageModal: PropTypes.func.isRequired,
  handleShowLanguageModalAgain: PropTypes.func.isRequired
};

export default LanguagesModal;
