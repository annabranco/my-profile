import React from 'react';
import { arrayOf, func, string } from 'prop-types';
import {
  experiencesTextPropType,
  seabedElementsPropType,
  globalTextsPropType,
  formationPropType
} from '../../../types';
import { isDesktop } from '../../../utils/device';
import {
  SeabedCloseButton,
  TextFindSomething
} from '../../containers/Seabed/styles';
import {
  FakeText,
  SectionFormation,
  FormationArea,
  // FormationPart,
  // Year,
  VerticalBar,
  // Separator,
  // Title,
  // Details,
  // Flag,
  // MoreInfo,
  // Link,
  FormationWrapper,
  FormationTitle,
  Details,
  FormationItem,
  DetailsArea
} from './styles';
import { HorizontalBar } from '../elements/HorizontalBar/styles';
import { CountryFlag, DateArea, TextDate } from '../Experiences/styles';
import { Title } from '../ScrollSection/styles';
import { getFlagURL } from '../../../utils/icons';

const FORMATION_ON_TOP = 'older'; // newer or older

const Formation = ({
  texts,
  globalTexts,
  formation,
  status: { read, visible },
  onClickOpen,
  onClickClose,
  language
}) => {
  const customOrder = (x, y) => {
    if (FORMATION_ON_TOP === 'older') {
      return x.dateBeginValue - y.dateBeginValue;
    }
    return y.dateBeginValue - x.dateBeginValue;
  };

  return (
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
        id="Formation Section"
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
          <FormationArea>
            <SeabedCloseButton
              onClick={() => onClickClose('experiences')}
              type="button"
              aria-label={globalTexts.close}
            >
              X
            </SeabedCloseButton>
            <VerticalBar />
            <FormationWrapper>
              <Title>{texts.formation}</Title>
              {formation.sort(customOrder).map(
                (item, index) =>
                  item.visible && (
                    <FormationItem visible key={item.dateBeginValue}>
                      <HorizontalBar
                        border="4px"
                        width={`${(60 / formation.length) *
                          ((index + 1) * 10)}px`}
                        moveY="25px"
                        margin="9%"
                      />
                      <DateArea>
                        {!item.dateEnd && <TextDate>{texts.since}</TextDate>}
                        <TextDate>{item.dateBegin}</TextDate>
                        {item.dateEnd && (
                          <>
                            <TextDate>-</TextDate>
                            <TextDate>{item.dateEnd}</TextDate>
                          </>
                        )}
                      </DateArea>
                      <DetailsArea
                        margin={`${(60 / formation.length) *
                          ((index + 1) * 6)}px`}
                      >
                        <FormationTitle>{item.title[language]}</FormationTitle>
                        <Details>
                          {item.university}
                          <CountryFlag
                            src={getFlagURL(item.countryCode, 'flat', 'small')}
                            alt={item.country[language]}
                          />
                        </Details>
                        {item.gradeText && (
                          <Details>
                            {item.gradeText[language]}
                            {item.grade.toFixed(2)}
                          </Details>
                        )}
                      </DetailsArea>
                    </FormationItem>
                  )
              )}
            </FormationWrapper>
          </FormationArea>
        )}
      </SectionFormation>
    </>
  );
};

Formation.propTypes = {
  texts: experiencesTextPropType.isRequired,
  globalTexts: globalTextsPropType.isRequired,
  formation: arrayOf(formationPropType).isRequired,
  status: seabedElementsPropType.isRequired,
  onClickOpen: func.isRequired,
  onClickClose: func.isRequired,
  language: string.isRequired
};

export default Formation;
