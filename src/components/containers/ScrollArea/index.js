import React, { Component, createRef } from 'react';
import { arrayOf, func, bool } from 'prop-types';
import Seabed from '../Seabed';
import Projects from '../Projects';

import { ScrollSection, Experiences, MyInfoPage, Skills } from '../../views';
import {
  textsPropType,
  projectsPropType,
  skillGroupsPropType,
  formationPropType,
  experiencesPropType
} from '../../../types';
import { ScrollAreaWrapper } from './styles';
import {
  SKILLS_FIRST_ROW,
  SKILLS_SECOND_ROW,
  SKILLS_THIRD_ROW
} from '../../views/Skills';

class ScrollArea extends Component {
  static propTypes = {
    texts: textsPropType.isRequired,
    projects: arrayOf(projectsPropType).isRequired,
    skills: arrayOf(skillGroupsPropType).isRequired,
    experiences: arrayOf(experiencesPropType).isRequired,
    formation: arrayOf(formationPropType).isRequired,
    triggerThankYouMessage: func.isRequired,
    displayThanksMessage: bool.isRequired,
    languageModalIsVisible: bool.isRequired
  };

  scrollAreaRef = createRef();

  state = {
    cuePointsActivated: new Set(),
    adjustScroll: 0
  };

  SECTIONS_INTERVAL_POINTS = {
    skills: {
      scrollAreaStart: 200,
      scrollAreaEnd: 1200
    },
    experiences: {
      scrollAreaStart: 1300 + this.state.adjustScroll,
      scrollAreaEnd: 2000 + this.state.adjustScroll
    }
  };

  SCROLL_CUEPOINTS = {};

  experiencesSectionIds = new Set();

  cuePointsActivated = new Set();

  componentDidMount() {
    this.calculateExperiencesScroll();
    this.calculateSkillsScroll();
  }

  calculateSkillsScroll = () => {
    this.SCROLL_CUEPOINTS[
      this.SECTIONS_INTERVAL_POINTS.skills.scrollAreaStart
    ] = SKILLS_FIRST_ROW;
    this.SCROLL_CUEPOINTS[
      this.SECTIONS_INTERVAL_POINTS.skills.scrollAreaStart + 300
    ] = SKILLS_SECOND_ROW;
    this.SCROLL_CUEPOINTS[
      this.SECTIONS_INTERVAL_POINTS.skills.scrollAreaStart + 400
    ] = SKILLS_THIRD_ROW;
  };

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
    const cuePointsActivatedBeforeScrolling = [...cuePointsActivated].join(' '); // debug
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

  adjustScrollAfterThumbnails = adjustment => {
    console.log('$$$ adjustment', adjustment);
    this.setState({ adjustScroll: adjustment });
  };

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
        <ScrollSection title={texts.sections.technical}>
          <Skills
            skills={skills}
            cuePointsActivated={[...cuePointsActivated]}
          />
        </ScrollSection>

        <ScrollSection title={texts.sections.projects}>
          <Projects
            texts={texts.developer}
            projects={projects}
            skills={skills}
            language={texts.languages.languageCode}
            adjustScrollAfterThumbnails={this.adjustScrollAfterThumbnails}
            cuePointsActivated={[...cuePointsActivated]}
          />
        </ScrollSection>

        <ScrollSection title={texts.sections.experience}>
          <Experiences
            texts={texts.global}
            experiences={experiences}
            language={texts.languages.languageCode}
            cuePointsActivated={[...cuePointsActivated]}
          />
        </ScrollSection>

        <ScrollSection title={texts.sections.other}>
          <Seabed
            texts={texts.seabed}
            globalTexts={texts.global}
            formation={formation}
            textsOtherSkills={texts.otherSkills}
            triggerThankYouMessage={triggerThankYouMessage}
            resetScrollPosition={this.resetScrollPosition}
            language={texts.languages.languageCode}
          />
        </ScrollSection>
      </ScrollAreaWrapper>
    );
  }
}

export default ScrollArea;
