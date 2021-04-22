/* eslint-disable no-unused-vars */

import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorBlack,
  colorBlueDark,
  colorWhite,
  fontTitleAlt
} from '../../../styles/theme';

export const CloseButton = styled.p`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  color: red;
  color: ${({ colors }) => colors.terciary};
  background: ${({ colors }) => colors && colors.primary};
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    box-shadow: 0 0 2px 2px white;
  }

  ${({ text }) =>
    text &&
    css`
      &::before {
        content: 'x';
        text-transform: uppercase;
        font-weight: 700;
        font-family: ${fontTitleAlt};
        font-size: 1rem;
      }
    `};

  @media all and (min-width: 768px) {
    ${({ colors, text }) =>
      text &&
      css`
        top: 20px;
        right: 50px;
        border: ${`2px solid ${colors.terciary}`};
        background: none;

        &::before {
          content: '${text}';
          text-transform: uppercase;
          font-weight: 700;
        }
      `};
  }
`;
CloseButton.displayName = 'CloseButton';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${`${window.innerHeight}px`};
  overflow: hidden;
  width: 100vw;
  z-index: 100;
  background-image: linear-gradient(
    to bottom,
    ${rgba(colorBlueDark, 0.9)},
    ${rgba(colorBlueDark, 0.9)},
    ${rgba(colorBlack, 1)}
  );
  padding: 0;
`;
ModalOverlay.displayName = 'ModalOverlay';
