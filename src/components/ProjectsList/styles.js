import styled, { css } from 'styled-components';
import {
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../constants';
import { NotDisplayed } from '../../styles/global';

export const Checkbox = styled.input`
  margin: 0 10px;
`;
Checkbox.displayName = 'Checkbox';

export const CheckboxWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
CheckboxWrapper.displayName = 'Checkbox Area';

export const Icon = styled.i`
  margin: 0 5px;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
Icon.displayName = 'Icon';

export const Paginator = styled.div`
  opacity: 0.5;
  margin-bottom: 40px;
  text-align: center;

  ${({ hidden }) =>
    hidden &&
    css`
      ${NotDisplayed}
    `}
`;
Paginator.displayName = 'Paginator';

export const ProjectsGrid = styled.ul`
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
ProjectsGrid.displayName = 'Projects Grid';

export const ProjectsSection = styled.section`
  padding-top: 60px;
`;
ProjectsSection.displayName = 'PROJECTS Section';

export const Text = styled.span`
  vertical-align: super;
  font-size: 0.8rem;
  text-align: center;
`;
Text.displayName = 'Text';
