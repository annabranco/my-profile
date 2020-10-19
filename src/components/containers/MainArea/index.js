import React, { Component } from 'react';
import { func, arrayOf, string, bool } from 'prop-types';
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
    onChangeLanguage: func.isRequired,
    texts: textsPropType.isRequired,
    projects: arrayOf(projectsPropType).isRequired,
    skills: arrayOf(skillGroupsPropType).isRequired,
    experiences: arrayOf(experiencesPropType).isRequired,
    formation: arrayOf(formationPropType).isRequired,
    languages: arrayOf(languagesPropType).isRequired,
    language: string.isRequired,
    closeLanguageModal: func.isRequired,
    doNotShowLanguageModalAgain: bool.isRequired,
    triggerThankYouMessage: func.isRequired,
    displayThanksMessage: bool.isRequired
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
