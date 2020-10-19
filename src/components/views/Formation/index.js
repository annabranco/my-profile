import React from 'react';
import { PropTypes } from 'prop-types';
import {
  experiencesTextPropType,
  seabedElementsPropType,
  globalTextsPropType,
  formationPropType
} from '../../../types';
import { isDesktop } from '../../../utils/device';
// import {  } from './styles.js';
import {
  SeabedCloseButton,
  TextFindSomething
} from '../../containers/Seabed/styles';
import {
  FakeText,
  SectionFormation,
  FormationWrapper,
  FormationInnerWrapper,
  FormationYear,
  FormationVerticalBar,
  FormationSeparator,
  FormationHorizontalBar,
  FormationTitle,
  FormationDetails,
  FormationFlag,
  FormationMore,
  FormationMoreLink
} from './styles';

const Formation = ({
  texts,
  globalTexts,
  formation,
  status: { read, visible },
  onClickOpen,
  onClickClose
}) => (
  <>
    {!read && isDesktop ? (
      <>
        <TextFindSomething>{texts.find}</TextFindSomething>
        <TextFindSomething>{texts.investigate}</TextFindSomething>
      </>
    ) : null}
    {/* <div
        className={`section__experiences ${visible && SHOW_ACTION}`}
        onClick={() => onClickOpen('experiences')}
        role="button"
        aria-label={globalTexts.open}
        tabIndex={0}
      > */}
    <SectionFormation
      onClick={() => onClickOpen('experiences')}
      role="button"
      aria-label={globalTexts.open}
      tabIndex={0}
      visible={visible}
    >
      {!visible ? (
        <>
          <FakeText>- - --- - --</FakeText>
          <FakeText>- -- -- - --</FakeText>
          <FakeText>- -- ---- --</FakeText>
          <FakeText>- - - --- --</FakeText>
        </>
      ) : (
        <FormationWrapper>
          <SeabedCloseButton
            onClick={() => onClickClose('experiences')}
            type="button"
            aria-label={globalTexts.close}
          >
            X
          </SeabedCloseButton>

          <FormationInnerWrapper>
            <FormationYear>09/2017 - 05/2018</FormationYear>
            <FormationYear>10/2015 - 11/2015</FormationYear>
            <FormationYear>05/2005 - 12/2014</FormationYear>
          </FormationInnerWrapper>
          <FormationInnerWrapper>
            <FormationVerticalBar />
          </FormationInnerWrapper>
          <FormationInnerWrapper>
            <FormationSeparator>
              <FormationHorizontalBar />
              <FormationTitle>{texts.ict}</FormationTitle>
              <FormationDetails>
                Servicios Profesionales Sociales, Madrid.
                <FormationFlag
                  src="https://www.countryflags.io/es/flat/16.png"
                  alt={texts.spain}
                  title={texts.spain}
                />
              </FormationDetails>
              <FormationDetails>{texts.ictDetails}</FormationDetails>
            </FormationSeparator>
            <FormationSeparator>
              <FormationHorizontalBar />
              <FormationTitle>{texts.eru}</FormationTitle>
              <FormationDetails>
                Cruz Roja Española
                <FormationFlag
                  src="https://www.countryflags.io/es/flat/16.png"
                  alt={texts.spain}
                  title={texts.spain}
                />
              </FormationDetails>
              <FormationDetails>{texts.eruDetails}</FormationDetails>
            </FormationSeparator>
            <FormationSeparator>
              <FormationHorizontalBar />
              <FormationTitle>{texts.tj}</FormationTitle>
              <FormationDetails>
                Tribunal de Justiça do Estado do Rio de Janeiro{' '}
                <FormationFlag
                  src="https://www.countryflags.io/br/flat/16.png"
                  alt={texts.brazil}
                  title={texts.brazil}
                />
              </FormationDetails>
              <FormationDetails>{texts.tjDetails}</FormationDetails>
            </FormationSeparator>
          </FormationInnerWrapper>
          <FormationMore>
            {texts.linkedin}
            <FormationMoreLink
              href="https://www.linkedin.com/in/annabranco/"
              target="_Blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in icon-linkedin" />
            </FormationMoreLink>
          </FormationMore>
        </FormationWrapper>
      )}
    </SectionFormation>
  </>
);

Formation.propTypes = {
  texts: experiencesTextPropType.isRequired,
  globalTexts: globalTextsPropType.isRequired,
  formation: PropTypes.arrayOf(formationPropType).isRequired,
  status: seabedElementsPropType.isRequired,
  onClickOpen: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired
};

export default Formation;
