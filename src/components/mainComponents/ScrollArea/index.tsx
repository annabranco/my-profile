import React, {
  Dispatch,
  ReactElement,
  SetStateAction,
  useCallback,
  useEffect,
  useRef
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bool, func } from 'prop-types';
import { IExperiencesType, ISectionsText } from '../../../types/interfaces';
import {
  currentSecionSelector,
  experiencesSelector,
  sectionsTextsSelector
} from '../../../redux/selectors';
import { changeSection } from '../../../redux/actions/sections';
import { isDesktop } from '../../../utils/device';
import { useStateWithLabel } from '../../../utils/hooks';
import { getNextSection, getPreviousSection } from '../../../utils/sections';
import SwipeInstructions from '../../elements/SwipeInstructions';
import Experiences from '../../sections/Experiences';
import Formation from '../../sections/Formation';
import MyInfoPage from '../../sections/MyInfoPage';
import Projects from '../../sections/Projects';
import ScrollSection from './ScrollSection';
import Seabed from '../../sections/Seabed';
import Skills from '../../sections/Skills';
import OtherSkillsInfo from '../../sections/OtherSkills/OtherSkillsInfo';
import {
  ACTIVE_SECTION,
  BACK_ACTION,
  CUEPOINTS,
  EXPERIENCES,
  EXPERIENCES_SECTION,
  FORMATION_SECTION,
  INFO_PAGE_SECTION,
  OTHER_INFO_SECTION,
  PROJECTS,
  PROJECTS_SECTION,
  SEABED_AREA,
  SEABED_SECTION,
  SHOW_INSTRUCTIONS,
  SKILLS_FIRST_ROW,
  SKILLS_SECOND_ROW,
  SKILLS_SECTION,
  SKILLS_THIRD_ROW
} from '../../../constants';
import {
  ArrowIcon,
  LineOfArrows,
  MoreText,
  ScrollDownDisplay
} from '../../sections/MyInfoPage/styles';
import { ScrollAreaWrapper } from './styles';

const SCROLL_CUEPOINTS: Map<number, string> = new Map();
let touchEvent = 0;

declare global {
  interface Window {
    _debug: boolean;
  }
}

interface Props {
  isSeabedElementOpened: boolean;
  langModalVisible: boolean;
  openSeabedElement: Dispatch<SetStateAction<boolean>>;
}

const ScrollArea = ({
  isSeabedElementOpened,
  langModalVisible,
  openSeabedElement
}: Props): ReactElement => {
  const experiences: IExperiencesType[] = useSelector(experiencesSelector);
  const sectionsTexts: ISectionsText = useSelector(sectionsTextsSelector);
  const currentSection: string = useSelector(currentSecionSelector);

  const [cuePointsActivated, updateCuepoints] = useStateWithLabel<Set<string>>(
    new Set(),
    CUEPOINTS
  );
  const [activeSection, changeActiveSection] = useStateWithLabel<string>(
    INFO_PAGE_SECTION,
    ACTIVE_SECTION
  );
  const [showInstructions, toggleInstructions] = useStateWithLabel<boolean>(
    true,
    SHOW_INSTRUCTIONS
  );

  const dispatch = useDispatch();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const touchActive = useRef<boolean>(false);

  const SECTIONS_INTERVAL_POINTS = {
    skills: {
      scrollAreaStart: 200,
      scrollAreaEnd: 1200
    },
    projects: {
      scrollAreaStart: 1000,
      scrollAreaEnd: 2000
    },
    experiences: {
      scrollAreaStart: 1400,
      scrollAreaEnd: 2100
    },
    seabed: {
      scrollAreaStart: 2600
    }
  };

  const experiencesSectionIds = new Set();

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const target = event.target as HTMLElement;
    const scrollPosition = target.scrollTop;
    const cuePointsAfterScrolling = new Set(cuePointsActivated);

    // eslint-disable-next-line no-underscore-dangle
    if (window._debug) {
      console.debug('scrollPosition', scrollPosition); // eslint-disable-line no-console
      console.debug('cuePointsActivated', cuePointsActivated); // eslint-disable-line no-console
    }

    SCROLL_CUEPOINTS.forEach((cuePointName, cuePoint) => {
      if (scrollPosition < cuePoint) {
        cuePointsAfterScrolling.delete(cuePointName);
      } else if (scrollPosition >= Number(cuePoint)) {
        if (cuePointName === EXPERIENCES) {
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

  const resetScrollPosition = (delay: number): void => {
    const scrollArea = scrollAreaRef.current as HTMLDivElement;
    setTimeout(() => scrollArea.scrollTo(0, 0), delay);
  };

  const goToNextSection = useCallback(
    (type?: string): void => {
      if (type === BACK_ACTION) {
        dispatch(changeSection(getPreviousSection(currentSection)));
        changeActiveSection(getPreviousSection(currentSection));
      } else {
        dispatch(changeSection(getNextSection(currentSection)));
        changeActiveSection(getNextSection(currentSection));
      }
    },
    [dispatch, currentSection, changeActiveSection]
  );

  const handleTouchStart = useCallback((event: TouchEvent): void => {
    const xCoord: number = event.changedTouches[0].screenX;
    touchEvent = xCoord;
  }, []);

  const handleTouchEnd = useCallback(
    (event: TouchEvent): void => {
      const xCoord: number = event.changedTouches[0].screenX;
      const difference: number = touchEvent - xCoord;

      if (difference >= 100) {
        if (showInstructions && !langModalVisible) {
          event.stopPropagation();
          toggleInstructions(false);
          return;
        }
        goToNextSection();
      } else if (difference <= -100) {
        if (showInstructions && !langModalVisible) {
          event.stopPropagation();
          toggleInstructions(false);
          return;
        }
        goToNextSection(BACK_ACTION);
      }
      setTimeout(() => {
        touchEvent = 0;
      }, 1000);
    },
    [showInstructions, langModalVisible, goToNextSection, toggleInstructions]
  );

  const getNextSectionName = (): string =>
    sectionsTexts[getNextSection(currentSection)];

  useEffect(() => {
    const calculateSkillsScroll = (): void => {
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

    const calculateExperiencesScroll = (): void => {
      const NUMBER_OF_EXPERIENCES_DISPLAYED: number = experiences.length;
      const {
        scrollAreaStart,
        scrollAreaEnd
      }: {
        scrollAreaStart: number;
        scrollAreaEnd: number;
      } = SECTIONS_INTERVAL_POINTS.experiences;
      const intervalWindowForEachExperience: number =
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
      SCROLL_CUEPOINTS.set(scrollAreaEnd, EXPERIENCES);
    };

    const calculateProjectsScroll = () => {
      SCROLL_CUEPOINTS.set(
        SECTIONS_INTERVAL_POINTS.projects.scrollAreaStart,
        PROJECTS
      );
    };

    const calculateSeabedScroll = () => {
      SCROLL_CUEPOINTS.set(
        SECTIONS_INTERVAL_POINTS.seabed.scrollAreaStart,
        SEABED_AREA
      );
    };

    calculateSkillsScroll();
    calculateProjectsScroll();
    calculateExperiencesScroll();
    calculateSeabedScroll();
  }, [SECTIONS_INTERVAL_POINTS, experiences, experiencesSectionIds]);

  useEffect(() => {
    if (!isDesktop && activeSection === SKILLS_SECTION) {
      const allCuePoints: string[] = [
        SKILLS_FIRST_ROW,
        SKILLS_SECOND_ROW,
        SKILLS_THIRD_ROW
      ];
      updateCuepoints(new Set(allCuePoints));
    } else if (!isDesktop && activeSection === EXPERIENCES_SECTION) {
      const allCuePoints: string[] = [];
      let currentExperience = 0;

      const addNextExperience = (): void => {
        if (currentExperience === experiences.length - 1) {
          return;
        }
        allCuePoints.push(experiences[currentExperience].id);
        updateCuepoints(new Set(allCuePoints));
        currentExperience += 1;

        setTimeout(() => {
          addNextExperience();
        }, 50);
      };
      addNextExperience();
    }
  }, [activeSection, experiences, updateCuepoints]);

  useEffect(() => {
    if (!isDesktop && !touchActive.current) {
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
      touchActive.current = true;
    }
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      touchActive.current = false;
    };
  }, [handleTouchStart, handleTouchEnd]);

  return (
    <ScrollAreaWrapper
      isSeabedElementOpened={isSeabedElementOpened}
      langModalVisible={langModalVisible}
      onScroll={handleScroll}
      ref={scrollAreaRef}
    >
      {!isDesktop && showInstructions && (
        <SwipeInstructions onCloseInstructions={toggleInstructions} />
      )}

      {(isDesktop || activeSection === INFO_PAGE_SECTION) && <MyInfoPage />}

      {(isDesktop || activeSection === SKILLS_SECTION) && (
        <ScrollSection title={sectionsTexts.technical}>
          <Skills cuePointsActivated={cuePointsActivated} />
        </ScrollSection>
      )}

      {(isDesktop || activeSection === PROJECTS_SECTION) && (
        <ScrollSection title={sectionsTexts.projects}>
          <Projects cuePointsActivated={cuePointsActivated} />
        </ScrollSection>
      )}

      {(isDesktop || activeSection === EXPERIENCES_SECTION) && (
        <ScrollSection title={sectionsTexts.experience}>
          <Experiences cuePointsActivated={cuePointsActivated} />
        </ScrollSection>
      )}

      {(isDesktop || activeSection === SEABED_SECTION) && (
        <ScrollSection title={sectionsTexts.other}>
          <Seabed
            cuePointsActivated={cuePointsActivated}
            openSeabedElement={openSeabedElement}
            resetScrollPosition={resetScrollPosition}
          />
        </ScrollSection>
      )}

      {!isDesktop && activeSection === FORMATION_SECTION && (
        <ScrollSection title={sectionsTexts.other}>
          <Formation status={{ active: true, read: true, visible: true }} />
        </ScrollSection>
      )}

      {!isDesktop && activeSection === OTHER_INFO_SECTION && (
        <ScrollSection title={sectionsTexts.other}>
          <OtherSkillsInfo visible />
        </ScrollSection>
      )}

      {!isDesktop && (
        <ScrollDownDisplay sections>
          <MoreText onClick={() => goToNextSection()}>
            {getNextSectionName()}
          </MoreText>
          <LineOfArrows>
            <ArrowIcon
              className="fas fa-angle-double-down"
              goBack={activeSection === OTHER_INFO_SECTION}
              sections
            />
          </LineOfArrows>
        </ScrollDownDisplay>
      )}
    </ScrollAreaWrapper>
  );
};

ScrollArea.propTypes = {
  langModalVisible: bool.isRequired,
  isSeabedElementOpened: bool.isRequired,
  openSeabedElement: func.isRequired
};

export default ScrollArea;
