import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { Sea } from '../../assets/images';
import {
  colorBlueLight,
  fontTitle,
  colorRedDark,
  fontTitleAlt,
  colorBlueDark,
  fontSubtitle
} from '../../styles/theme';

export const City = styled.span`
  font-size: 0.8rem;
  font-style: italic;
`;
City.displayName = 'City';

export const Company = styled.p`
  margin: 8px 0 0 15px;
  font-family: ${fontSubtitle};
  font-size: 1rem;
`;
Company.displayName = 'Company';

export const CountryFlag = styled.img`
  margin: 0 5px;
  vertical-align: middle;
`;
CountryFlag.displayName = 'Country Flag';

export const DateArea = styled.div`
  width: 12%;
`;
DateArea.displayName = 'Date Area';

export const Details = styled.p`
  margin-top: 10px;
`;
Details.displayName = 'Details';

export const DetailsArea = styled.div`
  margin-left: 40px;
  transform: translate(800px, 0);
  transition: all 4s ease;

  ${({ visible }) =>
    visible &&
    css`
      width: 80%;
      transform: translate(0, 0);
    `}
`;
DetailsArea.displayName = 'Details Area';

export const ExperiencesArea = styled.div`
  position: relative;
  background-image: linear-gradient(
      rgba(230, 239, 251, 0.98),
      rgba(230, 239, 251, 0.93),
      rgba(189, 214, 246, 0.98)
    ),
    ${`url(${Sea})`};
  background-position: center;
  height: auto;
`;
ExperiencesArea.displayName = 'Experiences Area';

export const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  margin: 0 auto;
  padding-right: 5vw;
  height: auto;
  width: 100%;
`;
ExperiencesWrapper.displayName = 'Experiences Wrapper';

export const ExperienceItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px 0;
  height: auto;
  width: 100%;
  opacity: 0;
  transition: opacity ease 3s;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `}
`;
ExperienceItem.displayName = 'Experience Item';

export const TextDate = styled.p`
  font-family: ${fontTitle};
  font-size: 1.2em;
  color: ${colorRedDark};
  text-align: center;
`;
TextDate.displayName = 'TextDate';

export const Title = styled.h3`
  display: inline;
  margin-bottom: 20px;
  font-family: ${fontTitleAlt};
  font-size: 1.4em;
  color: ${colorBlueDark};
`;
Title.displayName = 'Title';

export const VerticalBar = styled.div`
  position: absolute;
  left: 10%;
  border-right: 5px solid ${rgba(colorBlueLight, 0.3)};
  height: 100%;
  width: 0;
`;
VerticalBar.displayName = 'Vertical Bar';
