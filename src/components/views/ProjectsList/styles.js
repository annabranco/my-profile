import styled, { css } from 'styled-components';
import {
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../../constants';
import { NotDisplayed } from '../../../styles/global';

export const ProjectsSection = styled.section``;

export const CheckboxWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const CheckboxElement = styled.input`
  margin: 0 10px;
`;

export const MyProjectsList = styled.ul`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 225px;
  grid-gap: 30px 20px;
  margin-top: 30px;
  height: 210px;
  overflow: hidden;

  @media all and (min-width: 768px) {
    grid-template-columns: 300px 300px;
    grid-template-rows: 360px;
  }

  ${({ thumbnailsStyle }) => {
    if (thumbnailsStyle === SHOW_THUMBNAILS_ON_MOBILE_ACTION) {
      return css`
        grid-template-rows: 360px;
        height: 380px;
      `;
    }
    if (thumbnailsStyle === SHOW_THUMBNAILS_ACTION) {
      return css`
        height: 390px;
      `;
    }
    return null;
  }}
`;

export const ProjectsPaginator = styled.div`
  opacity: 0.5;
  margin-bottom: 40px;
  text-align: center;

  ${({ hidden }) =>
    hidden &&
    css`
      ${NotDisplayed}
    `}
`;

export const ProjectsPaginatorText = styled.span`
  vertical-align: super;
  font-size: 0.8rem;
  text-align: center;
`;

export const ProjectsPaginatorIcon = styled.i`
  margin: 0 5px;
  font-size: 2rem;
`;
