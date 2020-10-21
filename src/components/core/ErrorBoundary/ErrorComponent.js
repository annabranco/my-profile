import React, { Component } from 'react';
import { string } from 'prop-types';
import { Barquinho } from '../../../images';

import {
  ErrorSection,
  ErrorTitle,
  NotificationArea,
  SorryText,
  NotifyButton,
  NotifyButtonText,
  NotifyButtonIcon,
  ErrorDetailsArea,
  DetailsText
} from './styles';
import { MeuBarquinho } from '../../views/MyInfoPage/styles';

const DEFAULT_ERROR_TEXTS = {
  errorLine1: "I'm awfully sorry but something unexpected had happened. :(",
  errorLine2:
    "I'd really appreciate if you could notify me of this error on my issues page.",
  notifyMe: 'Notify me',
  title: "That's embarassing..."
};

class ErrorComponent extends Component {
  static propTypes = {
    error: string.isRequired,
    texts: string
  };

  static defaultProps = {
    texts: DEFAULT_ERROR_TEXTS
  };

  state = { showNotifyButton: false };

  componentDidMount() {
    setTimeout(() => this.toggleNotifyButton(true), 5000);
  }

  toggleNotifyButton = () => this.setState({ showNotifyButton: true });

  render() {
    const { texts, error } = this.props;

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
            visible={this.state.showNotifyButton}
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
  }
}

export default ErrorComponent;
