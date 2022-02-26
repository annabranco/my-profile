import { ReactElement } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bool } from 'prop-types';
import {
  ILanguageCode,
  ILanguage,
  ISectionsText
} from '../../../types/interfaces';
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

interface Props {
  hideForever: boolean;
  isSeabedElementOpened: boolean;
}

const Header = ({
  hideForever,
  isSeabedElementOpened
}: Props): ReactElement => {
  const APP_VERSION: string = appInfo.version;
  const languages: ILanguage[] = useSelector(allLanguagesSelector);
  const languageSelected: ILanguageCode = useSelector(currentLanguageSelector);
  const title: string = useSelector(headerTitleSelector);
  const currentSection: string = useSelector(currentSecionSelector);
  const sections: ISectionsText = useSelector(sectionsTextsSelector);

  const dispatch = useDispatch();

  const onCLickFlag = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void =>
    onChangeLanguage(
      languageSelected,
      event.currentTarget.lang,
      hideForever,
      dispatch
    );

  const getTitle = (): string => {
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
                  data-e2e-id={`header-flag_${item.flagCode}`}
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
          <AppTitle data-e2e-id="appTitle">{getTitle()}</AppTitle>
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
