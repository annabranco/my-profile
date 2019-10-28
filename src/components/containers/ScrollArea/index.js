import React, { Component, createRef } from 'react';
import { PropTypes } from 'prop-types';
import DeveloperProfile from '../DeveloperProfile';
import Seabed from '../Seabed';
import { InbetweenBar, Formation, MyInfoPage } from '../../views';
import { SHOW_ACTION, HIDE_ACTION } from '../../../constants';
import { textsPropType, projectsPropType } from '../../../types';

class ScrollArea extends Component {
  static propTypes = {
    texts: textsPropType.isRequired,
    projects: projectsPropType.isRequired,
    triggerThankYouMessage: PropTypes.func.isRequired,
    displayThanksMessage: PropTypes.bool.isRequired,
    languageModalIsVisible: PropTypes.bool.isRequired
  };

  scrollAreaRef = createRef();

  state = {
    adjustedSize: 0,
    developerActivation: {
      adalab: false,
      projects: false,
      skills: false
    },
    formationActivation: {
      psychology: false,
      ir: false,
      master: false,
      programming: false
    }
  };

  handleAdjustExpandedProjectsView = adjust =>
    this.setState({
      adjustedSize: adjust
    });

  toggleDynamicElements = (section, element, action) => {
    const key = `${section}Activation`;
    const result = action === SHOW_ACTION;
    this.setState(prevState => ({
      [key]: {
        ...prevState[key],
        [element]: result
      }
    }));
  };

  handleScroll = event => {
    const { adjustedSize } = this.state;
    const scrollPosition = event.target.scrollTop;

    if (scrollPosition) {
      // Toggle Developer section
      if (scrollPosition >= 350 && scrollPosition <= 1540) {
        this.toggleDynamicElements('developer', 'adalab', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('developer', 'adalab', HIDE_ACTION);
      }
      if (scrollPosition >= 500 && scrollPosition <= 1540 + adjustedSize) {
        this.toggleDynamicElements('developer', 'projects', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('developer', 'projects', HIDE_ACTION);
      }
      if (scrollPosition >= 450 && scrollPosition <= 1540 + adjustedSize) {
        this.toggleDynamicElements('developer', 'skills', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('developer', 'skills', HIDE_ACTION);
      }

      // Toggle Formation section
      if (
        scrollPosition >= 1050 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'psychology', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'psychology', HIDE_ACTION);
      }
      if (
        scrollPosition >= 1200 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'ir', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'ir', HIDE_ACTION);
      }
      if (
        scrollPosition >= 1320 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'master', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'master', HIDE_ACTION);
      }
      if (
        scrollPosition >= 1420 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'programming', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'programming', HIDE_ACTION);
      }
    }
  };

  resetScrollPosition = delay =>
    setTimeout(() => this.scrollAreaRef.current.scrollTo(0, 0), delay);

  render() {
    const { developerActivation, formationActivation } = this.state;
    const {
      texts,
      triggerThankYouMessage,
      displayThanksMessage,
      languageModalIsVisible,
      projects
    } = this.props;
    return (
      <section
        className={`scrollArea__container ${languageModalIsVisible &&
          'languageModalIsVisible'}`}
        onScroll={this.handleScroll}
        ref={this.scrollAreaRef}
      >
        <div className="main__intro">
          <MyInfoPage
            texts={texts.infoPage}
            displayThanksMessage={displayThanksMessage}
          />
        </div>
        <InbetweenBar title={texts.developer.title} />
        <DeveloperProfile
          texts={texts.developer}
          projects={projects}
          handleAdjustExpandedProjectsView={
            this.handleAdjustExpandedProjectsView
          }
          language={texts.languages.languageCode}
          developerActivation={developerActivation}
        />

        <InbetweenBar title={texts.formation.title} />
        <Formation
          texts={texts.formation}
          formationActivation={formationActivation}
        />

        <InbetweenBar title={texts.seabed.title} />
        <Seabed
          texts={texts.seabed}
          globalTexts={texts.global}
          textsExperiences={texts.experiences}
          textsOtherSkills={texts.otherSkills}
          triggerThankYouMessage={triggerThankYouMessage}
          resetScrollPosition={this.resetScrollPosition}
        />
      </section>
    );
  }
}

export default ScrollArea;
