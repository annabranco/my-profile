import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollArea from '../ScrollArea';
import { LanguagesModal } from '../../views';
import { textsPropType, projectsPropType } from '../../../types';

class MainArea extends Component {
  static propTypes = {
    onChangeLanguage: PropTypes.func.isRequired,
    texts: textsPropType.isRequired,
    projects: projectsPropType.isRequired,
    closeLanguageModal: PropTypes.func.isRequired,
    doNotShowLanguageModalAgain: PropTypes.bool.isRequired,
    triggerThankYouMessage: PropTypes.func.isRequired,
    displayThanksMessage: PropTypes.func.isRequired
  };

  state = {
    languageModalIsVisible: true,
    frenchClicked: false,
    doNotShowLanguageModalAgain: true
  };

  handleShowLanguageModalAgain = event =>
    this.setState({
      doNotShowLanguageModalAgain: event.currentTarget.checked
    });

  onCloseLanguageModal = () => {
    this.setState({ languageModalIsVisible: false });
    this.props.closeLanguageModal(this.state.doNotShowLanguageModalAgain);
  };

  onClickFrench = () => {
    this.setState({ frenchClicked: true });
    setTimeout(() => {
      this.setState({ frenchClicked: false });
    }, 5000);
  };

  render() {
    const { frenchClicked, languageModalIsVisible } = this.state;
    const {
      onChangeLanguage,
      doNotShowLanguageModalAgain,
      texts,
      triggerThankYouMessage,
      displayThanksMessage,
      projects
    } = this.props;

    return (
      <main>
        {!doNotShowLanguageModalAgain && languageModalIsVisible && (
          <LanguagesModal
            texts={texts.languages}
            language={texts.languages.language}
            onChangeLanguage={onChangeLanguage}
            onCloseLanguageModal={this.onCloseLanguageModal}
            frenchClicked={frenchClicked}
            onClickFrench={this.onClickFrench}
            handleShowLanguageModalAgain={this.handleShowLanguageModalAgain}
          />
        )}
        <ScrollArea
          texts={texts}
          projects={projects}
          triggerThankYouMessage={triggerThankYouMessage}
          displayThanksMessage={displayThanksMessage}
          languageModalIsVisible={languageModalIsVisible}
        />
      </main>
    );
  }
}

export default MainArea;
