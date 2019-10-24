import React, { Component } from 'react';
import { MainArea } from '../';
import { Header } from '../../views';
import { getLanguageCodeByName } from '../../../utils/languages';

const doc = document.documentElement;
let adjustExpandedProjectsView = 0;
const DEFAULT_PAGE_LANGUAGE = 'English';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: this.props.texts,
      language: getLanguageCodeByName(DEFAULT_PAGE_LANGUAGE),
      doNotShowLanguagePopupAgain: undefined,
      viewedAll: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.loadLanguageSettings();
    this.setState({ viewedAll: false });
    console.log('$$$ this.props.texts', this.props.texts);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  saveLanguageSettings = () => {
    const { language, doNotShowLanguagePopupAgain } = this.state;
    localStorage.setItem(
      "Anna Branco's professional profile",
      JSON.stringify({
        language,
        doNotShowLanguagePopupAgain
      })
    );
  };

  loadLanguageSettings = () => {
    if (localStorage.getItem("Anna Branco's professional profile") !== null) {
      const { language, doNotShowLanguagePopupAgain } = JSON.parse(
        localStorage.getItem("Anna Branco's professional profile")
      );
      this.setState({ language, doNotShowLanguagePopupAgain });
    }
  };

  onChangeLanguage = event =>
    this.setState({ language: event.currentTarget.lang }, () =>
      this.saveLanguageSettings()
    );

  closeLanguagePopup = doNotShowAgain =>
    this.setState({ doNotShowLanguagePopupAgain: doNotShowAgain }, () =>
      this.saveLanguageSettings()
    );

  userViewedAllComponents = () => this.setState({ viewedAll: true });

  handleAdjustExpandedProjectsView = adjust => {
    adjustExpandedProjectsView = adjust;
  };

  handleScroll = () => {
    if (doc.scrollTop >= 350 && doc.scrollTop <= 1540) {
      document.querySelector('.developer__formation').classList.add('comeIn');
    } else {
      document
        .querySelector('.developer__formation')
        .classList.remove('comeIn');
    }

    if (
      doc.scrollTop >= 500 &&
      doc.scrollTop <= 1540 + adjustExpandedProjectsView
    ) {
      document.querySelector('.developer__projects').classList.add('comeIn');
    } else {
      document.querySelector('.developer__projects').classList.remove('comeIn');
    }

    if (
      doc.scrollTop >= 450 &&
      doc.scrollTop <= 1540 + adjustExpandedProjectsView
    ) {
      document.querySelector('.developer__sidebar').classList.add('comeIn');
    } else {
      document.querySelector('.developer__sidebar').classList.remove('comeIn');
    }

    if (
      doc.scrollTop >= 1050 + adjustExpandedProjectsView &&
      doc.scrollTop <= 2000 + adjustExpandedProjectsView
    ) {
      document
        .querySelector('.formation__horizontarBar-psy')
        .classList.add('comeIn');
      document.querySelector('.formation__title-psy').classList.add('comeIn');
      for (const each of document.querySelectorAll('.formation__details-psy')) {
        each.classList.add('comeIn');
      }
    } else {
      document
        .querySelector('.formation__horizontarBar-psy')
        .classList.remove('comeIn');
      document
        .querySelector('.formation__title-psy')
        .classList.remove('comeIn');
      for (const each of document.querySelectorAll('.formation__details-psy')) {
        each.classList.remove('comeIn');
      }
    }

    if (
      doc.scrollTop >= 1200 + adjustExpandedProjectsView &&
      doc.scrollTop <= 2000 + adjustExpandedProjectsView
    ) {
      document
        .querySelector('.formation__horizontarBar-ir')
        .classList.add('comeIn');
      document.querySelector('.formation__title-ir').classList.add('comeIn');
      for (const each of document.querySelectorAll('.formation__details-ir')) {
        each.classList.add('comeIn');
      }
    } else {
      document
        .querySelector('.formation__horizontarBar-ir')
        .classList.remove('comeIn');
      document.querySelector('.formation__title-ir').classList.remove('comeIn');
      for (const each of document.querySelectorAll('.formation__details-ir')) {
        each.classList.remove('comeIn');
      }
    }

    if (
      doc.scrollTop >= 1320 + adjustExpandedProjectsView &&
      doc.scrollTop <= 2000 + adjustExpandedProjectsView
    ) {
      document
        .querySelector('.formation__horizontarBar-master')
        .classList.add('comeIn');
      document
        .querySelector('.formation__title-master')
        .classList.add('comeIn');
      for (const each of document.querySelectorAll(
        '.formation__details-master'
      )) {
        each.classList.add('comeIn');
      }
    } else {
      document
        .querySelector('.formation__horizontarBar-master')
        .classList.remove('comeIn');
      document
        .querySelector('.formation__title-master')
        .classList.remove('comeIn');
      for (const each of document.querySelectorAll(
        '.formation__details-master'
      )) {
        each.classList.remove('comeIn');
      }
    }

    if (
      doc.scrollTop >= 1420 + adjustExpandedProjectsView &&
      doc.scrollTop <= 2000 + adjustExpandedProjectsView
    ) {
      document
        .querySelector('.formation__horizontarBar-adalab')
        .classList.add('comeIn');
      document
        .querySelector('.formation__title-adalab')
        .classList.add('comeIn');
    } else {
      document
        .querySelector('.formation__horizontarBar-adalab')
        .classList.remove('comeIn');
      document
        .querySelector('.formation__title-adalab')
        .classList.remove('comeIn');
    }
    console.log(doc.scrollTop);
  };

  render() {
    const { language } = this.state;
    const { texts } = this.props;

    return (
      <div className="App">
        <Header
          texts={texts[language].header}
          onChangeLanguage={this.onChangeLanguage}
        />
        <MainArea
          onChangeLanguage={this.onChangeLanguage}
          texts={texts[language]}
          closeLanguagePopup={this.closeLanguagePopup}
          doNotShowLanguagePopupAgain={this.state.doNotShowLanguagePopupAgain}
          handleAdjustExpandedProjectsView={
            this.handleAdjustExpandedProjectsView
          }
          userViewedAllComponents={this.userViewedAllComponents}
          viewedAll={this.state.viewedAll}
        />
      </div>
    );
  }
}
