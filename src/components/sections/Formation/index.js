import React from 'react';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';
import {
  formationSelector,
  globalTextsSelector,
  currentLanguageSelector,
  seabedTextsSelector
} from '../../../redux/selectors';
import { isDesktop } from '../../../utils/device';
import { getFlagURL } from '../../../utils/icons';
import { seabedElementsPropType } from '../../../types/propTypes';
import { HorizontalBar } from '../../elements/HorizontalBar/styles';
import { Title } from '../../mainComponents/ScrollArea/ScrollSection/styles';
import { CountryFlag, DateArea, TextDate } from '../Experiences/styles';
import { TextFindSomething } from '../Seabed/styles';
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
          <FormationArea onClick={() => onClickClose('formationSection')}>
            <VerticalBar />
            <FormationWrapper>
              {isDesktop && <Title>{texts.formation}</Title>}
              {formation.sort(customOrder).map(
                (item, index) =>
                  item.visible && (
                    <FormationItem visible key={item.dateBeginValue}>
                      <HorizontalBar
                        border="4px"
                        formationItems={formation.length}
                        index={index}
                        margin="9%"
                        moveY="25px"
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
                        formationItems={formation.length}
                        index={index}
                      >
                        <FormationTitle>
                          {item.title[languageSelected]}
                        </FormationTitle>
                        <Details>
                          {item.university}
                          <CountryFlag
                            alt={item.country[languageSelected]}
                            formation
                            round
                            src={getFlagURL({
                              country: item.countryCode,
                              size: 'small',
                              style: 'round3d'
                            })}
                          />
                        </Details>
                        {item.gradeText && (
                          <Details subtext>
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
  onClickClose: func,
  onClickOpen: func,
  status: seabedElementsPropType.isRequired
};

Formation.defaultProps = {
  onClickClose: () => null,
  onClickOpen: () => null
};

export default Formation;
