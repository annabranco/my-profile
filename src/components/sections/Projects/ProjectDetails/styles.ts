import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import {
  colorBlack,
  colorBlueDark,
  colorGrayDark,
  colorWhite,
  fontTitle,
  fontTitleAlt
} from '../../../../styles/theme';
import { RIGHT } from '../../../../constants';

const EnterScreen = (side: string) => keyframes`
0% {
  transform: translate(${side === RIGHT ? '50vw' : '-50vw'}, 0);
  opacity: 0;
  }

  100% {
  transform: translate(0, 0);
  opacity: 1;
  }

`;

export const Description = styled.p`
  margin-bottom: 10px;
  line-height: 1.4;
  text-align: justify;
  font-size: 0.8rem;

  @media all and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 1rem;
  }
`;
Description.displayName = 'Description';

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
Link.displayName = 'Link';

interface ProjectItemProps extends React.ComponentPropsWithoutRef<'div'> {
  actualPage?: number;
}

export const ProjectItem = styled.div<ProjectItemProps>`
  height: auto;
  transform: translate(50vw, 0);
  /* opacity: 0; */

  ${({ actualPage }) =>
    actualPage === 1
      ? css`
          animation: ${EnterScreen('right')} 3s ease-out forwards;
        `
      : css`
          animation: ${EnterScreen('right')} 1s ease-out forwards;
        `}

  &:first-of-type {
    transform: translate(-50vw, 0);
    ${({ actualPage }) =>
      actualPage === 1
        ? css`
            animation: ${EnterScreen('left')} 3s ease-out forwards;
          `
        : css`
            animation: ${EnterScreen('left')} 1s ease-out forwards;
          `}
  }
`;
ProjectItem.displayName = 'Project Item';

export const RepoIcon = styled.i`
  opacity: 0.4;
  margin-right: 4px;
  vertical-align: middle;
  font-size: 1.3rem;
  color: ${colorBlack};
`;
RepoIcon.displayName = 'Repo Icon';

export const RepoUrl = styled.p`
  margin: 0;
  text-align: right;
  font-family: ${fontTitleAlt};

  @media all and (min-width: 768px) {
    text-align: left;
  }
`;
RepoIcon.displayName = 'Repo Icon';

export const SeeIcon = styled.i`
  margin-left: 10px;
  opacity: 0.4;
  color: ${colorBlack};
  -webkit-text-stroke: 1px black;

  &:hover {
    color: orange;
  }
`;
SeeIcon.displayName = 'SeeIcon';

export const Thumbnail = styled.img`
  z-index: 5;
  border: 1px solid ${colorBlack};
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 20px;
  width: 90%;
  min-height: 100px;
  min-width: 90%;
  box-shadow: 0 3px 7px 0 ${rgba(colorGrayDark, 0.8)};
  transition: all 1s ease;

  &:hover {
    box-shadow: 0 0 10px 2px rgba(248, 148, 6, 0.3);
    filter: drop-shadow(2px 4px 6px black) brightness(1.2);
    transform: scale(1.05);
  }

  @media all and (min-width: 768px) {
    margin-left: 0;
    min-height: 200px;
  }
  @media all and (min-width: 2000px) {
    min-height: 400px;
  }
`;
Thumbnail.displayName = 'Thumbnail';

export const Title = styled.h3`
  z-index: 50;
  position: relative;
  margin: -10px 0 10px;
  font-family: ${fontTitle};
  font-size: 1.3rem;
  font-weight: bold;
  color: ${colorWhite};
  background: ${colorBlueDark};
  border-radius: 8px 3px 3px 8px;
  padding-left: 20px;
  box-shadow: 1px 2px 10px 0 gray;

  @media all and (min-width: 768px) {
    position: unset;
    margin: 10px 0;
    background: none;
    box-shadow: none;
    padding-left: 0;
    color: ${colorBlueDark};
  } ;
`;
Title.displayName = 'Title';
