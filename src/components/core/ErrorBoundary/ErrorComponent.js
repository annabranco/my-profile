import React, { useEffect } from 'react';
import { string } from 'prop-types';
import appInfo from '../../../../package.json';
import { useStateWithLabel } from '../../../utils/hooks';
import { Barquinho } from '../../../assets/images';
import { NOTIFY_BUTTON } from '../../../constants';
import {
  DetailsText,
  ErrorDetailsArea,
  ErrorSection,
  ErrorTitle,
  NotificationArea,
  NotifyButton,
  NotifyButtonIcon,
  NotifyButtonText,
  SorryText
} from './styles';
import { MeuBarquinho } from '../../sections/MyInfoPage/styles';
import { errorTextsPropType } from '../../../types';
import { isDesktop } from '../../../utils/device';

const DEFAULT_ERROR_TEXTS = {
  errorLine1: "I'm awfully sorry but something unexpected had happened. :(",
  errorLine2:
    "I'd really appreciate if you could notify me of this error on my issues page.",
  notifyMe: 'Notify me',
  title: "That's embarassing..."
};

const REPORT_ISSUE_PAGE = `${appInfo.bugs.url}/new`;

const ErrorComponent = ({ error, texts }) => {
  const [showNotifyButton, toggleNotifyButton] = useStateWithLabel(
    false,
    NOTIFY_BUTTON
  );

  useEffect(() => {
    setTimeout(() => toggleNotifyButton(true), 5000);
  });

  return (
    <ErrorSection>
      {isDesktop && (
        <MeuBarquinho src={Barquinho} alt="Navigating beautifully" />
      )}
      <ErrorTitle>{texts.title}</ErrorTitle>
      <NotificationArea>
        <SorryText>{texts.errorLine1}</SorryText>
        <SorryText>{texts.errorLine2}</SorryText>
        <ErrorDetailsArea>
          <DetailsText>{error}</DetailsText>
        </ErrorDetailsArea>
        <NotifyButton
          visible={showNotifyButton}
          href={REPORT_ISSUE_PAGE}
          target="_Blank"
          rel="noopener noreferrer"
        >
          <NotifyButtonText>{texts.notifyMe}</NotifyButtonText>
          <NotifyButtonIcon className="fab fa-github-alt" />
        </NotifyButton>
      </NotificationArea>
    </ErrorSection>
  );
};

ErrorComponent.propTypes = {
  error: string.isRequired,
  texts: errorTextsPropType
};

ErrorComponent.defaultProps = {
  texts: DEFAULT_ERROR_TEXTS
};

export default ErrorComponent;
