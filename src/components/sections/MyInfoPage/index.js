import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { func } from 'prop-types';
import Social from '../../elements/Social';
import {
  finishedSelector,
  infoPageTextSelector,
  sectionsTextsSelector
} from '../../../redux/selectors';
import { isDesktop, isFullWindowDesktop } from '../../../utils/device';
import {
  Mugshot,
  Barquinho,
  Birds,
  BlinkingFish
} from '../../../assets/images';
import {
  Advise,
  BirdsFlying,
  InfoArea,
  InfoMessage,
  JobTitle,
  LineOfArrows,
  MainAreaWrapper,
  MeuBarquinho,
  MoreText,
  MyInfoInnerWrapper,
  MyInfoWrapper,
  MyNameOnDesktopDevices,
  MyNameOnMobileDevices,
  Photo,
  PhotoWrapper,
  ScrollDownDisplay,
  SectionMyInfo,
  SocialArea,
  KindFish,
  ArrowIcon
} from './styles';
import { SKILLS_SECTION } from '../../../constants';
import { changeSection } from '../../../redux/actions/sections';

const MyInfoPage = () => {
  const finishedScenario = useSelector(finishedSelector);
  const texts = useSelector(infoPageTextSelector);
  const arrowLines = isDesktop ? 3 : 1;

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
              {finishedScenario && <KindFish src={BlinkingFish} />}
              <InfoMessage>
                {!finishedScenario ? texts.aditional : texts.thankyou}
              </InfoMessage>
            </InfoArea>
          </MainAreaWrapper>
          <SocialArea>
            <Social texts={texts} />
          </SocialArea>
        </MyInfoInnerWrapper>

        <BirdsFlying src={Birds} />
        <MeuBarquinho src={Barquinho} alt="Navigating beautifully" />

        {!isFullWindowDesktop && (
          <Advise className="infoPage__advise">{texts.advise}</Advise>
        )}

        {isDesktop && (
          <>
            {[...Array(arrowLines).keys()].map(line => (
              <LineOfArrows key={line}>
                {isDesktop ? (
                  <>
                    {[0, 1, 2].map(index => (
                      <ArrowIcon
                        key={`${line}-${index}`}
                        className="fas fa-angle-double-down"
                      />
                    ))}
                  </>
                ) : (
                  <ArrowIcon className="fas fa-angle-double-down" />
                )}
              </LineOfArrows>
            ))}
          </>
        )}
      </MyInfoWrapper>
    </SectionMyInfo>
  );
};

export default MyInfoPage;
