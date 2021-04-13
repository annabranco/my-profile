import styled, { css } from 'styled-components';
import {
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../../../constants';
import { Hidden } from '../../../../styles/global';

export const Checkbox = styled.input`
  margin: 0 10px;
`;
Checkbox.displayName = 'Checkbox';

export const CheckboxWrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  text-align: center;
`;
CheckboxWrapper.displayName = 'Checkbox Area';

export const Icon = styled.i`
  margin: 0 5px;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  -webkit-text-stroke: 1px black;

  &:hover {
    color: orange;
  }
  ${({ notVisible }) =>
    notVisible &&
    css`
      ${Hidden}
    `}
`;
Icon.displayName = 'Icon';

export const Paginator = styled.div`
  opacity: 0.5;
  margin-bottom: 40px;
  text-align: center;
`;
Paginator.displayName = 'Paginator';

export const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 225px;
  grid-gap: 30px 40px;
  height: 210px;

  @media all and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
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
  padding-top: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
ProjectsSection.displayName = 'PROJECTS Section';

export const Text = styled.span`
  vertical-align: super;
  font-size: 0.8rem;
  text-align: center;

  ${({ notVisible }) =>
    notVisible &&
    css`
      ${Hidden}
    `}
`;
Text.displayName = 'Text';
