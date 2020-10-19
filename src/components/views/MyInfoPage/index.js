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
  MyInfoMainArea,
  MyInfoPhotoWrapper,
  MyInfoPhoto,
  MyInfoWhoAmI,
  MyNameOnDesktopDevices,
  MyJob,
  MyInfoMessage,
  MyInfoSocialWrapper,
  MeuBarquinho,
  ScrollDownDisplay,
  LineOfArrows,
  FirstArrowIcon,
  SecondArrowIcon,
  ThirdArrowIcon
} from './styles';

const MyInfoPage = ({ texts, displayThanksMessage }) => (
  <SectionMyInfo>
    <MyInfoWrapper>
      <MyNameOnMobileDevices>Anna Branco</MyNameOnMobileDevices>

      <MyInfoInnerWrapper>
        <MyInfoMainArea>
          <MyInfoPhotoWrapper>
            <MyInfoPhoto src={Mugshot} alt="Anna Branco" />
          </MyInfoPhotoWrapper>
          <MyInfoWhoAmI>
            <MyNameOnDesktopDevices>Anna Branco</MyNameOnDesktopDevices>
            <MyJob>{texts.job}</MyJob>
            <MyInfoMessage>
              {!displayThanksMessage ? texts.aditional : texts.thankyou}
            </MyInfoMessage>
          </MyInfoWhoAmI>
        </MyInfoMainArea>
        <MyInfoSocialWrapper>
          <Social texts={texts} />
        </MyInfoSocialWrapper>
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
