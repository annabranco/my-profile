import React, { useEffect } from 'react';
import { string } from 'prop-types';
import { useStateWithLabel } from '../../../utils/hooks';
import { Barquinho } from '../../../images';
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
import { MeuBarquinho } from '../../views/MyInfoPage/styles';

const DEFAULT_ERROR_TEXTS = {
  errorLine1: "I'm awfully sorry but something unexpected had happened. :(",
  errorLine2:
    "I'd really appreciate if you could notify me of this error on my issues page.",
  notifyMe: 'Notify me',
  title: "That's embarassing..."
};

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
      <MeuBarquinho src={Barquinho} alt="Navigating beautifully" />
      <ErrorTitle>{texts.title}</ErrorTitle>
      <NotificationArea>
        <SorryText>{texts.errorLine1}</SorryText>
        <SorryText>{texts.errorLine2}</SorryText>
        <ErrorDetailsArea>
          <DetailsText>{error}</DetailsText>
        </ErrorDetailsArea>
        <NotifyButton
          visible={showNotifyButton}
          href="https://github.com/annabranco/my-profile/issues/new"
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
  texts: string
};

ErrorComponent.defaultProps = {
  texts: DEFAULT_ERROR_TEXTS
};

export default ErrorComponent;
