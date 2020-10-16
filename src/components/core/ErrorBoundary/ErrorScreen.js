import React, { Component } from 'react';
import { string } from 'prop-types';
import { Barquinho } from '../../../images';

import {
  ErrorSection,
  ErrorTitle,
  ErrorNotifyWrapper,
  ErrorSorryMessage,
  ErrorNotifyButton,
  ErrorNotifyButtonText,
  ErrorNotifyButtonIcon,
  ErrorDetailArea,
  ErrorDetailText
} from './styles';
import { MeuBarquinho } from '../../views/MyInfoPage/styles';

const DEFAULT_ERROR_TEXTS = {
  errorLine1: "I'm awfully sorry but something unexpected had happened. :(",
  errorLine2:
    "I'd really appreciate if you could notify me of this error on my issues page.",
  notifyMe: 'Notify me',
  title: "That's embarassing..."
};

class ErrorScreen extends Component {
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
        <ErrorNotifyWrapper>
          <ErrorSorryMessage>{texts.errorLine1}</ErrorSorryMessage>
          <ErrorSorryMessage>{texts.errorLine2}</ErrorSorryMessage>
          <ErrorDetailArea>
            <ErrorDetailText>{error}</ErrorDetailText>
          </ErrorDetailArea>
          <ErrorNotifyButton
            visible={this.state.showNotifyButton}
            href="https://github.com/annabranco/my-profile/issues/new"
            target="_Blank"
            rel="noopener noreferrer"
          >
            <ErrorNotifyButtonText>{texts.notifyMe}</ErrorNotifyButtonText>
            <ErrorNotifyButtonIcon className="fab fa-github-alt" />
          </ErrorNotifyButton>
        </ErrorNotifyWrapper>
      </ErrorSection>
    );
  }
}

export default ErrorScreen;
