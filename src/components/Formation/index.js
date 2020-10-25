import React from 'react';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';
import { isDesktop } from '../../utils/device';
import { getFlagURL } from '../../utils/icons';
import {
  Details,
  DetailsArea,
  FakeText,
  FormationArea,
  FormationItem,
  FormationTitle,
  FormationWrapper,
  SectionFormation,
  VerticalBar
} from './styles';
import { SeabedCloseButton, TextFindSomething } from '../Seabed/styles';
import { HorizontalBar } from '../elements/HorizontalBar/styles';
import { CountryFlag, DateArea, TextDate } from '../Experiences/styles';
import { Title } from '../ScrollSection/styles';
import { seabedElementsPropType } from '../../types';
import {
  formationSelector,
  globalTextsSelector,
  currentLanguageSelector,
  seabedTextsSelector
} from '../../redux/selectors';

const FORMATION_ON_TOP = 'older'; // newer or older

const Formation = ({
  onClickClose,
  onClickOpen,
  status: { read, visible }
}) => {
  const formation = useSelector(formationSelector);
  const languageSelected = useSelector(currentLanguageSelector);
  const texts = useSelector(seabedTextsSelector);
  const globalTexts = useSelector(globalTextsSelector);

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
      <SectionFormation
        id="Formation Section"
        onClick={() => onClickOpen('formationSection')}
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
              onClick={() => onClickClose('formationSection')}
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
                        margin="9%"
                        moveY="25px"
                        width={`${(60 / formation.length) *
                          ((index + 1) * 10)}px`}
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
                        <FormationTitle>
                          {item.title[languageSelected]}
                        </FormationTitle>
                        <Details>
                          {item.university}
                          <CountryFlag
                            src={getFlagURL(item.countryCode, 'flat', 'small')}
                            alt={item.country[languageSelected]}
                          />
                        </Details>
                        {item.gradeText && (
                          <Details>
                            {item.gradeText[languageSelected]}
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
  onClickClose: func.isRequired,
  onClickOpen: func.isRequired,
  status: seabedElementsPropType.isRequired
};

export default Formation;
