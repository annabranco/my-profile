import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AppState, InfoPageTextType } from '../../../types/interfaces';
import Social from '../../elements/Social';
import {
  finishedSelector,
  infoPageTextSelector
} from '../../../redux/selectors';
import { isDesktop, isFullWindowDesktop } from '../../../utils/device';
import {
  Barquinho,
  Birds,
  BlinkingFish,
  Mugshot
} from '../../../assets/images';
import {
  Advise,
  ArrowIcon,
  BirdsFlying,
  InfoArea,
  InfoMessage,
  JobTitle,
  KindFish,
  LineOfArrows,
  MainAreaWrapper,
  MeuBarquinho,
  MyInfoInnerWrapper,
  MyInfoWrapper,
  MyNameOnDesktopDevices,
  MyNameOnMobileDevices,
  Photo,
  PhotoWrapper,
  SectionMyInfo,
  SocialArea
} from './styles';

const MyInfoPage = (): ReactElement => {
  const finishedScenario: AppState['finishedScenario'] = useSelector(
    finishedSelector
  );
  const texts: InfoPageTextType = useSelector(infoPageTextSelector);
  const arrowLines: number = isDesktop ? 3 : 1;

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
