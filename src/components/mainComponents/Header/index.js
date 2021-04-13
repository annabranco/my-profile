import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bool } from 'prop-types';
import appInfo from '../../../../package.json';
import {
  allLanguagesSelector,
  currentLanguageSelector,
  headerTitleSelector
} from '../../../redux/selectors';
import { onChangeLanguage } from '../../core/LanguagesModal';
import {
  AppTitle,
  Flag,
  HeaderArea,
  LanguagesWrapper,
  Version
} from './styles';

const Header = ({ hideForever }) => {
  const APP_VERSION = appInfo.version;
  const languages = useSelector(allLanguagesSelector);
  const languageSelected = useSelector(currentLanguageSelector);
  const title = useSelector(headerTitleSelector);
  const dispatch = useDispatch();

  const onCLickFlag = event =>
    onChangeLanguage(
      languageSelected,
      event.currentTarget.lang,
      hideForever,
      dispatch
    );

  return (
    <HeaderArea>
      <LanguagesWrapper>
        {languages
          .filter(item => item.active)
          .map(item => (
            <Flag
              aria-label={item.language}
              key={item.languageCode}
              lang={item.languageCode}
              languageSelected={languageSelected}
              onClick={onCLickFlag}
              role="button"
              tabIndex={0}
            >
              <img
                alt=""
                src={`https://www.countryflags.io/${item.flagCode}/flat/16.png`}
              />
            </Flag>
          ))}
      </LanguagesWrapper>
      <AppTitle>{title}</AppTitle>
      <Version>{APP_VERSION}</Version>
    </HeaderArea>
  );
};

Header.propTypes = {
  hideForever: bool.isRequired
};

export default Header;
