import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollArea from '../ScrollArea';
import { LanguagesModal } from '../../views';
import {
  textsPropType,
  projectsPropType,
  skillGroupsPropType,
  formationPropType,
  experiencesPropType
} from '../../../types';

class MainArea extends Component {
  static propTypes = {
    onChangeLanguage: PropTypes.func.isRequired,
    texts: textsPropType.isRequired,
    projects: PropTypes.arrayOf(projectsPropType).isRequired,
    skills: PropTypes.arrayOf(skillGroupsPropType).isRequired,
    experiences: PropTypes.arrayOf(experiencesPropType).isRequired,
    formation: PropTypes.arrayOf(formationPropType).isRequired,
    closeLanguageModal: PropTypes.func.isRequired,
    doNotShowLanguageModalAgain: PropTypes.bool.isRequired,
    triggerThankYouMessage: PropTypes.func.isRequired,
    displayThanksMessage: PropTypes.bool.isRequired
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
    }, 3000);
  };

  render() {
    const { frenchClicked, languageModalIsVisible } = this.state;
    const {
      onChangeLanguage,
      doNotShowLanguageModalAgain,
      texts,
      triggerThankYouMessage,
      displayThanksMessage,
      projects,
      skills,
      formation,
      experiences
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
          skills={skills}
          formation={formation}
          experiences={experiences}
          triggerThankYouMessage={triggerThankYouMessage}
          displayThanksMessage={displayThanksMessage}
          languageModalIsVisible={languageModalIsVisible}
        />
      </main>
    );
  }
}

export default MainArea;
