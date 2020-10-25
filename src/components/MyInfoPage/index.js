import React from 'react';
import { useSelector } from 'react-redux';
import Social from '../Social';
import { finishedSelector, infoPageTextSelector } from '../../redux/selectors';
import { isFullWindowDesktop } from '../../utils/device';
import { Mugshot, Barquinho } from '../../images';
import {
  FirstArrowIcon,
  InfoArea,
  InfoMessage,
  JobTitle,
  LineOfArrows,
  MainAreaWrapper,
  MeuBarquinho,
  MyInfoInnerWrapper,
  MyInfoWrapper,
  MyNameOnDesktopDevices,
  MyNameOnMobileDevices,
  Photo,
  PhotoWrapper,
  ScrollDownDisplay,
  SecondArrowIcon,
  SectionMyInfo,
  SocialArea,
  ThirdArrowIcon
} from './styles';

const MyInfoPage = () => {
  const finishedScenario = useSelector(finishedSelector);
  const texts = useSelector(infoPageTextSelector);

  return (
    <SectionMyInfo id="My Info Section">
      <MyInfoWrapper>
        <MyNameOnMobileDevices>Anna Branco</MyNameOnMobileDevices>

        <MyInfoInnerWrapper>
          <MainAreaWrapper>
            <PhotoWrapper>
              <Photo src={Mugshot} alt="Anna Branco" />
            </PhotoWrapper>
            <InfoArea>
              <MyNameOnDesktopDevices>Anna Branco</MyNameOnDesktopDevices>
              <JobTitle>{texts.job}</JobTitle>
              <InfoMessage>
                {!finishedScenario ? texts.aditional : texts.thankyou}
              </InfoMessage>
            </InfoArea>
          </MainAreaWrapper>
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
              <FirstArrowIcon
                key={index}
                className="fas fa-angle-double-down"
              />
            ))}
          </LineOfArrows>
          <LineOfArrows>
            {[0, 1, 2].map(index => (
              <SecondArrowIcon
                key={index}
                className="fas fa-angle-double-down"
              />
            ))}
          </LineOfArrows>
          <LineOfArrows>
            {[0, 1, 2].map(index => (
              <ThirdArrowIcon
                key={index}
                className="fas fa-angle-double-down"
              />
            ))}
          </LineOfArrows>
        </ScrollDownDisplay>
      </MyInfoWrapper>
    </SectionMyInfo>
  );
};

export default MyInfoPage;
