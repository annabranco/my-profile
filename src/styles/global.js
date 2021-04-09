import { css } from 'styled-components';
import { rgba } from 'polished';
import { colorWhite } from './theme';
import { Sea } from '../assets/images';

export const NotDisplayed = css`
  display: none;
`;

export const Hidden = css`
  visibility: hidden;
`;

export const FullScreen = css`
  height: 100vh;
  padding: 60px;
`;

export const MainBackground = css`
  position: relative;
  margin: 20px 0 0;
  background-image: linear-gradient(
      ${colorWhite},
      ${rgba('#ffffff', 0.9)},
      ${rgba('#ffffff', 0.7)},
      ${rgba('#ffffff', 0.3)}
    ),
    ${`url(${Sea})`};
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media all and (min-width: 500px) {
    background-image: linear-gradient(
        ${colorWhite},
        ${rgba('#ffffff', 0.98)},
        ${rgba('#ffffff', 0.8)},
        ${rgba('#ffffff', 0.7)}
      ),
      ${`url(${Sea})`};
  }
`;
