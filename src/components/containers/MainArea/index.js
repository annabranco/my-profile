import React, { Component } from 'react';
import { ScrollArea } from '../';
import { MyInfoPage, LanguagesModal } from '../../views';

export class MainArea extends Component {
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
      handleAdjustExpandedProjectsView,
      texts,
      userViewedAllComponents,
      viewedAll
    } = this.props;

    return (
      <main className="main__outer">
        <div className="main__intro">
          <MyInfoPage texts={texts.infoPage} viewedAll={viewedAll} />
        </div>

        <ScrollArea
          texts={texts}
          handleAdjustExpandedProjectsView={handleAdjustExpandedProjectsView}
          userViewedAllComponents={userViewedAllComponents}
        />

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
      </main>
    );
  }
}
