import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { bool } from 'prop-types';
import Experiences from '../Experiences';
import MyInfoPage from '../MyInfoPage';
import Projects from '../Projects';
import ScrollSection from '../ScrollSection';
import Skills from '../Skills';
import Seabed from '../Seabed';
import {
  experiencesSelector,
  secionsTextsSelector
} from '../../redux/selectors';
import { useStateWithLabel } from '../../utils/hooks';
import {
  ADJUST_SCROLL,
  CUEPOINTS,
  SKILLS_FIRST_ROW,
  SKILLS_SECOND_ROW,
  SKILLS_THIRD_ROW
} from '../../constants';
import { ScrollAreaWrapper } from './styles';

const SCROLL_CUEPOINTS = new Map();

const ScrollArea = ({ langModalVisible }) => {
  const experiences = useSelector(experiencesSelector);
  const sectionsTexts = useSelector(secionsTextsSelector);

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
      scrollAreaStart: 1400 + adjustScroll,
      scrollAreaEnd: 2100 + adjustScroll
    }
  };

  const experiencesSectionIds = new Set();

  const handleScroll = event => {
    const scrollPosition = event.target.scrollTop;
    const cuePointsAfterScrolling = new Set(cuePointsActivated);

    // eslint-disable-next-line no-underscore-dangle
    if (window._debug) {
      console.log('$$$ scrollPosition', scrollPosition); // eslint-disable-line no-console
      console.log('$$$ cuePointsActivated', cuePointsActivated); // eslint-disable-line no-console
    }

    SCROLL_CUEPOINTS.forEach((cuePointName, cuePoint) => {
      if (scrollPosition < cuePoint) {
        cuePointsAfterScrolling.delete(cuePointName);
      } else if (scrollPosition >= Number(cuePoint)) {
        if (cuePointName === 'experiencesSection') {
          // Makes experiences also go out when scrolling down
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
      <MyInfoPage />
      <ScrollSection title={sectionsTexts.technical}>
        <Skills cuePointsActivated={cuePointsActivated} />
      </ScrollSection>

      <ScrollSection title={sectionsTexts.projects}>
        <Projects adjustScrollAfterThumbnails={adjustScrollAfterThumbnails} />
      </ScrollSection>

      <ScrollSection title={sectionsTexts.experience}>
        <Experiences cuePointsActivated={cuePointsActivated} />
      </ScrollSection>

      <ScrollSection title={sectionsTexts.other}>
        <Seabed resetScrollPosition={resetScrollPosition} />
      </ScrollSection>
    </ScrollAreaWrapper>
  );
};

ScrollArea.propTypes = {
  langModalVisible: bool.isRequired
};

export default ScrollArea;
