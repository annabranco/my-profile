import React from 'react';
import { bool } from 'prop-types';
import Social from '../Social';
import { Mugshot, Barquinho } from '../../../images';
import { infoPageTextPropType } from '../../../types';
import { isFullWindowDesktop } from '../../../utils/device';
import {
  MyInfoWrapper,
  SectionMyInfo,
  MyNameOnMobileDevices,
  MyInfoInnerWrapper,
  MainArea,
  PhotoWrapper,
  Photo,
  InfoArea,
  MyNameOnDesktopDevices,
  JobTitle,
  InfoMessage,
  SocialArea,
  MeuBarquinho,
  ScrollDownDisplay,
  LineOfArrows,
  FirstArrowIcon,
  SecondArrowIcon,
  ThirdArrowIcon
} from './styles';

const MyInfoPage = ({ texts, displayThanksMessage }) => (
  <SectionMyInfo id="My Info Section">
    <MyInfoWrapper>
      <MyNameOnMobileDevices>Anna Branco</MyNameOnMobileDevices>

      <MyInfoInnerWrapper>
        <MainArea>
          <PhotoWrapper>
            <Photo src={Mugshot} alt="Anna Branco" />
          </PhotoWrapper>
          <InfoArea>
            <MyNameOnDesktopDevices>Anna Branco</MyNameOnDesktopDevices>
            <JobTitle>{texts.job}</JobTitle>
            <InfoMessage>
              {!displayThanksMessage ? texts.aditional : texts.thankyou}
            </InfoMessage>
          </InfoArea>
        </MainArea>
        <SocialArea>
          <Social texts={texts} />
        </SocialArea>
      </MyInfoInnerWrapper>

      <MeuBarquinho src={Barquinho} alt="Navigating beautifully" />

      {!isFullWindowDesktop && (
        <MyInfoWrapper className="infoPage__advise">
          {texts.advise}
        </MyInfoWrapper>
      )}

      <ScrollDownDisplay>
        <LineOfArrows>
          {[0, 1, 2].map(index => (
            <FirstArrowIcon key={index} className="fas fa-angle-double-down" />
          ))}
        </LineOfArrows>
        <LineOfArrows>
          {[0, 1, 2].map(index => (
            <SecondArrowIcon key={index} className="fas fa-angle-double-down" />
          ))}
        </LineOfArrows>
        <LineOfArrows>
          {[0, 1, 2].map(index => (
            <ThirdArrowIcon key={index} className="fas fa-angle-double-down" />
          ))}
        </LineOfArrows>
      </ScrollDownDisplay>
    </MyInfoWrapper>
  </SectionMyInfo>
);

MyInfoPage.propTypes = {
  texts: infoPageTextPropType.isRequired,
  displayThanksMessage: bool
};

MyInfoPage.defaultProps = {
  displayThanksMessage: false
};

export default MyInfoPage;
