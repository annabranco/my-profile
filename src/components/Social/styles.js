import styled from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueDark,
  colorBlack,
  fontTitleAlt,
  colorGreenBright,
  colorBlueNormal
} from '../../styles/theme';

export const Icon = styled.div`
  display: inline;
  vertical-align: middle;
  text-shadow: 0 0 1px ${colorBlack};
  font-size: 2rem;
`;
Icon.displayName = 'Icon';

export const Link = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  color: ${colorBlueNormal};
  & :hover {
    color: ${colorBlueDark};
  }
  &:hover {
    text-decoration: none;
  }
`;
Link.displayName = 'Link';

export const LinkButton = styled(Link)`
  border: 1px solid ${colorWhite};
  border-radius: 25px 0;
  background-image: linear-gradient(
    ${rgba(colorWhite, 0.2)},
    ${rgba(colorGreenBright, 0.5)}
  );
  width: 120px;
  padding: 5px 0;
  text-decoration: none;
  box-shadow: 0 4px 5px 0 ${rgba(colorBlack, 0.4)},
    inset 0 1px 5px 1px ${rgba(colorWhite, 0.7)};

  @media all and (min-width: 321px) {
    width: 150px;
  }

  @media all and (min-width: 500px) {
    width: 200px;
  }

  &:hover {
    transform: translate(0, 1px);
    text-decoration: none;
    box-shadow: inset 0 2px 5px 1px ${rgba(colorBlack, 0.4)};
  }
`;
LinkButton.displayName = 'Link Button';

export const LinkSkypeButton = styled(LinkButton)`
  width: 75px;
  flex-direction: column;
  width: 100%;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  @media all and (min-width: 500px) {
    width: 50%;
  }

  &:first-of-type {
    border-radius: 25px 0 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 25px 0;
  }
`;
LinkSkypeButton.displayName = 'Link Button ';

export const SocialArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  background-image: linear-gradient(
    ${rgba(colorGreenBright, 0.1)},
    ${rgba(colorWhite, 0.2)}
  );
  height: 400px;
  padding: 10px 0 30px;

  @media all and (min-width: 500px) {
    height: 500px;
    padding: 10px 0 80px;
  }
`;
SocialArea.displayName = 'Social Area';

export const SocialItem = styled.div`
  margin: 5px 0;
  width: 200px;

  @media all and (min-width: 500px) {
    margin: 15px 0;
  }
`;
SocialItem.displayName = 'Social Item';

export const SocialItemSkype = styled(SocialItem)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
SocialItemSkype.displayName = 'Social Item';

export const Text = styled.p`
  margin: 4px 0 0;
  font-family: ${fontTitleAlt};
  font-size: 1rem;
  color: ${colorBlack};

  ${LinkButton} & {
    margin: 4px 0 0 25px;
  }

  ${LinkSkypeButton} & {
    margin: 4px 0 0 0;
  }

  @media all and (min-width: 321px) {
    margin: 4px 0 0 15px;
  }

  @media all and (min-width: 500px) {
    margin: 4px 0 0 0;
    font-size: 1.3rem;
  }
`;
Text.displayName = 'Text';
