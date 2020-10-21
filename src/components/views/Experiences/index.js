import React from 'react';
import { arrayOf, string } from 'prop-types';
import { getFlagURL } from '../../../utils/icons';
// import { HorizontalBar } from '../Formation/styles';
import { experiencesPropType, globalTextsPropType } from '../../../types';
import {
  ExperiencesArea,
  VerticalBar,
  ExperiencesWrapper,
  ExperienceItem,
  DateArea,
  TextDate,
  DetailsArea,
  Title,
  Company,
  CountryFlag,
  Details,
  City
} from './styles';
import { HorizontalBar } from '../elements/HorizontalBar/styles';

const EXPERIENCE_ON_TOP = 'newer'; // newer or older

const Experiences = ({ texts, experiences, language, cuePointsActivated }) => {
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
                visible={cuePointsActivated.includes(item.id)}
              >
                <HorizontalBar
                  border="2px"
                  width="20%"
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
                <DetailsArea visible={cuePointsActivated.includes(item.id)}>
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
  experiences: arrayOf(experiencesPropType).isRequired,
  language: string.isRequired,
  texts: globalTextsPropType.isRequired,
  cuePointsActivated: arrayOf(string).isRequired
};

export default Experiences;
