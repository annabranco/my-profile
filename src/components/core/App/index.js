import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';
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

const DEFAULT_PAGE_LANGUAGE = 'English';

class App extends Component {
  static propTypes = {
    texts: allLanguagesTextsPropType.isRequired,
    APP_VERSION: string.isRequired,
    projects: arrayOf(projectsPropType).isRequired,
    skills: arrayOf(skillGroupsPropType).isRequired,
    experiences: arrayOf(experiencesPropType).isRequired,
    formation: arrayOf(formationPropType).isRequired,
    languages: arrayOf(languagesPropType).isRequired
  };

  state = {
    language: getLanguageCodeByName(DEFAULT_PAGE_LANGUAGE),
    doNotShowLanguageModalAgain: false,
    displayThanksMessage: false,
    languageSettingsAreLoaded: false
  };

  componentDidMount() {
    this.loadLanguageSettings();
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
    const languageSettings =
      JSON.parse(localStorage.getItem("Anna Branco's professional profile")) ||
      {};
    const language = languageSettings.language || this.state.language;
    const doNotShowLanguageModalAgain =
      languageSettings.doNotShowLanguageModalAgain ||
      this.state.doNotShowLanguageModalAgain;

    this.setState({
      language,
      doNotShowLanguageModalAgain,
      languageSettingsAreLoaded: true
    });
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
    const { language, languageSettingsAreLoaded } = this.state;
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
      <ErrorBoundary texts={texts[language].error}>
        <Header
          languages={languages}
          texts={texts[language].header}
          language={language}
          onChangeLanguage={this.onChangeLanguage}
          APP_VERSION={APP_VERSION}
        />
        {languageSettingsAreLoaded && (
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
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
