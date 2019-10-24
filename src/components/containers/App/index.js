import React, { Component, Fragment } from 'react';
import { MainArea } from '../';
import { Header } from '../../views';
import { getLanguageCodeByName } from '../../../utils/languages';

const DEFAULT_PAGE_LANGUAGE = 'English';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: props.texts,
      language: getLanguageCodeByName(DEFAULT_PAGE_LANGUAGE),
      doNotShowLanguageModalAgain: undefined,
      displayThanksMessage: false
    };
  }

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
    const { texts, APP_VERSION } = this.props;

    return (
      <Fragment>
        <Header
          texts={texts[language].header}
          language={language}
          onChangeLanguage={this.onChangeLanguage}
          APP_VERSION={APP_VERSION}
        />
        <MainArea
          onChangeLanguage={this.onChangeLanguage}
          texts={texts[language]}
          closeLanguageModal={this.closeLanguageModal}
          doNotShowLanguageModalAgain={this.state.doNotShowLanguageModalAgain}
          handleAdjustExpandedProjectsView={
            this.handleAdjustExpandedProjectsView
          }
          triggerThankYouMessage={this.triggerThankYouMessage}
          displayThanksMessage={this.state.displayThanksMessage}
        />
      </Fragment>
    );
  }
}
