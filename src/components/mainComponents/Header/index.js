import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bool } from 'prop-types';
import appInfo from '../../../../package.json';
import {
  allLanguagesSelector,
  currentLanguageSelector,
  currentSecionSelector,
  headerTitleSelector,
  sectionsTextsSelector
} from '../../../redux/selectors';
import { isDesktop } from '../../../utils/device';
import { getFlagURL } from '../../../utils/icons';
import { onChangeLanguage } from '../../elements/LanguagesModal';
import { INFO_PAGE_SECTION } from '../../../constants';
import { CountryFlag } from '../../sections/Experiences/styles';
import {
  AppTitle,
  Flag,
  HeaderArea,
  LanguagesWrapper,
  Version
} from './styles';

const Header = ({ hideForever, isSeabedElementOpened }) => {
  const APP_VERSION = appInfo.version;
  const languages = useSelector(allLanguagesSelector);
  const languageSelected = useSelector(currentLanguageSelector);
  const title = useSelector(headerTitleSelector);
  const currentSection = useSelector(currentSecionSelector);
  const sections = useSelector(sectionsTextsSelector);

  const dispatch = useDispatch();

  const onCLickFlag = event =>
    onChangeLanguage(
      languageSelected,
      event.currentTarget.lang,
      hideForever,
      dispatch
    );

  const getTitle = () => {
    if (isDesktop || currentSection === INFO_PAGE_SECTION) {
      return title;
    }
    return sections[currentSection];
  };

  return (
    <>
      {!isSeabedElementOpened && (
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
                  <CountryFlag
                    alt=""
                    src={getFlagURL({
                      country: item.flagCode,
                      style: 'flat3d',
                      size: 'small'
                    })}
                  />
                </Flag>
              ))}
          </LanguagesWrapper>
          <AppTitle>{getTitle()}</AppTitle>
          <Version>{APP_VERSION}</Version>
        </HeaderArea>
      )}
    </>
  );
};

Header.propTypes = {
  hideForever: bool.isRequired,
  isSeabedElementOpened: bool.isRequired
};

export default Header;
