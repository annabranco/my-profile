import styled from 'styled-components';
import { rgba } from 'polished';
import {
  colorBlueLight,
  fontTitle,
  colorRedDark,
  fontTitleAlt,
  colorBlueDark,
  fontSubtitle
} from '../../../styles/theme';

export const SectionExperiences = styled.section`
  position: relative;
  background-image: linear-gradient(
      rgba(230, 239, 251, 0.98),
      rgba(230, 239, 251, 0.93),
      rgba(189, 214, 246, 0.98)
    ),
    url('https://raw.githubusercontent.com/annabranco/my-profile/master/src/images/bg/sea.gif');
  background-position: center;
  height: 100vh;
`;

export const VerticalBar = styled.div`
  position: absolute;
  left: 10%;
  border-right: 5px solid ${rgba(colorBlueLight, 0.3)};
  height: 100vh;
  width: 0;
`;

export const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 auto;
  margin-left: -5vw;
  height: 100vh;
  width: 100vw;
`;

export const ExperienceItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: auto;
  width: 100%;
`;

export const DateField = styled.div`
  width: 20%;
`;

export const TextDate = styled.p`
  font-family: ${fontTitle};
  font-size: 1.2em;
  color: ${colorRedDark};
  text-align: center;
`;

export const DetailsField = styled.div`
  width: 80%;
`;

export const ExperienceTitle = styled.h3`
  display: inline;
  font-family: ${fontTitleAlt};
  font-size: 1.4em;
  color: ${colorBlueDark};
`;

export const ExperienceCompany = styled.p`
  margin-left: 10px;
  font-family: ${fontSubtitle};
  font-size: 1rem;
`;

export const CountryFlag = styled.img`
  margin-left: 5px;
  vertical-align: middle;
`;

export const ExperienceDetails = styled.p`
  margin-top: 10px;
`;
