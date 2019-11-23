import React from 'react';
import { PropTypes } from 'prop-types';
import { getFlagURL } from '../../../utils/icons';
import { experiencesPropType, globalTextsPropType } from '../../../types';
import {
  SectionExperiences,
  VerticalBar,
  ExperiencesWrapper,
  ExperienceItem,
  DateField,
  TextDate,
  DetailsField,
  ExperienceTitle,
  ExperienceCompany,
  CountryFlag,
  ExperienceDetails,
  ExperiencePlace
} from './styles';

const EXPERIENCE_ON_TOP = 'newer'; // newer or older

const Experiences = ({ texts, experiences, language, cuePointsActivated }) => {
  const customOrder = (x, y) => {
    if (EXPERIENCE_ON_TOP === 'older') {
      return x.dateBeginValue - y.dateBeginValue;
    }
    return y.dateBeginValue - x.dateBeginValue;
  };

  return (
    <SectionExperiences id="experiences">
      <VerticalBar />
      <ExperiencesWrapper>
        {experiences.sort(customOrder).map(
          item =>
            item.visible && (
              <ExperienceItem
                key={item.dateBeginValue}
                visible={cuePointsActivated.includes(item.id)}
              >
                <DateField>
                  {!item.dateEnd && <TextDate>{texts.since}</TextDate>}
                  <TextDate>{item.dateBegin}</TextDate>
                  {item.dateEnd && (
                    <>
                      <TextDate>-</TextDate>
                      <TextDate>{item.dateEnd}</TextDate>
                    </>
                  )}
                </DateField>
                <DetailsField>
                  <ExperienceTitle>{item.title[language]}</ExperienceTitle>
                  <ExperienceCompany>
                    {item.company}
                    <CountryFlag
                      src={getFlagURL(
                        item.country.countryCode,
                        'flat',
                        'small'
                      )}
                      alt={item.country[language]}
                    />
                    <ExperiencePlace>{item.place}</ExperiencePlace>
                  </ExperienceCompany>
                  <ExperienceDetails>
                    {item.details[language]}
                  </ExperienceDetails>
                </DetailsField>
              </ExperienceItem>
            )
        )}
      </ExperiencesWrapper>
    </SectionExperiences>
  );
};

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(experiencesPropType).isRequired,
  language: PropTypes.string.isRequired,
  texts: globalTextsPropType.isRequired,
  cuePointsActivated: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Experiences;
