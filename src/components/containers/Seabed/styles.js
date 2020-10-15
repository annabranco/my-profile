import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import {
  colorBlack,
  colorBlueDark,
  colorWhite,
  colorYellowBright,
  colorYellowPale,
  fontTitle
} from '../../../styles/theme';

export const SeabedSection = styled.section`
  position: relative;
  background-image: linear-gradient(
      ${rgba('#bdd6f6', 0.96)},
      ${rgba('#abccf6', 0.95)},
      ${rgba('#ecf6bd', 0.9)}
    ),
    url('https://raw.githubusercontent.com/annabranco/my-profile/master/src/images/bg/sea.gif');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

// ------- Floating animation

const FloatingAnimation = keyframes`
  from {
    transform : translate(-5px, 10px);
  }

  to {
    transform : translate(3px, -10px);
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
  animation-name: float;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: both;
`;

const FloatingDelay = css`
  animation-delay: 1s;
`;

// ---

export const SeabedMessageContainer = styled.div`
  border-radius: 80px 0;
  margin: 60px auto 0;
  background-color: rgba($white, 0.05);
  height: auto;
  width: 60vw;
  padding: 10px 50px;
  ${FloatingSoft};
`;

export const SeabedMessage = styled.p`
  margin: 15px 0;
  font-family: $font__title;
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${colorBlueDark};
  text-align: justify;
`;

export const SeabedMessageDevices = styled(SeabedMessage)`
  display: none;
`;

const SeabedSubsectionContainer = styled.div`
  position: absolute;
  display: flex;
  width: 120px;
`;

export const SeabedSubsectionFormation = styled(SeabedSubsectionContainer)`
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

export const SeabedSubsectionOtherSkills = styled(SeabedSubsectionContainer)`
  top: 170px;
  bottom: initial;
  right: 33vw;
  justify-content: flex-end;
  text-align: center;

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

export const SeabedSubsectionText = styled.p`
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

export const HeroImage = styled.img`
  position: absolute;
  bottom: 40%;
  opacity: 0.6;
  display: none;
  width: 200px;
  transition: all ease 1s;

  @media all and (min-width: 768px) {
    display: block;
  }

  ${({ isSwimming, isGoingUp }) => {
    console.log('$$$ isSwimming, isGoingUp', isSwimming, isGoingUp);
    if (isSwimming) {
      return css`
        width: 250px;
        ${FloatingSoft}
      `;
    }
    if (isGoingUp) {
      return css`
        transform: rotate(290deg);
        width: 250px;
        transition: all 10s ease;
      `;
    }
    return css`
      ${FloatingSoft}
    `;
  }}
`;

export const SeabedFloor = styled.div`
  position: absolute;
  bottom: 0;
  opacity: 0.05;
  background-image: url('https://raw.githubusercontent.com/annabranco/my-profile/master/src/images/bg/seabed.jpg');
  background-position: bottom;
  background-size: 100% 220%;
  height: 50vh;
  width: 100vw;
`;

export const SeabedFloorText = styled.p`
  position: absolute;
  bottom: 20px;
  left: 15vw;
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
`;

export const SeabedBackText = styled.p`
  margin-top: 30vh;
  text-shadow: 0 0 2px ${colorBlack};
  font-family: ${fontTitle};
  font-size: 3rem;
  color: ${colorWhite};
  text-align: center;
`;

export const HeroThinkingText = styled.p`
  position: absolute;
  bottom: 65%;
  opacity: 0.8;
  width: 180px;
  text-shadow: 0 0 1px ${colorBlack};
  font-style: italic;
  font-family: sans-serif;
  font-size: 1.3rem;
  color: ${colorYellowPale};
  text-align: center;

  ${({ side }) => {
    let leftValue = 'initial';
    let rightValue = '40px';

    if (side === 'on-left') {
      leftValue = '40px';
      rightValue = 'initial';
    }
    return css`
      left: ${leftValue};
      right: ${rightValue};
    `;
  }}
`;
