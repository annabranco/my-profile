import { css, createGlobalStyle } from 'styled-components';
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

export const GlobalStyles = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  &::-webkit-scrollbar {
    width: 20px;
    background: white;
  }
  ::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #434343, #434343 1px, ${rgba(
      '#bdd6f6',
      0.3
    )}
 0, ${rgba('#bdd6f6', 0.7)});
  }
  ::-webkit-scrollbar-thumb {
    background: ${rgba('darkgreen', 0.3)};
    border-radius: 5px;
    width: 5px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.75);
  }
`;
