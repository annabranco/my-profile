import styled, { css } from 'styled-components';
import {
  colorWhite,
  colorBlueLight,
  colorBlack,
  colorGrayNormal,
  fontSubtitle,
  fontTitleAlt
} from '../../../styles/theme';
import { FullScreen, MainBackground } from '../../../styles/global';
import { LinkButton } from '../../Social/styles';

export const DetailsText = styled.p`
  font-size: 1rem;
`;
DetailsText.displayName = 'DetailsText';

export const ErrorDetailsArea = styled.div`
  background: ${colorWhite};
  width: 60vw;
  padding: 10px 40px;
  border-radius: 8px 0;
  margin-top: 15px;
  box-shadow: 0 0 5px 2px ${colorWhite};

  &::before {
    content: 'ERROR:';
    font-size: 0.7rem;
    font-family: ${fontTitleAlt};
    color: ${colorGrayNormal};
  }
`;
ErrorDetailsArea.displayName = 'ErrorDetailsArea';

export const ErrorSection = styled.div`
  ${MainBackground}
  ${FullScreen};
  margin: 0;
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
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;
NotificationArea.displayName = 'NotificationArea';

export const NotifyButton = styled(LinkButton)`
  margin-top: 40px;
  position: fixed;
  bottom: 5%;
  opacity: 0;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      transition: opacity 10s;
    `}
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
  margin: 0 0 20px;
  width: 80%;
  font-style: italic;
  font-family: ${fontSubtitle};
  font-size: 1.3rem;
  line-height: 1.5;
  color: ${colorBlueLight};
  text-align: left;
`;
SorryText.displayName = 'SorryText';
