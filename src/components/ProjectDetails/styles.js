import styled from 'styled-components';
import { rgba } from 'polished';
import {
  colorBlueDark,
  colorBlack,
  fontTitle,
  colorGrayDark
} from '../../styles/theme';

export const Description = styled.p`
  margin-bottom: 20px;
  height: 17%;
  line-height: 1.4;
  text-align: justify;
`;
Description.displayName = 'Description';

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;
Link.displayName = 'Link';

export const ProjectItem = styled.div`
  height: auto;
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
  border: 1px solid ${colorBlack};
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  box-shadow: 0 3px 7px 0 ${rgba(colorGrayDark, 0.8)};
  transition: all 1s ease;

  &:hover {
    box-shadow: 0 0 10px 2px rgba(248, 148, 6, 0.3);
    filter: drop-shadow(2px 4px 6px black) brightness(1.2);
    transform: scale(1.05);
  }
`;
Thumbnail.displayName = 'Thumbnail';

export const Title = styled.h3`
  margin: 10px 0;
  font-family: ${fontTitle};
  font-size: 1.3rem;
  font-weight: bold;
  color: ${colorBlueDark};
`;
Title.displayName = 'Title';