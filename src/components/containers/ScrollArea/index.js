import React, { Component, createRef } from 'react';
import { PropTypes } from 'prop-types';
import DeveloperProfile from '../DeveloperProfile';
import Seabed from '../Seabed';
import { InbetweenBar, Experiences, MyInfoPage } from '../../views';
import {
  textsPropType,
  projectsPropType,
  skillGroupsPropType,
  formationPropType,
  experiencesPropType
} from '../../../types';
import { ScrollAreaWrapper } from './styles';

class ScrollArea extends Component {
  static propTypes = {
    texts: textsPropType.isRequired,
    projects: PropTypes.arrayOf(projectsPropType).isRequired,
    skills: PropTypes.arrayOf(skillGroupsPropType).isRequired,
    experiences: PropTypes.arrayOf(experiencesPropType).isRequired,
    formation: PropTypes.arrayOf(formationPropType).isRequired,
    triggerThankYouMessage: PropTypes.func.isRequired,
    displayThanksMessage: PropTypes.bool.isRequired,
    languageModalIsVisible: PropTypes.bool.isRequired
  };

  scrollAreaRef = createRef();

  state = {
    cuePointsActivated: new Set()
  };

  SECTIONS_INTERVAL_POINTS = {
    developer: {
      scrollAreaStart: 350,
      scrollAreaEnd: 1540
    },
    experiences: {
      scrollAreaStart: 900,
      scrollAreaEnd: 1900
    }
  };

  SCROLL_CUEPOINTS = {};

  experiencesSectionIds = new Set();

  cuePointsActivated = new Set();

  componentDidMount() {
    this.calculateExperiencesScroll();
  }

  // handleAdjustExpandedProjectsView = adjust =>
  //   this.setState({
  //     adjustedSize: adjust
  //   });

  // toggleDynamicElements = (section, element, action) => {
  //   const key = `${section}Activation`;
  //   const result = action === SHOW_ACTION;
  //   this.setState(prevState => ({
  //     [key]: {
  //       ...prevState[key],
  //       [element]: result
  //     }
  //   }));
  // };

  calculateExperiencesScroll = () => {
    const { experiences } = this.props;
    const NUMBER_OF_EXPERIENCES_DISPLAYED = experiences.length;
    const {
      scrollAreaStart,
      scrollAreaEnd
    } = this.SECTIONS_INTERVAL_POINTS.experiences;
    const intervalWindowForEachExperience =
      (scrollAreaEnd - scrollAreaStart) / NUMBER_OF_EXPERIENCES_DISPLAYED;
    let index = 0;

    for (
      let position = scrollAreaStart;
      position < scrollAreaEnd;
      position += intervalWindowForEachExperience
    ) {
      this.SCROLL_CUEPOINTS = {
        ...this.SCROLL_CUEPOINTS,
        [position]: experiences[index].id
      };
      this.experiencesSectionIds.add(experiences[index].id);
      index += 1;
    }
    this.SCROLL_CUEPOINTS = {
      ...this.SCROLL_CUEPOINTS,
      [scrollAreaEnd]: 'experiencesSection'
    };
  };

  handleScroll = event => {
    const { cuePointsActivated } = this.state;
    const scrollPosition = event.target.scrollTop;
    const cuePointsActivatedBeforeScrolling = [...cuePointsActivated].join(' ');
    const cuePointsActivatedAfterScrolling = cuePointsActivated;

    console.log('$$$ scrollPosition', scrollPosition);

    Object.keys(this.SCROLL_CUEPOINTS).forEach(cuePoint => {
      if (scrollPosition < Number(cuePoint)) {
        cuePointsActivatedAfterScrolling.delete(
          this.SCROLL_CUEPOINTS[cuePoint]
        );
      } else if (scrollPosition >= Number(cuePoint)) {
        if (this.SCROLL_CUEPOINTS[cuePoint] === 'experiencesSection') {
          this.experiencesSectionIds.forEach(experienceCuePoint => {
            cuePointsActivatedAfterScrolling.delete(experienceCuePoint);
          });
        } else {
          cuePointsActivatedAfterScrolling.add(this.SCROLL_CUEPOINTS[cuePoint]);
        }
      }
    });

    // Checks if activated cuepoints have changed before updating state
    if (
      (cuePointsActivatedBeforeScrolling !== '' ||
        [...cuePointsActivatedAfterScrolling].join(' ') !== 0) &&
      cuePointsActivatedBeforeScrolling !==
        [...cuePointsActivatedAfterScrolling].join(' ')
    ) {
      this.setState({ cuePointsActivated: cuePointsActivatedAfterScrolling });
    }
    // if (scrollPosition) {
    //   // Toggle Developer section
    //   if (scrollPosition >= 350 && scrollPosition <= 1540) {
    //     this.toggleDynamicElements('developer', 'adalab', SHOW_ACTION);
    //   } else {
    //     this.toggleDynamicElements('developer', 'adalab', HIDE_ACTION);
    //   }
    //   if (scrollPosition >= 500 && scrollPosition <= 1540 + adjustedSize) {
    //     this.toggleDynamicElements('developer', 'projects', SHOW_ACTION);
    //   } else {
    //     this.toggleDynamicElements('developer', 'projects', HIDE_ACTION);
    //   }
    //   if (scrollPosition >= 450 && scrollPosition <= 1540 + adjustedSize) {
    //     this.toggleDynamicElements('developer', 'skills', SHOW_ACTION);
    //   } else {
    //     this.toggleDynamicElements('developer', 'skills', HIDE_ACTION);
    //   }
  };

  resetScrollPosition = delay =>
    setTimeout(() => this.scrollAreaRef.current.scrollTo(0, 0), delay);

  render() {
    const { cuePointsActivated } = this.state;
    const {
      texts,
      triggerThankYouMessage,
      displayThanksMessage,
      languageModalIsVisible,
      projects,
      skills,
      formation,
      experiences
    } = this.props;

    return (
      <ScrollAreaWrapper
        languageModalIsVisible={languageModalIsVisible}
        onScroll={this.handleScroll}
        ref={this.scrollAreaRef}
      >
        <MyInfoPage
          texts={texts.infoPage}
          displayThanksMessage={displayThanksMessage}
        />
        <InbetweenBar title={texts.sections.technical} />
        <DeveloperProfile
          texts={texts.developer}
          projects={projects}
          skills={skills}
          handleAdjustExpandedProjectsView={
            this.handleAdjustExpandedProjectsView
          }
          language={texts.languages.languageCode}
          cuePointsActivated={[...cuePointsActivated]}
        />

        <InbetweenBar title={texts.sections.experience} />
        <Experiences
          texts={texts.global}
          experiences={experiences}
          language={texts.languages.languageCode}
          cuePointsActivated={[...cuePointsActivated]}
        />

        <InbetweenBar title={texts.sections.other} />
        <Seabed
          texts={texts.seabed}
          globalTexts={texts.global}
          formation={formation}
          textsOtherSkills={texts.otherSkills}
          triggerThankYouMessage={triggerThankYouMessage}
          resetScrollPosition={this.resetScrollPosition}
        />
      </ScrollAreaWrapper>
    );
  }
}

export default ScrollArea;
