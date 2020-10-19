import styled from 'styled-components';
import { rgba } from 'polished';
import {
  colorBlueDark,
  colorBlack,
  fontTitle,
  colorGrayDark
} from '../../../styles/theme';

export const ProjectItem = styled.div`
  height: auto;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

export const ProjectTitle = styled.h3`
  margin: 10px 0;
  font-family: ${fontTitle};
  font-size: 1.3rem;
  font-weight: bold;
  color: ${colorBlueDark};
`;

export const ProjectTitleIcon = styled.i`
  opacity: 0.4;
  color: ${colorBlack};
`;

export const ProjectDescription = styled.p`
  margin-bottom: 20px;
  line-height: 1.4;
  text-align: justify;
`;

export const ProjectRepoIcon = styled.i`
  opacity: 0.4;
  margin-right: 4px;
  vertical-align: middle;
  font-size: 1.3rem;
  color: ${colorBlack};
`;

export const ProjectThumbnail = styled.img`
  border: 1px solid ${colorBlack};
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  box-shadow: 0 3px 7px 0 ${rgba(colorGrayDark, 0.8)};
`;
