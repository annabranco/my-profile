import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import { LEFT, ON_THE_LEFT } from '../../../constants';
import { Sea, SeaBed } from '../../../assets/images';
import { NotDisplayed } from '../../../styles/global';
import {
  colorBlack,
  colorBlueDark,
  colorWhite,
  colorYellowBright,
  colorYellowPale,
  fontTitle,
  colorGrayDark,
  fontTitleAlt,
  colorRedBright
} from '../../../styles/theme';

const FloatingAnimation = keyframes`
  from {
    transform : translate(-5px, 10px);
  }

  to {
    transform : translate(3px, -10px);
  }
`;

const Bubbling = keyframes`
  0%, 55%, 100% {
    bottom: 0;
    opacity: 0;
    transform:translateX(0);
  }
  3% {
    opacity: 0.5;
  }
  25% {
    transform:translateX(50px);
  }
  50% {
    bottom: ${`${window.innerHeight / 2.5}px`};
    transform:translateX(-50px);
  }
`;

const FloatingSoft = css`
  animation-name: ${FloatingAnimation};
  animation-duration: 7s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;
`;

const Floating = css`
  z-index: 5;
  animation-name: ${FloatingAnimation};
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;
`;

const FloatingDelay = css`
  animation-delay: 1s;
`;

const SeabedSubsectionContainer = styled.div`
  position: absolute;
  display: flex;
  width: 120px;
`;

export const Bubble = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #f1f1f1;
  border-radius: 50%;
  opacity: 0;
  animation-name: ${Bubbling};
  animation-duration: 10s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  &:nth-of-type(1) {
    left: 1%;
    height: 10px;
    width: 10px;
    animation-duration: 10s;
  }
  &:nth-of-type(2) {
    left: 10%;
    height: 12px;
    width: 12px;
    animation-duration: 5s;
    animation-delay: 0.3s;
  }
  &:nth-of-type(3) {
    left: 15%;
    height: 5px;
    width: 5px;
    animation-duration: 7s;
    animation-delay: 0.4s;
  }
  &:nth-of-type(4) {
    left: 30%;
    height: 10px;
    width: 10px;
    animation-duration: 10s;
    animation-delay: 0.5s;
  }
  &:nth-of-type(5) {
    left: 40%;
    height: 15px;
    width: 15px;
    animation-duration: 6s;
    animation-delay: 0.2s;
  }
  &:nth-of-type(6) {
    left: 50%;
    height: 5px;
    width: 5px;
    animation-duration: 7s;
    animation-delay: 0.1s;
  }
  &:nth-of-type(7) {
    left: 55%;
    height: 10px;
    width: 10px;
    animation-duration: 10s;
    animation-delay: 0.4s;
  }
  &:nth-of-type(8) {
    left: 60%;
    height: 7px;
    width: 7px;
    animation-duration: 6s;
    animation-delay: 0.5s;
  }
  &:nth-of-type(9) {
    left: 65%;
    height: 10px;
    width: 10px;
    animation-duration: 10s;
    animation-delay: 0.25s;
  }
  &:nth-of-type(10) {
    left: 70%;
    height: 4px;
    width: 4px;
    animation-duration: 8s;
    animation-delay: 0.3s;
  }
`;
Bubble.displayName = 'Bubble';

export const Bubbles = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100px;
  height: 20px;

  ${({ isSwimming }) =>
    isSwimming &&
    css`
      top: 25px;
    `}

  ${({ facing }) =>
    facing === LEFT &&
    css`
      right: unset;
      left: 10px;
    `}
`;
Bubbles.displayName = 'Bubbles';

export const FloorText = styled.p`
  position: absolute;
  bottom: 20px;
  left: 17vw;
  transform: perspective(7rem) rotateX(16deg) skewX(20deg);
  width: 80%;
  text-shadow: 0 0 3px ${colorYellowBright};
  font-family: ${fontTitle};
  font-size: 9rem;
  line-height: 0.8;
  font-weight: bold;

  ${({ hidden }) =>
    hidden &&
    css`
      display: hidden;
    `}

  @media all and (min-width: 1400px) {
    left: 22vw;
  }
`;
FloorText.displayName = 'Floor Text';

export const GoBackText = styled.p`
  margin-top: 30vh;
  text-shadow: 0 0 2px ${colorBlack};
  font-family: ${fontTitle};
  font-size: 3rem;
  color: ${colorWhite};
  text-align: center;
`;
GoBackText.displayName = 'Go Back Text';

export const HeroImage = styled.img`
  width: 200px;
  transition: all linear 1s;
  ${NotDisplayed};

  @media all and (min-width: 768px) {
    display: block;
  }

  ${({ back2Surface, crossingBorder, isGoingUp, isSwimming, facing }) => {
    if (crossingBorder) {
      return css`
        transition: none;
      `;
    }

    if (isSwimming) {
      return css`
        ${FloatingSoft}
      `;
    }

    if (isGoingUp && back2Surface) {
      return css`
        transform: ${facing === LEFT ? 'rotate(70deg)' : 'rotate(290deg)'};
      `;
    }

    if (isGoingUp) {
      return css`
        transform: ${facing === LEFT ? 'rotate(70deg)' : 'rotate(290deg)'};
      `;
    }

    if (facing === LEFT) {
      return css`
        transform: scaleX(-1);
      `;
    }

    return css`
      ${FloatingSoft}
    `;
  }}
`;
HeroImage.displayName = 'The Hero Image';

export const HeroWrapper = styled.div`
  position: absolute;
  top: unset;
  bottom: 40%;
  opacity: 0.6;
  transition: all linear 1s;

  ${({ crossingBorder }) => {
    if (crossingBorder) {
      return css`
        transition: none;
      `;
    }
    return null;
  }}

  ${({ back2Surface, isGoingUp }) => {
    if (isGoingUp && back2Surface) {
      return css`
        bottom: unset;
        top: -200px;
        transition: all 7s linear;
      `;
    }

    if (isGoingUp) {
      return css`
        bottom: unset;
        top: 40%;
        transition: all 7s linear;
      `;
    }
    return null;
  }}
`;
HeroWrapper.displayName = 'HeroWrapper';

export const Message = styled.p`
  margin: 15px 0;
  font-family: $font__title;
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${colorBlueDark};
  text-align: justify;
`;
Message.displayName = 'Message';

export const MessageContainer = styled.div`
  border-radius: 80px 0;
  margin: 60px auto 0;
  background-color: rgba($white, 0.05);
  height: auto;
  width: 60vw;
  padding: 10px 50px;
  ${FloatingSoft};
`;
MessageContainer.displayName = 'Message Container';

export const MessageOnMobileDevices = styled(Message)`
  ${NotDisplayed};
`;
MessageOnMobileDevices.displayName = 'Message';

export const SeabedCloseButton = styled.button`
  z-index: 4;
  position: absolute;
  top: 10px;
  right: 5px;
  border: 1px solid $[colorRedDark];
  border-radius: 5px 0;
  background-image: linear-gradient(
    ${rgba(colorWhite, 0.2)},
    ${rgba(colorRedBright, 0.9)}
  );
  padding: 2px 5px;
  text-shadow: 0 0 1px ${rgba(colorGrayDark, 0.51)};
  font-family: ${fontTitleAlt};
  font-size: 0.7rem;
  color: ${colorBlack};
  cursor: pointer;
  box-shadow: 0 1px 2px 0 ${rgba(colorBlack, 0.4)},
    inset 0 1px 5px 1px ${rgba(colorWhite, 0.7)};

  @media all and (min-width: 321px) {
    border-radius: 8px 0;
    padding: 2px 10px;
    font-size: 1.2rem;
  }

  @media all and (min-width: 768px) {
    right: 10px;
    border-radius: 12px 0;
    padding: 3px 12px;
    font-size: 1.4rem;
  }

  &:hover {
    transform: translate(0, 1px);
    text-decoration: none;
    box-shadow: inset 0 2px 5px 1px ${rgba(colorBlack, 0.4)};
  }

  ${({ hidden }) =>
    hidden &&
    css`
      ${NotDisplayed}
    `}
`;
SeabedCloseButton.displayName = 'Close Button';

export const SeabedFloor = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0.05;
  background-image: ${`url(${SeaBed})`};
  background-position: bottom;
  background-size: 100% 220%;
  height: 50vh;
  width: 100%;
`;
SeabedFloor.displayName = 'Seabed Floor';

export const SeabedSection = styled.section`
  position: relative;
  background-image: linear-gradient(
      ${rgba('#bdd6f6', 0.96)},
      ${rgba('#abccf6', 0.95)},
      ${rgba('#ecf6bd', 0.9)}
    ),
    ${`url(${Sea})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
`;
SeabedSection.displayName = 'Seabed Section';

export const SubsectionFormation = styled(SeabedSubsectionContainer)`
  bottom: 150px;
  left: 20vw;
  justify-content: flex-start;
  text-align: center;
  ${Floating};
  ${FloatingDelay};

  @media all and (min-width: 768px) {
    bottom: 33vh;
    left: auto;
    right: 30px;
    justify-content: flex-end;
    text-align: right;
  }
  ${({ hidden }) =>
    hidden &&
    css`
      display: hidden;
    `}
`;
SubsectionFormation.displayName = 'Subsection Formation';

export const SubsectionOtherSkills = styled(SeabedSubsectionContainer)`
  top: 170px;
  bottom: initial;
  right: 33vw;
  justify-content: flex-end;
  text-align: center;
  ${Floating};

  @media all and (min-width: 768px) {
    top: initial;
    bottom: 33vh;
    left: 40px;
    right: auto;
    justify-content: flex-start;
    text-align: left;
  }
  ${({ hidden }) =>
    hidden &&
    css`
      display: hidden;
    `}
`;
SubsectionOtherSkills.displayName = 'Subsection Other Skills';

export const Text = styled.p`
  opacity: 0.9;
  text-shadow: 0 0 3px ${colorBlueDark};
  font-family: sans-serif;
  font-size: 2.8rem;
  color: ${colorWhite};

  @media all and (min-width: 768px) {
    opacity: 0.7;
    text-shadow: 0 0 3px ${colorWhite};
    font-size: 3rem;
    color: ${rgba(colorWhite, 0.2)};
    ${({ active }) =>
      active &&
      css`
        @media all and (min-width: 768px) {
          text-shadow: 0 0 3px ${colorWhite};
          font-size: 3.2rem;
          color: ${rgba(colorYellowBright, 0.73)};
        }
      `}
  }
`;
Text.displayName = 'Text';

export const TextFindSomething = styled.p`
  position: absolute;
  top: 20vh;
  left: 0;
  transform: translate(-50%, 0);
  width: 100%;
  text-shadow: 0 0 2px ${colorBlack};
  font-family: ${fontTitle};
  font-size: 2rem;
  color: ${colorWhite};
  text-align: center;

  @media all and (min-width: 768px) {
    top: 30vh;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 2.5rem;

    &:nth-of-type(2) {
      top: 37vh;
    }

    &:nth-of-type(3) {
      top: 44vh;
    }
  }

  &:nth-of-type(2) {
    top: 38vh;
  }
`;
TextFindSomething.displayName = 'Text Find Something';

export const ThinkingText = styled.p`
  position: absolute;
  bottom: 68%;
  opacity: 0.8;
  width: 180px;
  text-shadow: -1px 1px 6px ${colorBlack};
  font-style: italic;
  font-family: sans-serif;
  font-size: 1.2rem;
  color: ${colorYellowPale};
  text-align: center;

  ${({ side }) => {
    let leftValue = 'initial';
    let rightValue = '40px';

    if (side === ON_THE_LEFT) {
      leftValue = '40px';
      rightValue = 'initial';
    }
    return css`
      left: ${leftValue};
      right: ${rightValue};
    `;
  }}
`;
ThinkingText.displayName = 'Thinking Text';
