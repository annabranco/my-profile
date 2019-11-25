import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollArea from '../ScrollArea';
import { LanguagesModal } from '../../views';
import {
  textsPropType,
  projectsPropType,
  skillGroupsPropType,
  formationPropType,
  experiencesPropType,
  languagesPropType
} from '../../../types';

class MainArea extends Component {
  static propTypes = {
    onChangeLanguage: PropTypes.func.isRequired,
    texts: textsPropType.isRequired,
    projects: PropTypes.arrayOf(projectsPropType).isRequired,
    skills: PropTypes.arrayOf(skillGroupsPropType).isRequired,
    experiences: PropTypes.arrayOf(experiencesPropType).isRequired,
    formation: PropTypes.arrayOf(formationPropType).isRequired,
    languages: PropTypes.arrayOf(languagesPropType).isRequired,
    language: PropTypes.string.isRequired,
    closeLanguageModal: PropTypes.func.isRequired,
    doNotShowLanguageModalAgain: PropTypes.bool.isRequired,
    triggerThankYouMessage: PropTypes.func.isRequired,
    displayThanksMessage: PropTypes.bool.isRequired
  };

  state = {
    languageModalIsVisible: false,
    checkboxDoNotShowLanguageModalAgain: false
  };

  componentDidMount() {
    if (!this.props.doNotShowLanguageModalAgain) {
      this.setState({ languageModalIsVisible: true });
    }
  }

  handleShowLanguageModalAgain = event =>
    this.setState({
      checkboxDoNotShowLanguageModalAgain: event.currentTarget.checked
    });

  onCloseLanguageModal = () => {
    this.setState({ languageModalIsVisible: false });
    this.props.closeLanguageModal(
      this.state.checkboxDoNotShowLanguageModalAgain
    );
  };

  render() {
    const { languageModalIsVisible } = this.state;
    const {
      onChangeLanguage,
      texts,
      triggerThankYouMessage,
      displayThanksMessage,
      projects,
      skills,
      formation,
      experiences,
      languages,
      language
    } = this.props;

    return (
      <main>
        {languageModalIsVisible && (
          <LanguagesModal
            languages={languages}
            texts={texts.languages}
            languageSelected={language}
            onChangeLanguage={onChangeLanguage}
            onCloseLanguageModal={this.onCloseLanguageModal}
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
