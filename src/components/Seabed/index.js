/* eslint-disable no-use-before-define */

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { func } from 'prop-types';
import Formation from '../Formation';
import OtherSkills from '../OtherSkills';
import { finishedSelector, seabedTextsSelector } from '../../redux/selectors';
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
  CENTER,
  FORMATION,
  INSTRUCTIONS,
  LEFT,
  MOVEMENTS,
  ON_THE_LEFT,
  ON_THE_RIGHT,
  OTHER_SKILLS,
  POSITION,
  RIGHT,
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
  const isFinished = useSelector(finishedSelector);
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
      back2Surface: false,
      crossingBorder: false,
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
      frame: CENTER,
      position: 'initial'
    },
    POSITION
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

  const closeSubsections = () => {
    onClickClose('formationSection');
    onClickClose('otherSkillsSection');
  };

  const onClickLinkOnMobile = link => {
    if (link === 'formationSection') {
      return changeFormationState({
        active: true,
        read: true,
        visible: true
      });
    }
    if (link === 'otherSkillsSection') {
      return changeOtherSkillsState({
        active: true,
        read: true,
        visible: true
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
      // -- Triggers thank you message on first screen
      dispatch(triggerFinishScenario(true));
    }
  };

  const resetInitialState = () => {
    changePositionState({
      frame: CENTER,
      position: 'initial'
    });
    changeThinkingState({
      side: undefined,
      thoughts: -1
    });
    changeHeroMovements({
      back2Surface: false,
      crossingBorder: false,
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
    setTimeout(() => {
      dispatch(triggerFinishScenario(true));
    }, 5000);
    // finishScenario(false);
  };

  // ======== Handle base HERO movements

  const moveHero = (event, updatedPosition) => {
    const DISPLACEMENT = 250;
    let floatingImage;
    let newMovement;
    let swimmingImage;

    if (event.key === 'ArrowRight') {
      // ---- Prevents movement beyond right margin on frame RIGHT
      if (
        updatedPosition.frame === RIGHT &&
        updatedPosition.position === ON_THE_RIGHT
      ) {
        return onReachBorder(ON_THE_RIGHT);
      }
      floatingImage = FloatingRight;
      swimmingImage = SwimmingRight;
      newMovement = `${Number(HERO.style.left.slice(0, -2)) + DISPLACEMENT}px`;
      closeSubsections();
    } else if (event.key === 'ArrowLeft') {
      // ---- Prevents movement beyond left margin on frame LEFT
      if (
        updatedPosition.frame === LEFT &&
        updatedPosition.position === ON_THE_LEFT
      ) {
        return onReachBorder(ON_THE_LEFT);
      }
      swimmingImage = SwimmingLeft;
      floatingImage = FloatingLeft;
      newMovement = `${Number(HERO.style.left.slice(0, -2)) - DISPLACEMENT}px`;
      closeSubsections();
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
      ...heroMovements,
      isSwimming: true
    });
    floatRight = setTimeout(() => {
      HERO.src = floatingImage;
      changeHeroMovements({
        ...heroMovements,
        isSwimming: false
      });
    }, 3000);
    return heroHasMoved(updatedPosition);
  };

  // ======= Function that fires events when HERO reaches some specific places

  const heroHasMoved = updatedPosition => {
    // ---- WHEN the HERO has viewed all components (Formation and OtherSkills), he goes up
    if (
      formationState.read &&
      !formationState.active &&
      otherSkillsState.read &&
      !otherSkillsState.active &&
      updatedPosition.frame === CENTER
    ) {
      goBackUp(updatedPosition);
    }

    // ---- Highlights the text "Formation" when hero swims over it
    if (Number(HERO.style.left.slice(0, -2)) >= window.innerWidth - 400) {
      changePositionState(prevState => ({
        ...prevState,
        position: ON_THE_RIGHT
      }));

      // ---- Highlights the text "Other Skills" when hero swims over it
    } else if (Number(HERO.style.left.slice(0, -2)) <= 200) {
      changePositionState(prevState => ({
        ...prevState,
        position: ON_THE_LEFT
      }));

      // ---- Clear highlights
    } else if (updatedPosition.position !== CENTER && !isFinished) {
      changePositionState(prevState => ({
        frame: prevState.frame,
        position: CENTER
      }));
    }

    // ======== WHEN the HERO crosses the RIGHT border of the screen
    if (Number(HERO.style.left.slice(0, -2)) >= window.innerWidth - 50) {
      hideInstructions(true);

      changeHeroMovements({
        ...heroMovements,
        crossingBorder: true
      });
      HERO.style.left = '-30px';
      setTimeout(() => {
        // HERO.style.transition = 'all ease 1s';
        changeHeroMovements({
          ...heroMovements,
          crossingBorder: false
        });
      }, 10);

      // ---- If HERO is coming from frame "left" (OtherSkills) sets scenario to "center"
      if (updatedPosition.frame === LEFT) {
        changePositionState({ frame: CENTER, position: ON_THE_LEFT });
        changeOtherSkillsState(prevState => ({ ...prevState, active: false }));

        // ---- If HERO is coming from frame "center" (basic Seabed) sets scenario to "right" (Formation)
      } else if (updatedPosition.frame === CENTER) {
        changePositionState({ frame: RIGHT, position: ON_THE_LEFT });
        changeFormationState(prevState => ({ ...prevState, active: true }));
      }
    }

    // ======== WHEN the HERO crosses the LEFT border of the screen
    if (Number(HERO.style.left.slice(0, -2)) <= -200) {
      hideInstructions(true);

      changeHeroMovements({
        ...heroMovements,
        crossingBorder: true
      });
      HERO.style.left = `${window.innerWidth - 200}px`;
      setTimeout(() => {
        changeHeroMovements({
          ...heroMovements,
          crossingBorder: false
        });
      }, 10);

      // ---- If HERO is coming from frame "right" (Formation) sets scenario to "center"
      if (updatedPosition.frame === RIGHT) {
        changePositionState({ frame: CENTER, position: ON_THE_RIGHT });
        changeFormationState(prevState => ({ ...prevState, active: false }));

        // ---- If HERO is coming from frame "center" (basic Seabed) sets scenario to "left" (OtherSkillsSection)
      } else if (updatedPosition.frame === CENTER) {
        changePositionState({ frame: LEFT, position: ON_THE_RIGHT });
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
  const goBackUp = updatedPosition => {
    // window.removeEventListener('keyup', captureHeroMovement);
    setTimeout(() => {
      clearTimeout(floatRight);
      clearTimeout(floatLeft);
      HERO.src =
        updatedPosition.position === ON_THE_LEFT ? SwimmingRight : SwimmingLeft;
      changePositionState({ frame: CENTER, position: CENTER });
      changeHeroMovements({
        ...heroMovements,
        isGoingUp: true,
        isSwimming: false
      });
    }, 2000);
    setTimeout(() => {
      changeHeroMovements({
        back2Surface: true,
        crossingBorder: false,
        isGoingUp: true,
        isSwimming: false
      });
    }, 2500);

    if (!isDesktop) {
      resetScrollPosition(2000);
    } else {
      resetScrollPosition(8000);
    }

    setTimeout(() => {
      // -- Resets component to its initial state
      resetInitialState();

      // -- Puts HERO on its initial position
      changeHeroMovements({
        back2Surface: false,
        crossingBorder: false,
        isGoingUp: false,
        isSwimming: false
      });
      HERO.style.left = `${window.innerWidth * 0.4}px`;
      HERO.src = FloatingRight;
    }, 8050);
  };

  useEffect(() => {
    const captureHeroMovement = event => {
      moveHero(event, positionState);
    };
    if (
      isFinished &&
      positionState.frame === CENTER &&
      positionState.position === CENTER
    ) {
      window.removeEventListener('keyup', captureHeroMovement);
    } else {
      window.addEventListener('keyup', captureHeroMovement);
    }

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
        hidden={isFinished || positionState.frame !== CENTER}
        onClick={() => onClickLinkOnMobile(!isDesktop && 'formationSection')}
        role="button"
        tabIndex={0}
      >
        <Text active={positionState.position === ON_THE_RIGHT}>
          {texts.formation}
        </Text>
      </SubsectionFormation>

      <SubsectionOtherSkills
        hidden={isFinished || positionState.frame !== CENTER}
        onClick={() => onClickLinkOnMobile(!isDesktop && 'otherSkillsSection')}
        role="button"
        tabIndex={0}
      >
        <Text active={positionState.position === ON_THE_LEFT}>
          {texts.skills}
        </Text>
      </SubsectionOtherSkills>

      <HeroImage
        alt="A scuba diver swimming smoothly"
        back2Surface={heroMovements.back2Surface}
        crossingBorder={heroMovements.crossingBorder}
        id="hero"
        isGoingUp={heroMovements.isGoingUp}
        isSwimming={heroMovements.isSwimming}
        position={positionState.position}
        ref={HeroRef}
        src={FloatingRight}
      />

      <SeabedFloor>
        <FloorText hidden={isFinished || positionState.frame !== CENTER}>
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

      {isFinished && <GoBackText>{texts.time2go}</GoBackText>}

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
