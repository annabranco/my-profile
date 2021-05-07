import { ReactElement, useEffect } from 'react';
import { string } from 'prop-types';
import { IErrorText } from '../../../types/interfaces';
import appInfo from '../../../../package.json';
import { useStateWithLabel } from '../../../utils/hooks';
import { isDesktop } from '../../../utils/device';
import { Barquinho } from '../../../assets/images';
import { NOTIFY_BUTTON } from '../../../constants';
import { errorTextsPropType } from '../../../types/propTypes';
import { MeuBarquinho } from '../../sections/MyInfoPage/styles';
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

const DEFAULT_ERROR_TEXTS = {
  errorLine1: "I'm awfully sorry but something unexpected had happened. :(",
  errorLine2:
    "I'd really appreciate if you could notify me of this error on my issues page.",
  notifyMe: 'Notify me',
  title: "That's embarassing..."
};

const REPORT_ISSUE_PAGE = `${appInfo.bugs.url}/new`;

interface Props {
  error: string;
  texts: IErrorText;
}

const ErrorComponent = ({ error, texts }: Props): ReactElement => {
  const [showNotifyButton, toggleNotifyButton] = useStateWithLabel<boolean>(
    false,
    NOTIFY_BUTTON
  );

  useEffect(() => {
    setTimeout(() => toggleNotifyButton(true), 5000);
    // toggleNotifyButton(true);
  }, []);

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
