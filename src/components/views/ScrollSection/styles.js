import styled from 'styled-components';
import { rgba } from 'polished';
import {
  colorGrayNormal,
  colorWhite,
  colorGrayDark,
  colorBlack,
  fontTitleAlt
} from '../../../styles/theme';
import Sea from '../../../images/bg/sea.gif';

export const SectionHeaderContainer = styled.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-image: linear-gradient(
    ${rgba(colorWhite, 0.3)},
    ${rgba(colorGrayNormal, 0.5)}
  );
  height: 60px;
  width: 100%;
  padding-top: 15px;
  box-shadow: 0 10px 15px 0 ${rgba(colorGrayDark, 0.6)};
  margin: 5px 0 20px;

  &:last-child {
    height: 100px;
  }
`;

export const SectionHeaderTitle = styled.h2`
  font-family: ${fontTitleAlt};
  font-size: 2rem;
  color: ${colorBlack};
`;

export const SectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      ${rgba('#ffffff', 0.92)},
      ${rgba('#f0f1fc', 0.93)},
      ${rgba('#e6effb', 0.98)}
    ),
    url(${Sea});
  background-position: center;
  height: auto;
  overflow: hidden;
  padding-top: 50px;
`;
