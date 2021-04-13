import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';
import { Binary } from '../../assets/images';
import { colorBlueLight, fontSubtitle, fontTitle } from '../../styles/theme';
import { MainBackground, NotDisplayed } from '../../styles/global';

const Vanish = keyframes`
  0% {
    opacity : 0;
  }

  5% {
    opacity : 1;
  }
`;

const ArrowIcon = styled.i`
  opacity: 0;
  margin: 0 20px;
  font-size: 3rem;
  color: ${rgba(colorBlueLight, 0.55)};
  animation-name: ${Vanish};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

  @media all and (min-width: 768px) {
    margin: 0 100px;
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
  font-weight: 900;
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

export const BirdsFlying = styled.img`
  position: absolute;
  top: 30%;
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
`;
BirdsFlying.displayName = 'BirdsFlying';

export const FirstArrowIcon = styled(ArrowIcon)`
  animation-delay: 2s;
`;
FirstArrowIcon.displayName = 'Animated Arrows';

export const InfoArea = styled.div`
  height: 230px;
  width: 100%;
  padding: 10px 20px 10px 40px;

  @media all and (min-width: 500px) {
    height: 400px;
    width: 70%;
  }
`;
InfoArea.displayName = 'Info Area';

export const InfoMessage = styled.div`
  margin: -20px 0 0;
  width: 90%;
  font-style: italic;
  font-family: ${fontSubtitle};
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${colorBlueLight};
  text-align: center;

  @media all and (min-width: 500px) {
    margin: 20px 0 0 20px;
    height: 200px;
    width: 80%;
    font-size: 1.2rem;
    text-align: left;
  }
`;
InfoMessage.displayName = 'Info Message';

export const JobTitle = styled.h2`
  margin-top: -30px;
  margin-left: -25px;
  width: 42vw;
  font-family: ${fontSubtitle};
  font-size: 1.3rem;
  text-align: center;

  @media all and (min-width: 321px) {
    margin-top: 0;
    font-size: 1.5rem;
  }

  @media all and (min-width: 500px) {
    margin-left: 0;
    width: auto;
    font-size: 2rem;
    text-align: left;
  }
`;
JobTitle.displayName = 'Job Title';

export const LineOfArrows = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
LineOfArrows.displayName = 'Line of Arrows';

export const MainAreaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 45%;

  @media all and (min-width: 500px) {
    width: 75%;
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
`;
MeuBarquinho.displayName = 'Ship Image';

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
  margin-top: 50px;
  width: 100%;
  @media all and (min-width: 500px) {
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
`;
MyNameOnDesktopDevices.displayName = 'My Name';

export const MyNameOnMobileDevices = styled(MyName)`
  display: block;
  margin: 5px 0;
  text-align: center;

  @media all and (min-width: 500px) {
    ${NotDisplayed};
  }
`;
MyNameOnMobileDevices.displayName = 'My Name';

export const Photo = styled.img`
  width: 60%;
  border-radius: 50%;
  border: 1px solid green;
  box-shadow: 0 0 25px 1px ${rgba('green', 0.2)};
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.6)) contrast(0.9) sepia(0)
    brightness(1.3); ;
`;
Photo.displayName = 'Photo';

export const PhotoWrapper = styled.div`
  height: 170px;
  width: 100%;
  padding-top: 25px;
  height: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media all and (min-width: 500px) {
    height: 400px;
    width: 30%;
  }
`;
PhotoWrapper.displayName = 'Photo Wrapper';

export const ScrollDownDisplay = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;

  @media all and (min-width: 768px) {
    margin-top: 80px;
  }
`;
ScrollDownDisplay.displayName = 'ScrollDown Display';

export const SecondArrowIcon = styled(ArrowIcon)`
  animation-delay: 3s;
`;
SecondArrowIcon.displayName = 'Animated Arrows';

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
`;
SocialArea.displayName = 'Social Area';

export const ThirdArrowIcon = styled(ArrowIcon)`
  animation-delay: 4s;
`;
ThirdArrowIcon.displayName = 'Animated Arrows';
