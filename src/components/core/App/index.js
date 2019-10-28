import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';
import { MainArea } from '../../containers';
import { Header } from '../../views';
import { getLanguageCodeByName } from '../../../utils/languages';
import { projectsPropType, allLanguagesTextsPropType } from '../../../types';

const DEFAULT_PAGE_LANGUAGE = 'English';

class App extends Component {
  static propTypes = {
    texts: allLanguagesTextsPropType.isRequired,
    APP_VERSION: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(projectsPropType).isRequired
  };

  state = {
    language: getLanguageCodeByName(DEFAULT_PAGE_LANGUAGE),
    doNotShowLanguageModalAgain: false,
    displayThanksMessage: false
  };

  componentDidMount() {
    this.loadLanguageSettings();
    console.log('$$$ this.props.projects', this.props.projects);
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
    const { texts, APP_VERSION, projects } = this.props;

    return (
      <ErrorBoundary texts={texts[language].error}>
        <Header
          texts={texts[language].header}
          language={language}
          onChangeLanguage={this.onChangeLanguage}
          APP_VERSION={APP_VERSION}
        />
        <MainArea
          onChangeLanguage={this.onChangeLanguage}
          texts={texts[language]}
          projects={projects}
          closeLanguageModal={this.closeLanguageModal}
          doNotShowLanguageModalAgain={this.state.doNotShowLanguageModalAgain}
          triggerThankYouMessage={this.triggerThankYouMessage}
          displayThanksMessage={this.state.displayThanksMessage}
        />
      </ErrorBoundary>
    );
  }
}

export default App;
