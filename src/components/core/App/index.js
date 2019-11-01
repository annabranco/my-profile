import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';
import { MainArea } from '../../containers';
import { Header } from '../../views';
import { getLanguageCodeByName } from '../../../utils/languages';
import {
  projectsPropType,
  allLanguagesTextsPropType,
  skillGroupsPropType,
  experiencesPropType,
  formationPropType,
  languagesPropType
} from '../../../types';
import { StylesSetter } from '../../../styles/variables';

const DEFAULT_PAGE_LANGUAGE = 'English';

class App extends Component {
  static propTypes = {
    texts: allLanguagesTextsPropType.isRequired,
    APP_VERSION: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(projectsPropType).isRequired,
    skills: PropTypes.arrayOf(skillGroupsPropType).isRequired,
    experiences: PropTypes.arrayOf(experiencesPropType).isRequired,
    formation: PropTypes.arrayOf(formationPropType).isRequired,
    languages: PropTypes.arrayOf(languagesPropType).isRequired
  };

  state = {
    language: getLanguageCodeByName(DEFAULT_PAGE_LANGUAGE),
    doNotShowLanguageModalAgain: false,
    displayThanksMessage: false
  };

  componentDidMount() {
    this.loadLanguageSettings();
    console.log('$$$ this.props', this.props);
  }

  saveLanguageSettings = () => {
    const { language, doNotShowLanguageModalAgain } = this.state;
    localStorage.setItem(
      "Anna Branco's professional profile",
      JSON.stringify({
        language,
        doNotShowLanguageModalAgain
      })
    );
  };

  loadLanguageSettings = () => {
    if (localStorage.getItem("Anna Branco's professional profile") !== null) {
      const { language, doNotShowLanguageModalAgain } = JSON.parse(
        localStorage.getItem("Anna Branco's professional profile")
      );
      this.setState({ language, doNotShowLanguageModalAgain });
    }
  };

  onChangeLanguage = event =>
    this.setState({ language: event.currentTarget.lang });

  closeLanguageModal = willModalBeDisplayedAgain =>
    this.setState(
      { doNotShowLanguageModalAgain: willModalBeDisplayedAgain },
      () => this.saveLanguageSettings()
    );

  triggerThankYouMessage = () => this.setState({ displayThanksMessage: true });

  render() {
    const { language } = this.state;
    const {
      texts,
      APP_VERSION,
      projects,
      skills,
      formation,
      experiences,
      languages
    } = this.props;

    return (
      <StylesSetter>
        <ErrorBoundary texts={texts[language].error}>
          <Header
            languages={languages}
            texts={texts[language].header}
            language={language}
            onChangeLanguage={this.onChangeLanguage}
            APP_VERSION={APP_VERSION}
          />
          <MainArea
            languages={languages}
            language={language}
            onChangeLanguage={this.onChangeLanguage}
            texts={texts[language]}
            projects={projects}
            skills={skills}
            formation={formation}
            experiences={experiences}
            closeLanguageModal={this.closeLanguageModal}
            doNotShowLanguageModalAgain={this.state.doNotShowLanguageModalAgain}
            triggerThankYouMessage={this.triggerThankYouMessage}
            displayThanksMessage={this.state.displayThanksMessage}
          />
        </ErrorBoundary>
      </StylesSetter>
    );
  }
}

export default App;
