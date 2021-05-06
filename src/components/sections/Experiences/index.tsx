import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { instanceOf } from 'prop-types';
import {
  IExperiencesType,
  IGlobalTexts,
  LanguageCode
} from '../../../types/interfaces';
import {
  currentLanguageSelector,
  experiencesSelector,
  globalTextsSelector
} from '../../../redux/selectors';
import { getFlagURL } from '../../../utils/icons';
import { isDesktop } from '../../../utils/device';
import { HorizontalBar } from '../../elements/HorizontalBar/styles';
import AppModal from '../../mainComponents/AppModal';
import { useStateWithLabel } from '../../../utils/hooks';
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

const EXPERIENCE_ON_TOP = 'newer'; // newer or older

interface Props {
  cuePointsActivated: Set<string>;
}

const Experiences = ({ cuePointsActivated }: Props): ReactElement => {
  const experiences: IExperiencesType[] = useSelector(experiencesSelector);
  const languageSelected: LanguageCode = useSelector(currentLanguageSelector);
  const texts: IGlobalTexts = useSelector(globalTextsSelector);

  const [selectedExperience, selectExperience] = useStateWithLabel<
    IExperiencesType | Record<string, never>
  >({}, 'selectedExperience');

  const customOrder = (x: IExperiencesType, y: IExperiencesType) => {
    if (EXPERIENCE_ON_TOP === 'newer') {
      return y.dateBeginValue - x.dateBeginValue;
    }
    return x.dateBeginValue - y.dateBeginValue;
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
                  formationItems={experiences.length}
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
                <DetailsArea visible={cuePointsActivated.has(item.id)}>
                  <Title>{item.title[languageSelected]}</Title>
                  <Company>
                    {item.company}
                    <CountryFlag
                      alt={item.country[languageSelected]}
                      src={getFlagURL({
                        country: item.country.countryCode,
                        style: 'round3d',
                        size: 'small'
                      })}
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
      {selectedExperience.title && (
        <AppModal closeAction={() => selectExperience({})}>
          <DetailsArea
            visible={cuePointsActivated.has(selectedExperience.id)}
            modal
          >
            <Title>{selectedExperience.title[languageSelected]}</Title>
            <Company>
              {selectedExperience.company}
              <CountryFlag
                src={getFlagURL({
                  country: selectedExperience.country.countryCode,
                  size: 'small',
                  style: 'flat3d'
                })}
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
