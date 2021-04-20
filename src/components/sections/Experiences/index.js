import React from 'react';
import { useSelector } from 'react-redux';
import { instanceOf } from 'prop-types';
import {
  currentLanguageSelector,
  experiencesSelector,
  globalTextsSelector
} from '../../../redux/selectors';
import { getFlagURL } from '../../../utils/icons';
import {
  City,
  Company,
  CountryFlag,
  DateArea,
  Details,
  DetailsArea,
  ExperienceItem,
  ExperiencesArea,
  ExperiencesWrapper,
  TextDate,
  Title,
  VerticalBar
} from './styles';
import { HorizontalBar } from '../../elements/HorizontalBar/styles';
import { isDesktop } from '../../../utils/device';
import AppModal from '../../mainComponents/AppModal';
import { useStateWithLabel } from '../../../utils/hooks';

const EXPERIENCE_ON_TOP = 'newer'; // newer or older

const Experiences = ({ cuePointsActivated }) => {
  const experiences = useSelector(experiencesSelector);
  const languageSelected = useSelector(currentLanguageSelector);
  const texts = useSelector(globalTextsSelector);

  const [selectedExperience, selectExperience] = useStateWithLabel(
    null,
    'selectedExperience'
  );

  const customOrder = (x, y) => {
    if (EXPERIENCE_ON_TOP === 'older') {
      return x.dateBeginValue - y.dateBeginValue;
    }
    return y.dateBeginValue - x.dateBeginValue;
  };

  return (
    <ExperiencesArea>
      <VerticalBar />
      <ExperiencesWrapper>
        {experiences.sort(customOrder).map(
          (item, index) =>
            item.visible && (
              <ExperienceItem
                key={item.dateBeginValue}
                onClick={isDesktop ? () => null : () => selectExperience(item)}
                visible={cuePointsActivated.has(item.id)}
              >
                <HorizontalBar
                  border="2px"
                  margin="9%"
                  moveY="25px"
                  formationItems={experiences.length}
                  index={index}
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
                <DetailsArea visible={cuePointsActivated.has(item.id)}>
                  <Title>{item.title[languageSelected]}</Title>
                  <Company>
                    {item.company}
                    <CountryFlag
                      src={getFlagURL(
                        item.country.countryCode,
                        'flat',
                        'small'
                      )}
                      alt={item.country[languageSelected]}
                    />
                    <City>{item.place}</City>
                  </Company>
                  {isDesktop && (
                    <Details>{item.details[languageSelected]}</Details>
                  )}
                </DetailsArea>
              </ExperienceItem>
            )
        )}
      </ExperiencesWrapper>
      {selectedExperience && (
        <AppModal closeAction={() => selectExperience(null)}>
          <DetailsArea
            visible={cuePointsActivated.has(selectedExperience.id)}
            modal
          >
            <Title>{selectedExperience.title[languageSelected]}</Title>
            <Company>
              {selectedExperience.company}
              <CountryFlag
                src={getFlagURL(
                  selectedExperience.country.countryCode,
                  'flat',
                  'small'
                )}
                alt={selectedExperience.country[languageSelected]}
              />
              <City>{selectedExperience.place}</City>
            </Company>
            <Details>{selectedExperience.details[languageSelected]}</Details>
          </DetailsArea>
        </AppModal>
      )}
    </ExperiencesArea>
  );
};

Experiences.propTypes = {
  cuePointsActivated: instanceOf(Set).isRequired
};

export default Experiences;
