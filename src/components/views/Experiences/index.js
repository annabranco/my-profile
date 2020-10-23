import React from 'react';
import { arrayOf, instanceOf, string } from 'prop-types';
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
import { HorizontalBar } from '../elements/HorizontalBar/styles';
import { experiencesTextPropType, globalTextsPropType } from '../../../types';

const EXPERIENCE_ON_TOP = 'newer'; // newer or older

const Experiences = ({ cuePointsActivated, experiences, language, texts }) => {
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
          item =>
            item.visible && (
              <ExperienceItem
                key={item.dateBeginValue}
                visible={cuePointsActivated.has(item.id)}
              >
                <HorizontalBar
                  border="2px"
                  margin="9%"
                  moveY="25px"
                  width="20%"
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
                  <Title>{item.title[language]}</Title>
                  <Company>
                    {item.company}
                    <CountryFlag
                      src={getFlagURL(
                        item.country.countryCode,
                        'flat',
                        'small'
                      )}
                      alt={item.country[language]}
                    />
                    <City>{item.place}</City>
                  </Company>
                  <Details>{item.details[language]}</Details>
                </DetailsArea>
              </ExperienceItem>
            )
        )}
      </ExperiencesWrapper>
    </ExperiencesArea>
  );
};

Experiences.propTypes = {
  cuePointsActivated: instanceOf(Set).isRequired,
  experiences: arrayOf(experiencesTextPropType).isRequired,
  language: string.isRequired,
  texts: globalTextsPropType.isRequired
};

export default Experiences;
