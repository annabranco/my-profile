import styled from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueDark,
  colorBlack,
  fontTitleAlt,
  colorGreenBright,
  colorBlueNormal
} from '../../../styles/theme';

export const SocialWrapper = styled.div`
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

export const SocialBlock = styled.div`
  margin: 5px 0;
  width: 200px;

  @media all and (min-width: 500px) {
    margin: 15px 0;
  }
`;

export const SocialBlockSkype = styled(SocialBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  color: ${colorBlueNormal};
  & :hover {
    color: ${colorBlueDark};
  }
`;

export const SocialLinkButton = styled(SocialLink)`
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

export const SocialLinkSkypeButton = styled(SocialLinkButton)`
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

export const SocialIcon = styled.div`
  display: inline;
  vertical-align: middle;
  text-shadow: 0 0 1px ${colorBlack};
  font-size: 2rem;
`;

export const SocialIconSkype = styled(SocialIcon)`
  & :hover {
    color: ${colorBlueDark};
  }
`;

export const SocialName = styled.p`
  margin: 4px 0 0;
  font-family: ${fontTitleAlt};
  font-size: 1rem;
  color: ${colorBlack};


  ${SocialLinkButton} & {
    margin: 4px 0 0 25px;
  }

  ${SocialLinkSkypeButton} & {
    margin: 4px 0 0 0;
  }

  @media all and (min-width: 321px) {
    margin: 4px 0 0 15px;
  }

  @media all and (min-width: 500px) {
    margin: 4px 0 0 0;
    font-size: 1.3rem;

    /* ${SocialLinkButton} &: {
      color: red;
      margin: 4px 0 0 5px;
    } */
    /* .infoPage__social--link-mail &,
    .infoPage__social--link-skype & {
      margin: 4px 25px 0;
    } */
  }

  /* .infoPage__social--link-mail &,
  .infoPage__social--link-skype & {
  } */
`;
