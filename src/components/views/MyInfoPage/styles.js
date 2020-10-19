import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';
import { colorBlueLight, fontSubtitle, fontTitle } from '../../../styles/theme';
import { MainBackground, NotDisplayed } from '../../../styles/global';

export const SectionMyInfo = styled.section`
  ${MainBackground}
`;

export const MyInfoWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
  @media all and (min-width: 500px) {
    margin-top: 100px;
  }
`;

const MyName = styled.h1`
  background-image: url('https://raw.githubusercontent.com/annabranco/my-profile/master/src/images/other/bg-binary.jpg');
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

export const MyNameOnMobileDevices = styled(MyName)`
  display: block;
  margin: 5px 0;
  text-align: center;

  @media all and (min-width: 500px) {
    ${NotDisplayed};
  }
`;

export const MyNameOnDesktopDevices = styled(MyName)`
  ${NotDisplayed};
  text-align: left;
  @media all and (min-width: 500px) {
    display: block;
  }
`;

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

export const MyInfoMainArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 45%;

  @media all and (min-width: 500px) {
    width: 75%;
  }
`;

export const MyInfoPhotoWrapper = styled.div`
  height: 170px;
  width: 100%;
  padding-right: 5px;
  height: 500px;

  @media all and (min-width: 500px) {
    height: 400px;
    width: 30%;
  }
`;

export const MyInfoPhoto = styled.img`
  width: 100%;
`;

export const MyInfoWhoAmI = styled.div`
  height: 230px;
  width: 100%;
  padding: 10px 20px 10px 40px;

  @media all and (min-width: 500px) {
    height: 400px;
    width: 70%;
  }
`;

export const MyJob = styled.h2`
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

export const MyInfoMessage = styled.div`
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

export const MyInfoSocialWrapper = styled.div`
  height: 400px;
  width: 55%;

  @media all and (min-width: 321px) {
    width: 50%;
  }

  @media all and (min-width: 500px) {
    width: 25%;
  }
`;

const Navigating = keyframes`
  0% {
    right   : 10vw;
    opacity : 0;
  }

  35% {
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

export const LineOfArrows = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ----- Animated Arrows

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

export const FirstArrowIcon = styled(ArrowIcon)`
  animation-delay: 2s;
`;

export const SecondArrowIcon = styled(ArrowIcon)`
  animation-delay: 3s;
`;

export const ThirdArrowIcon = styled(ArrowIcon)`
  animation-delay: 4s;
`;
