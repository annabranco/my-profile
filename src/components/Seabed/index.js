/* eslint-disable no-use-before-define */

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { func } from 'prop-types';
import Formation from '../Formation';
import OtherSkills from '../OtherSkills';
import { seabedTextsSelector } from '../../redux/selectors';
import { triggerFinishScenario } from '../../redux/actions/finishedScenario';
import { useStateWithLabel } from '../../utils/hooks';
import { isDesktop } from '../../utils/device';
import {
  FloatingLeft,
  FloatingRight,
  SwimmingLeft,
  SwimmingRight
} from '../../images';
import {
  FINISHED,
  FORMATION,
  INSTRUCTIONS,
  MOVEMENTS,
  OTHER_SKILLS,
  POSITION,
  THINKING
} from '../../constants';
import {
  FloorText,
  GoBackText,
  HeroImage,
  Message,
  MessageContainer,
  MessageOnMobileDevices,
  SeabedFloor,
  SeabedSection,
  SubsectionFormation,
  SubsectionOtherSkills,
  Text,
  ThinkingText
} from './styles';

let HERO;
let floatLeft;
let floatRight;

const SeaBed = ({ resetScrollPosition }) => {
  const texts = useSelector(seabedTextsSelector);
  const dispatch = useDispatch();

  const [formationState, changeFormationState] = useStateWithLabel(
    {
      active: false,
      read: false,
      visible: false
    },
    FORMATION
  );
  const [heroMovements, changeHeroMovements] = useStateWithLabel(
    {
      isGoingUp: false,
      isSwimming: false
    },
    MOVEMENTS
  );
  const [instructionsHidden, hideInstructions] = useStateWithLabel(
    false,
    INSTRUCTIONS
  );
  const [otherSkillsState, changeOtherSkillsState] = useStateWithLabel(
    {
      active: false,
      read: false,
      visible: false
    },
    OTHER_SKILLS
  );
  const [positionState, changePositionState] = useStateWithLabel(
    {
      frame: 'center',
      position: 'initial'
    },
    POSITION
  );
  const [scenarioHasFinished, finishScenario] = useStateWithLabel(
    false,
    FINISHED
  );
  const [thinkingState, changeThinkingState] = useStateWithLabel(
    {
      side: undefined,
      thoughts: -1
    },
    THINKING
  );
  const HeroRef = useRef();

  // ======== Handle view components (Formation and Other Skills)

  const onClickLinkOnMobile = link => {
    if (link === 'formationSection') {
      return changeFormationState({
        active: true,
        visible: true,
        read: true
      });
    }
    if (link === 'otherSkillsSection') {
      return changeOtherSkillsState({
        active: true,
        visible: true,
        read: true
      });
    }
    return null;
  };

  const onClickOpen = type => {
    if (type === 'formationSection' && !formationState.visible) {
      return changeFormationState({
        active: true,
        read: true,
        visible: true
      });
    }
    if (type === 'otherSkillsSection' && !otherSkillsState.visible) {
      return changeOtherSkillsState({
        active: true,
        read: true,
        visible: true
      });
    }
    return null;
  };

  const onClickClose = type => {
    if (type === 'formationSection' && formationState.visible) {
      changeFormationState(prevState => ({
        active: isDesktop ? prevState.active : false,
        read: true,
        visible: false
      }));
    } else if (type === 'otherSkillsSection' && otherSkillsState.visible) {
      changeOtherSkillsState(prevState => ({
        active: isDesktop ? prevState.active : false,
        read: true,
        visible: false
      }));
    }
    if (formationState.read && otherSkillsState.read && isDesktop) {
      finishScenario(true);
    }
    // -- Triggers thank you message on first screen
    dispatch(triggerFinishScenario());
  };

  const resetInitialState = () => {
    changePositionState({
      frame: 'center',
      position: 'initial'
    });
    changeThinkingState({
      side: undefined,
      thoughts: -1
    });
    changeHeroMovements({
      isGoingUp: false,
      isSwimming: false
    });
    changeFormationState({
      active: false,
      read: false,
      visible: false
    });
    changeOtherSkillsState({
      active: false,
      read: false,
      visible: false
    });
    hideInstructions(false);
    finishScenario(false);
  };

  // ======== Handle base HERO movements

  const moveHero = event => {
    const DISPLACEMENT = 250;
    let floatingImage;
    let newMovement;
    let swimmingImage;

    if (event.key === 'ArrowRight') {
      // ---- Prevents movement beyond right margin on frame 'right'
      if (
        positionState.frame === 'right' &&
        positionState.position === 'on-the-right'
      ) {
        return onReachBorder('on-right');
      }
      floatingImage = FloatingRight;
      swimmingImage = SwimmingRight;
      newMovement = `${Number(HERO.style.left.slice(0, -2)) + DISPLACEMENT}px`;
    } else if (event.key === 'ArrowLeft') {
      // ---- Prevents movement beyond left margin on frame 'left'
      if (
        positionState.frame === 'left' &&
        positionState.position === 'on-the-left'
      ) {
        return onReachBorder('on-left');
      }
      swimmingImage = SwimmingLeft;
      floatingImage = FloatingLeft;
      newMovement = `${Number(HERO.style.left.slice(0, -2)) - DISPLACEMENT}px`;
    }
    changeThinkingState(prevState => ({
      ...prevState,
      side: undefined
    }));
    clearTimeout(floatRight);
    clearTimeout(floatLeft);
    HERO.src = swimmingImage;
    HERO.style.left = newMovement;
    changeHeroMovements({
      isGoingUp: false,
      isSwimming: true
    });
    floatRight = setTimeout(() => {
      HERO.src = floatingImage;
      changeHeroMovements({
        isGoingUp: false,
        isSwimming: false
      });
    }, 3000);
    return heroHasMoved();
  };

  // ======= Function that fires events when HERO reaches some specific places

  const heroHasMoved = () => {
    // ---- WHEN the HERO has viewed all components (Formation and OtherSkills), he goes up
    if (
      formationState.read &&
      !formationState.active &&
      otherSkillsState.read &&
      !otherSkillsState.active &&
      positionState.frame === 'center'
    ) {
      goBackUp();
    }

    // ---- Highlights the text "Formation" when hero swims over it
    if (Number(HERO.style.left.slice(0, -2)) >= window.innerWidth - 400) {
      changePositionState(prevState => ({
        ...prevState,
        position: 'on-the-right'
      }));

      // ---- Highlights the text "Other Skills" when hero swims over it
    } else if (Number(HERO.style.left.slice(0, -2)) <= 200) {
      changePositionState(prevState => ({
        ...prevState,
        position: 'on-the-left'
      }));

      // ---- Clear highlights
    } else if (positionState.position !== 'center') {
      changePositionState(prevState => ({
        ...prevState,
        position: 'center'
      }));
    }

    // ======== WHEN the HERO crosses the RIGHT border of the screen
    if (Number(HERO.style.left.slice(0, -2)) >= window.innerWidth - 50) {
      hideInstructions(true);

      HERO.style.transition = 'none';
      HERO.style.left = '-30px';
      setTimeout(() => {
        HERO.style.transition = 'all ease 1s';
      }, 10);

      // ---- If HERO is coming from frame "left" (OtherSkills) sets scenario to "center"
      if (positionState.frame === 'left') {
        changePositionState({ frame: 'center', position: 'on-the-left' });
        changeOtherSkillsState(prevState => ({ ...prevState, active: false }));

        // ---- If HERO is coming from frame "center" (basic Seabed) sets scenario to "right" (Formation)
      } else if (positionState.frame === 'center') {
        changePositionState({ frame: 'right', position: 'on-the-left' });
        changeFormationState(prevState => ({ ...prevState, active: true }));
      }
    }

    // ======== WHEN the HERO crosses the LEFT border of the screen
    if (Number(HERO.style.left.slice(0, -2)) <= -200) {
      hideInstructions(true);

      HERO.style.transition = 'none';
      HERO.style.left = `${window.innerWidth - 200}px`;
      setTimeout(() => {
        HERO.style.transition = 'all ease 1s';
      }, 10);

      // ---- If HERO is coming from frame "right" (Formation) sets scenario to "center"
      if (positionState.frame === 'right') {
        changePositionState({ frame: 'center', position: 'on-the-right' });
        changeFormationState(prevState => ({ ...prevState, active: false }));

        // ---- If HERO is coming from frame "center" (basic Seabed) sets scenario to "left" (OtherSkillsSection)
      } else if (positionState.frame === 'center') {
        changePositionState({ frame: 'left', position: 'on-the-right' });
        changeOtherSkillsState(prevState => ({ ...prevState, active: true }));
      }
    }
  };

  // ======== Triggers a random thought when the HERO reaches any outer border.
  const onReachBorder = side => {
    changeThinkingState(prevState => ({
      side,
      thoughts:
        prevState.thoughts === 7 ? prevState.thoughts : prevState.thoughts + 1
    }));
  };

  // ======== All page viewed. Reset all states and go back to first page
  const goBackUp = () => {
    window.removeEventListener('keyup', moveHero);
    setTimeout(() => {
      clearTimeout(floatRight);
      clearTimeout(floatLeft);
      HERO.src = SwimmingRight;
      changeHeroMovements({
        isGoingUp: true,
        isSwimming: false
      });
      HERO.style.transition = 'all ease 10s';
      HERO.style.top = '40%';
    }, 2000);
    setTimeout(() => {
      HERO.style.top = '-200px';
    }, 2500);

    if (!isDesktop) {
      resetScrollPosition(2000);
    } else {
      resetScrollPosition(8000);
    }

    setTimeout(() => {
      // -- Resets component to its initial state
      resetInitialState();
      window.addEventListener('keyup', moveHero);

      // -- Puts HERO on its initial position
      changeHeroMovements({
        isSwimming: false,
        isGoingUp: false
      });
      HERO.style.top = '40%';
      HERO.style.left = `${window.innerWidth * 0.4}px`;
      HERO.src = FloatingRight;
      HERO.style.transition = 'all ease 1s';
    }, 8050);
  };

  useEffect(() => {
    const captureHeroMovement = event => {
      moveHero(event);
    };
    if (
      scenarioHasFinished &&
      positionState.frame === 'center' &&
      positionState.position === 'center'
    ) {
      return () => {
        window.removeEventListener('keyup', captureHeroMovement);
      };
    }
    window.addEventListener('keyup', captureHeroMovement);

    return () => {
      window.removeEventListener('keyup', captureHeroMovement);
    };
  });

  useEffect(() => {
    HERO = HeroRef.current;
    HERO.style.left = `${window.innerWidth * 0.4}px`;
  }, []);

  return (
    <SeabedSection id="Seabed Section">
      {isDesktop && !instructionsHidden && (
        <MessageContainer>
          <Message>{texts.message}</Message>
          <Message>{texts.messageKeyboard}</Message>
          <MessageOnMobileDevices>
            {texts.messageDevices}
          </MessageOnMobileDevices>
        </MessageContainer>
      )}

      <SubsectionFormation
        hidden={scenarioHasFinished || positionState.frame !== 'center'}
        onClick={() => onClickLinkOnMobile(!isDesktop && 'formationSection')}
        role="button"
        tabIndex={0}
      >
        <Text active={positionState.position === 'on-the-right'}>
          {texts.formation}
        </Text>
      </SubsectionFormation>

      <SubsectionOtherSkills
        hidden={scenarioHasFinished || positionState.frame !== 'center'}
        onClick={() => onClickLinkOnMobile(!isDesktop && 'otherSkillsSection')}
        role="button"
        tabIndex={0}
      >
        <Text active={positionState.position === 'on-the-left'}>
          {texts.skills}
        </Text>
      </SubsectionOtherSkills>

      <HeroImage
        alt="A scuba diver swimming smoothly"
        id="hero"
        isGoingUp={heroMovements.isGoingUp}
        isSwimming={heroMovements.isSwimming}
        ref={HeroRef}
        src={FloatingRight}
      />

      <SeabedFloor>
        <FloorText
          hidden={scenarioHasFinished || positionState.frame !== 'center'}
        >
          Anna Branco
        </FloorText>
      </SeabedFloor>

      {formationState.active && (
        <Formation
          onClickClose={onClickClose}
          onClickOpen={onClickOpen}
          status={formationState}
        />
      )}

      {otherSkillsState.active && (
        <OtherSkills
          onClickClose={onClickClose}
          onClickOpen={onClickOpen}
          status={otherSkillsState}
        />
      )}

      {scenarioHasFinished && <GoBackText>{texts.time2go}</GoBackText>}

      {thinkingState.side && (
        <ThinkingText side={thinkingState.side}>
          {texts.thoughts[thinkingState.thoughts]}
        </ThinkingText>
      )}
    </SeabedSection>
  );
};

SeaBed.propTypes = {
  resetScrollPosition: func.isRequired
};

export default SeaBed;
