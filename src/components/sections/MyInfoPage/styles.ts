import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { rgba } from 'polished';
import { Binary } from '../../../assets/images';
import {
  colorBlack,
  colorBlueDark,
  colorBlueLight,
  colorWhite,
  fontSubtitle,
  fontTitle,
  fontTitleAlt
} from '../../../styles/theme';
import {
  Appear,
  Disappear,
  MainBackground,
  NotDisplayed
} from '../../../styles/global';

const DownWeGo = (displacement: number) => keyframes`
  0%  {
    opacity : 0;
    transform: none;
  }

  5% {
    opacity : 1;
  }
  15%, 35%, 55% {
    opacity : 0;
  }
  20% {
    opacity : 1;
    transform: translate(0,${displacement}px);
  }
  40% {
    opacity : 1;
    transform: translate(0,${displacement * 2}px);
  }
  60% {
    opacity : 1;
    transform: translate(0,${displacement * 3}px);
  }
  75% {
    opacity : 0;
    transform: translate(0,${displacement * 3}px);
  }
`;

const MyName = styled.h1`
  background-image: ${`url(${Binary})`};
  background-position: center;
  background-size: contain;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: ${fontTitle};
  font-size: 3rem;
  font-weight: 700;
  color: transparent;
  display: block;
  margin: 5px 0;
  text-align: center;

  @media all and (min-width: 768px) {
    font-size: 4rem;
  }

  @media all and (min-width: 1024px) {
    font-size: 5rem;
  }

  @media all and (min-width: 2000px) {
    font-size: 6rem;
  }
`;

const Navigating = keyframes`
  0% {
    right   : 20vw;
    opacity : 0;
  }

  10% {
    opacity : 1;
  }

  50% {
    opacity : 1;
  }

  70% {
    right   : 60vw;
    opacity : 0;
  }

  100% {
    right   : 110vw;
    opacity : 0;
  }
`;

export const Advise = styled.div`
  position: absolute;
  margin-left: 3vw;
  padding: 5px 10px;
  bottom: 20vh;
  width: 45vw;
  background: rgba(254, 255, 255, 0.3);
  font-size: 0.8em;
  text-align: left;
  color: ${colorBlack};
  font-family: ${fontSubtitle};
  opacity: 0;
  animation: ${Appear} 10s;
  animation-fill-mode: forwards;
`;
Advise.displayName = 'Advise';

interface ArrowIconProps extends React.ComponentPropsWithoutRef<'i'> {
  sections?: boolean;
  goBack?: boolean;
}

export const ArrowIcon = styled.i<ArrowIconProps>`
  margin: 0 20px;
  font-size: ${({ sections }) => (sections ? '1.2rem' : '1.5rem')};
  color: ${rgba(colorWhite, 0.55)};
  transform: rotate(270deg);

  ${({ goBack }) =>
    goBack &&
    css`
      transform: rotate(180deg);
    `}

  @media all and (min-width: 768px) {
    margin: 0 100px;
    font-size: 3rem;
    color: ${rgba(colorBlueLight, 0.55)};
    transform: none;
  }
`;

export const BirdsFlying = styled.img`
  position: absolute;
  top: 30vh;
  transform: translate(-4%, 0);
  width: 200px;
  opacity: 0.3;
  animation-name: ${Navigating};
  animation-duration: 120s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  filter: contrast(0.5) opacity(0.6);

  @media all and (min-width: 768px) {
    top: 20%;
  }
  @media all and (min-width: 2000px) {
    top: 33%;
    width: 350px;
  }
`;
BirdsFlying.displayName = 'BirdsFlying';

export const KindFish = styled.img`
  display: inline-block;
  width: 80px;
  margin-right: -25px;
  vertical-align: top;
`;
KindFish.displayName = 'KindFish';

export const InfoArea = styled.div`
  z-index: 10;
  height: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media all and (min-width: 500px) {
    align-items: flex-start;
    height: 400px;
    width: 70%;
    padding: 10px 20px 10px 40px;
  }
`;
InfoArea.displayName = 'Info Area';

export const InfoMessage = styled.div`
  display: inline-block;
  margin-top: 20px;
  width: 90%;
  font-size: 0.9rem;
  line-height: 1.2;
  color: ${colorBlueLight};
  text-align: center;
  animation: ${Disappear} 10s;
  animation-fill-mode: forwards;

  @media all and (min-width: 500px) {
    animation: none;
    margin: 20px 0 0 20px;
    height: 200px;
    width: 80%;
    font-size: 1.2rem;
    line-height: 1.5;

    text-align: left;
  }

  @media all and (min-width: 2000px) {
    font-size: 1.4rem;
  }
`;
InfoMessage.displayName = 'Info Message';

export const JobTitle = styled.h2`
  width: 42vw;
  margin-top: -15px;
  font-family: ${fontSubtitle};
  font-size: 1.3rem;
  text-align: center;

  @media all and (min-width: 500px) {
    margin-top: -20px;
    margin-left: 15px;
    width: auto;
    font-size: 2rem;
    text-align: left;
  }
`;
JobTitle.displayName = 'Job Title';

export const LineOfArrows = styled.div`
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  width: 125%;

  &:nth-of-type(1) {
    animation-delay: 2s;
  }
  &:nth-of-type(2) {
    animation-delay: 3s;
  }
  &:nth-of-type(3) {
    animation-delay: 4s;
  }

  @media all and (min-width: 768px) {
    justify-content: center;
    width: auto;
    animation-name: ${DownWeGo(30)};
  }
  @media all and (min-width: 1400px) {
    padding-top: 5vh;
    animation-name: ${DownWeGo(50)};
  }
  @media all and (min-width: 2000px) {
    padding-top: 5vh;
    animation-name: ${DownWeGo(100)};
  }
`;
LineOfArrows.displayName = 'Line of Arrows';

export const MainAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 45%;

  @media all and (min-width: 500px) {
    width: 75%;
    flex-direction: row;
  }
`;
MainAreaWrapper.displayName = 'Main Area';

export const MeuBarquinho = styled.img`
  position: absolute;
  top: 40%;
  filter: saturate(0.5) brightness(1.8) contrast(30%) opacity(0.2);
  transform: translate(-50%, 0);
  width: 100px;
  animation-name: ${Navigating};
  animation-duration: 120s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

  @media all and (min-width: 768px) {
    top: 30%;
    filter: saturate(0.5) brightness(1.8) contrast(30%) opacity(0.2);
  }

  @media all and (min-width: 2000px) {
    top: 40%;
    width: 200px;
  }
`;
MeuBarquinho.displayName = 'Ship Image';

export const MoreText = styled.p`
  z-index: 50;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-family: ${fontTitleAlt};
  color: ${colorWhite};
`;
MoreText.displayName = 'MoreText';

export const MyInfoInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 95%;

  @media all and (min-width: 500px) {
    width: 90%;
  }
`;
MyInfoInnerWrapper.displayName = 'Inner Wrapper';

export const MyInfoWrapper = styled.div`
  height: ${`${window.innerHeight}px`};
  margin-top: 50px;
  width: 100%;

  @media all and (min-width: 500px) {
    height: 90vh;
    margin-top: 100px;
  }
`;
MyInfoWrapper.displayName = 'My Info Area';

export const MyNameOnDesktopDevices = styled(MyName)`
  ${NotDisplayed};
  text-align: left;
  @media all and (min-width: 500px) {
    display: block;
  }

  @media all and (min-width: 500px) {
    display: block;
  }
`;
MyNameOnDesktopDevices.displayName = 'My Name';

export const MyNameOnMobileDevices = styled(MyName)`
  display: block;
  margin: 10px 0 5px;
  text-align: center;

  @media all and (min-width: 500px) {
    ${NotDisplayed};
  }
`;
MyNameOnMobileDevices.displayName = 'My Name';

export const Photo = styled.img`
  margin-top: -15%;
  width: 100%;
  filter: contrast(1.4) opacity(0.65);

  @media all and (min-width: 768px) {
    filter: contrast(1.9) opacity(0.55);
    width: 130%;
  }
`;
Photo.displayName = 'Photo';

export const PhotoWrapper = styled.div`
  height: 170px;
  width: 100%;
  padding-top: 25px;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media all and (min-width: 500px) {
    height: 400px;
    width: 30%;
  }
`;
PhotoWrapper.displayName = 'Photo Wrapper';

interface ScrollDownDisplayProps extends React.ComponentPropsWithoutRef<'i'> {
  sections?: boolean;
}

export const ScrollDownDisplay = styled.div<ScrollDownDisplayProps>`
  z-index: 50;
  position: absolute;
  bottom: ${({ sections }) => (sections ? '10px' : '10vh')};
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 10px;
  height: ${({ sections }) => (sections ? '40px' : 'auto')};
  width: 55%;
  background: ${({ sections }) =>
    sections ? rgba(colorBlueDark, 0.6) : rgba(colorBlueDark, 0.4)};

  border-radius: 10px;

  @media all and (min-width: 768px) {
    bottom: 10%;
    right: unset;
    height: auto;
    width: 100%;
    align-items: flex-start;
    background: none;
    margin: 80px auto 0;
  }
`;
ScrollDownDisplay.displayName = 'ScrollDown Display';

export const SectionMyInfo = styled.section`
  ${MainBackground}
`;
SectionMyInfo.displayName = 'MY INFO Section';

export const SocialArea = styled.div`
  height: 400px;
  width: 55%;

  @media all and (min-width: 321px) {
    width: 50%;
  }

  @media all and (min-width: 500px) {
    width: 25%;
  }

  @media all and (min-width: 2000px) {
    height: 60vh;
  }
`;
SocialArea.displayName = 'Social Area';
