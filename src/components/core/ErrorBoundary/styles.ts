import styled from 'styled-components';
import {
  colorWhite,
  colorBlueLight,
  colorBlack,
  colorGrayNormal,
  fontSubtitle,
  fontTitleAlt
} from '../../../styles/theme';
import { FullScreen, MainBackground } from '../../../styles/global';
import { LinkButton } from '../../elements/Social/styles';

export const DetailsText = styled.p`
  font-size: 1rem;
`;
DetailsText.displayName = 'DetailsText';

export const ErrorDetailsArea = styled.div`
  background: ${colorWhite};
  width: 100%;
  padding: 10px;
  border-radius: 8px 0;
  margin-top: 15px;
  box-shadow: 0 0 5px 2px ${colorWhite};

  &::before {
    content: 'ERROR:';
    font-size: 0.7rem;
    font-family: ${fontTitleAlt};
    color: ${colorGrayNormal};
  }

  @media all and (min-width: 768px) {
    width: 60vw;
    padding: 10px 40px;
  }
`;
ErrorDetailsArea.displayName = 'ErrorDetailsArea';

export const ErrorSection = styled.div`
  ${MainBackground}
  height: ${`${window.innerHeight}px`};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media all and (min-width: 768px) {
    ${FullScreen};
    display: block;
  }
`;
ErrorSection.displayName = 'ErrorSection';

export const ErrorTitle = styled.h2`
  margin-left: 0;
  width: auto;
  font-family: ${fontSubtitle};
  font-size: 2rem;
  text-align: left;
`;
ErrorTitle.displayName = 'ErrorTitle';

export const NotificationArea = styled.div`
  position: relative;
  top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media all and (min-width: 768px) {
    top: 50%;
    width: 80vw;
  }
`;
NotificationArea.displayName = 'NotificationArea';

interface NotifyButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  visible?: boolean | null;
}

export const NotifyButton = styled(LinkButton)<NotifyButtonProps>`
  margin-top: 40px;
  position: fixed;
  bottom: 5%;
`;
NotifyButton.displayName = 'NotifyButton';

export const NotifyButtonIcon = styled.i`
  display: inline;
  margin-left: 15px;
  vertical-align: middle;
  text-shadow: 0 0 1px ${colorBlack};
  font-size: 2rem;
`;
NotifyButtonIcon.displayName = 'NotifyButtonIcon';

export const NotifyButtonText = styled.p`
  position: relative;
  right: 0;
  margin: 4px 0 0 5px;
  font-family: ${fontTitleAlt};
  font-size: 1.3rem;
  color: ${colorBlack};
`;
NotifyButtonText.displayName = 'NotifyButtonText';

export const SorryText = styled.p`
  margin: 0;
  width: 100%;
  font-style: italic;
  font-family: ${fontSubtitle};
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${colorBlueLight};
  text-align: left;

  @media all and (min-width: 768px) {
    font-size: 1.3rem;
    margin: 0 0 20px;
    width: 80%;
  }
`;
SorryText.displayName = 'SorryText';
