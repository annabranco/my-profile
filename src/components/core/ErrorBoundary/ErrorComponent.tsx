import { ReactElement } from 'react';
import { string } from 'prop-types';
import { IErrorText } from '../../../types/interfaces';
import appInfo from '../../../../package.json';
import { isDesktop } from '../../../utils/device';
import { Barquinho } from '../../../assets/images';
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

const ErrorComponent = ({ error, texts }: Props): ReactElement => (
  <ErrorSection>
    {isDesktop && <MeuBarquinho src={Barquinho} alt="Navigating beautifully" />}
    <ErrorTitle data-e2e-id="error-title">{texts.title}</ErrorTitle>
    <NotificationArea data-e2e-id="error-sorryText">
      <SorryText>{texts.errorLine1}</SorryText>
      <SorryText>{texts.errorLine2}</SorryText>
      <ErrorDetailsArea>
        <DetailsText data-e2e-id="error-message">{error}</DetailsText>
      </ErrorDetailsArea>
      <NotifyButton
        data-e2e-id="error-button"
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

ErrorComponent.propTypes = {
  error: string.isRequired,
  texts: errorTextsPropType
};

ErrorComponent.defaultProps = {
  texts: DEFAULT_ERROR_TEXTS
};

export default ErrorComponent;
