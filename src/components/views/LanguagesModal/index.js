import React from 'react';
import { arrayOf, bool, func, string } from 'prop-types';
import AppButton from '../elements/AppButton';
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
import { languagesPropType, languagesTextPropType } from '../../../types/index';

const LanguagesModal = ({
  hideForever,
  languages,
  languageSelected,
  onChangeLanguage,
  onCloseLanguageModal,
  texts,
  toggleBlockLangModal
}) => (
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
            onClick={onChangeLanguage}
            role="button"
            tabIndex={0}
          >
            <Label>{item.language}</Label>
            <Image
              alt=""
              lang={item.languageCode}
              languageSelected={languageSelected}
              src={`https://www.countryflags.io/${item.flagCode}/shiny/64.png`}
            />
          </Flag>
        ))}
      </FlagsWrapper>

      <Text>{texts.changeUpperBar}</Text>
      <CheckBoxArea>
        <CheckBox
          checked={hideForever}
          className="languages__checkbox"
          onClick={toggleBlockLangModal}
          type="checkbox"
        />
        {texts.chekboxText}
      </CheckBoxArea>
      <AppButton
        buttonStyle="confirm"
        onClick={onCloseLanguageModal}
        text="ok"
      />
    </ModalWrapper>
  </BackgroundOverlay>
);

LanguagesModal.propTypes = {
  hideForever: bool.isRequired,
  languages: arrayOf(languagesPropType).isRequired,
  languageSelected: string.isRequired,
  onChangeLanguage: func.isRequired,
  onCloseLanguageModal: func.isRequired,
  texts: languagesTextPropType.isRequired,
  toggleBlockLangModal: func.isRequired
};

export default LanguagesModal;
