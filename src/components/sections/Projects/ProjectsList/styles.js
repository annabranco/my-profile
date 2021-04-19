import styled, { css } from 'styled-components';
import { Hidden } from '../../../../styles/global';

export const Icon = styled.i`
  position: absolute;
  bottom: 40vh;
  font-size: 2.5rem;
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

  ${({ next }) => {
    if (next) {
      return css`
        right: 3px;
        transform: rotate(-90deg);
      `;
    }
    return css`
      left: 3px;
      transform: rotate(-90deg);
    `;
  }}

  @media all and (min-width: 768px) {
    position: unset;
    margin: 0 5px;
    transform: none;
    font-size: 2rem;
  }
`;
Icon.displayName = 'Icon';

export const Paginator = styled.div`
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
  text-align: center;

  @media all and (min-width: 768px) {
    height: auto;
    width: auto;
    margin-bottom: 40px;
  }
`;
Paginator.displayName = 'Paginator';

export const ProjectsGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 225px 225px;
  grid-gap: 15;

  @media all and (min-width: 768px) {
    grid-gap: 30px 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 360px;
    height: 390px;
  }
`;
ProjectsGrid.displayName = 'Projects Grid';

export const ProjectsSection = styled.section`
  padding-top: 50px;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (min-width: 768px) {
    padding-top: 20px;
    width: 60%;
  }
`;
ProjectsSection.displayName = 'PROJECTS Section';

export const Text = styled.span`
  position: absolute;
  bottom: 40vh;
  vertical-align: super;
  font-size: 1rem;
  text-align: center;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  ${({ notVisible }) =>
    notVisible &&
    css`
      ${Hidden}
    `}

  ${({ next }) => {
    if (next) {
      return css`
        right: 15px;
        transform: rotate(180deg) translate(0, 50px);
      `;
    }
    return css`
      left: 15px;
      transform: translate(0, 50px);
    `;
  }}
  @media all and (min-width: 768px) {
    position: unset;
    font-size: 0.8rem;
    writing-mode: lr;
    transform: none;
  }
`;
Text.displayName = 'Text';
