import React, { useEffect, useRef } from 'react';
import { arrayOf, bool, func } from 'prop-types';
import Seabed from '../Seabed';
import Projects from '../Projects';
import { useStateWithLabel } from '../../../utils/hooks';
import { Experiences, MyInfoPage, ScrollSection, Skills } from '../../views';
import {
  ADJUST_SCROLL,
  CUEPOINTS,
  SKILLS_FIRST_ROW,
  SKILLS_SECOND_ROW,
  SKILLS_THIRD_ROW
} from '../../../constants';
import { ScrollAreaWrapper } from './styles';
import {
  experiencesTextPropType,
  formationPropType,
  projectsPropType,
  skillGroupsPropType,
  textsPropType
} from '../../../types';

const SCROLL_CUEPOINTS = new Map();

const ScrollArea = ({
  displayThanks,
  experiences,
  formation,
  langModalVisible,
  projects,
  skills,
  texts,
  triggerThankYouMessage
}) => {
  const [adjustScroll, changeAdjust] = useStateWithLabel(0, ADJUST_SCROLL);
  const [cuePointsActivated, updateCuepoints] = useStateWithLabel(
    new Set(),
    CUEPOINTS
  );
  const scrollAreaRef = useRef();

  const SECTIONS_INTERVAL_POINTS = {
    skills: {
      scrollAreaStart: 200,
      scrollAreaEnd: 1200
    },
    experiences: {
      scrollAreaStart: 1300 + adjustScroll,
      scrollAreaEnd: 2000 + adjustScroll
    }
  };

  const experiencesSectionIds = new Set();

  const handleScroll = event => {
    const scrollPosition = event.target.scrollTop;
    const cuePointsAfterScrolling = new Set(cuePointsActivated);

    // eslint-disable-next-line no-underscore-dangle
    if (window._debug) {
      console.log('$$$ scrollPosition', scrollPosition);
      console.log('$$$ cuePointsActivated', cuePointsActivated);
    }

    SCROLL_CUEPOINTS.forEach((cuePointName, cuePoint) => {
      if (scrollPosition < cuePoint) {
        cuePointsAfterScrolling.delete(cuePointName);
      } else if (scrollPosition >= Number(cuePoint)) {
        if (cuePointName === 'experiencesSection') {
          // --- Makes experiences also go out when scrolling down
          //     experiencesSectionIds.forEach(experienceCuePoint => {
          //       cuePointsAfterScrolling.delete(experienceCuePoint);
        } else {
          cuePointsAfterScrolling.add(cuePointName);
        }
      }
    });
    // Prevents updating if cuepoints haven't changed
    if (cuePointsActivated.size !== cuePointsAfterScrolling.size) {
      updateCuepoints(new Set(cuePointsAfterScrolling));
    }
  };

  const resetScrollPosition = delay =>
    setTimeout(() => scrollAreaRef.current.scrollTo(0, 0), delay);

  const adjustScrollAfterThumbnails = adjustment => {
    changeAdjust(adjustment);
  };

  useEffect(() => {
    const calculateSkillsScroll = () => {
      SCROLL_CUEPOINTS.set(
        SECTIONS_INTERVAL_POINTS.skills.scrollAreaStart,
        SKILLS_FIRST_ROW
      );
      SCROLL_CUEPOINTS.set(
        SECTIONS_INTERVAL_POINTS.skills.scrollAreaStart + 300,
        SKILLS_SECOND_ROW
      );

      SCROLL_CUEPOINTS.set(
        SECTIONS_INTERVAL_POINTS.skills.scrollAreaStart + 400,
        SKILLS_THIRD_ROW
      );
    };

    const calculateExperiencesScroll = () => {
      const NUMBER_OF_EXPERIENCES_DISPLAYED = experiences.length;
      const {
        scrollAreaStart,
        scrollAreaEnd
      } = SECTIONS_INTERVAL_POINTS.experiences;
      const intervalWindowForEachExperience =
        (scrollAreaEnd - scrollAreaStart) / NUMBER_OF_EXPERIENCES_DISPLAYED;
      let index = 0;

      for (
        let position = scrollAreaStart;
        position < scrollAreaEnd;
        position += intervalWindowForEachExperience
      ) {
        SCROLL_CUEPOINTS.set(Math.floor(position), experiences[index].id);
        experiencesSectionIds.add(experiences[index].id);
        index += 1;
      }
      SCROLL_CUEPOINTS.set(scrollAreaEnd, 'experiencesSection');
    };

    calculateSkillsScroll();
    calculateExperiencesScroll();
  }, [SECTIONS_INTERVAL_POINTS, experiences, experiencesSectionIds]);

  return (
    <ScrollAreaWrapper
      langModalVisible={langModalVisible}
      onScroll={handleScroll}
      ref={scrollAreaRef}
    >
      <MyInfoPage displayThanks={displayThanks} texts={texts.infoPage} />
      <ScrollSection title={texts.sections.technical}>
        <Skills cuePointsActivated={cuePointsActivated} skills={skills} />
      </ScrollSection>

      <ScrollSection title={texts.sections.projects}>
        <Projects
          adjustScrollAfterThumbnails={adjustScrollAfterThumbnails}
          language={texts.languages.languageCode}
          projects={projects}
          texts={texts.developer}
        />
      </ScrollSection>

      <ScrollSection title={texts.sections.experience}>
        <Experiences
          cuePointsActivated={cuePointsActivated}
          experiences={experiences}
          language={texts.languages.languageCode}
          texts={texts.global}
        />
      </ScrollSection>

      <ScrollSection title={texts.sections.other}>
        <Seabed
          formation={formation}
          globalTexts={texts.global}
          language={texts.languages.languageCode}
          resetScrollPosition={resetScrollPosition}
          texts={texts.seabed}
          textsOtherSkills={texts.otherSkills}
          triggerThankYouMessage={triggerThankYouMessage}
        />
      </ScrollSection>
    </ScrollAreaWrapper>
  );
};

ScrollArea.propTypes = {
  displayThanks: bool.isRequired,
  experiences: arrayOf(experiencesTextPropType).isRequired,
  formation: arrayOf(formationPropType).isRequired,
  langModalVisible: bool.isRequired,
  projects: arrayOf(projectsPropType).isRequired,
  skills: arrayOf(skillGroupsPropType).isRequired,
  texts: textsPropType.isRequired,
  triggerThankYouMessage: func.isRequired
};

export default ScrollArea;
