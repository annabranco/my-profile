import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { IAppState, IInfoPageText } from '../../../types/interfaces';
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
  const finishedScenario: IAppState['finishedScenario'] = useSelector(
    finishedSelector
  );
  const texts: IInfoPageText = useSelector(infoPageTextSelector);

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
              <MyNameOnDesktopDevices data-e2e-id="me">
                Anna Branco
              </MyNameOnDesktopDevices>
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
            <LineOfArrows>
              {isDesktop ? (
                <>
                  {[0, 1, 2].map(index => (
                    <ArrowIcon
                      key={`${index}`}
                      className="fas fa-angle-double-down"
                    />
                  ))}
                </>
              ) : (
                <ArrowIcon className="fas fa-angle-double-down" />
              )}
            </LineOfArrows>
          </>
        )}
      </MyInfoWrapper>
    </SectionMyInfo>
  );
};

export default MyInfoPage;
