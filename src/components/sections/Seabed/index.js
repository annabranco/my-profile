/* eslint-disable no-use-before-define, react-hooks/exhaustive-deps */

import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { func, instanceOf } from 'prop-types';
import Formation from '../Formation';
import OtherSkills from '../OtherSkills';
import {
  finishedSelector,
  seabedTextsSelector
} from '../../../redux/selectors';
import { triggerFinishScenario } from '../../../redux/actions/finishedScenario';
import { useStateWithLabel } from '../../../utils/hooks';
import { isDesktop } from '../../../utils/device';
import ShellElement from './seaElements/ShellElement';
import FishesElement from './seaElements/FishesElement';
import CrabElement from './seaElements/CrabElement';
import {
  FloatingRight,
  SwimmingLeft,
  SwimmingRight,
  ScubaFish
} from '../../../assets/images';
import UnderwaterAmbient from '../../../assets/sounds/underwater.mp3';
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
  SEABED_AREA,
  THINKING
} from '../../../constants';
import {
  Bubble,
  Bubbles,
  FloorText,
  GoBackText,
  HeroImage,
  HeroWrapper,
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
let float;

const SeaBed = ({ cuePointsActivated, resetScrollPosition }) => {
  const [pearlFound, toggleHasPearl] = useStateWithLabel(false, 'pearlFound');
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
      isSwimming: false,
      facing: RIGHT
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
  const HeroImg = useRef();
  const isKeyDown = useRef();
  const sound = useRef(new Audio(UnderwaterAmbient));

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
      isSwimming: false,
      facing: RIGHT
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
    hideInstructions(true);
    dispatch(triggerFinishScenario(true));
  };

  // ======== Handle base HERO movements

  const moveHero = (key, updatedPosition) => {
    const DISPLACEMENT = 250;
    let floatingImage;
    let newMovement;
    let swimmingImage;

    if (key === 'ArrowRight') {
      // -Prevents movement beyond right margin on frame RIGHT
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
    } else if (key === 'ArrowLeft') {
      // -Prevents movement beyond left margin on frame LEFT
      if (
        updatedPosition.frame === LEFT &&
        updatedPosition.position === ON_THE_LEFT
      ) {
        return onReachBorder(ON_THE_LEFT);
      }
      swimmingImage = SwimmingLeft;
      floatingImage = FloatingRight;
      newMovement = `${Number(HERO.style.left.slice(0, -2)) - DISPLACEMENT}px`;
      closeSubsections();
    }
    changeThinkingState(prevState => ({
      ...prevState,
      side: undefined
    }));
    clearTimeout(float);
    HeroImg.current.src = swimmingImage;
    HERO.style.left = newMovement;
    changeHeroMovements({
      ...heroMovements,
      isSwimming: true,
      facing: swimmingImage === SwimmingRight ? RIGHT : LEFT
    });
    float = setTimeout(() => {
      HeroImg.current.src = floatingImage;
      changeHeroMovements({
        ...heroMovements,
        isSwimming: false,
        facing: swimmingImage === SwimmingRight ? RIGHT : LEFT
      });
    }, 4000);
    return heroHasMoved(updatedPosition);
  };

  // ======= Function that fires events when HERO reaches some specific places

  const heroHasMoved = updatedPosition => {
    if (!instructionsHidden) {
      hideInstructions(true);
    }

    if (heroMovements.crossingBorder) {
      changeHeroMovements({
        ...heroMovements,
        crossingBorder: false
      });
    }

    // -WHEN the HERO has viewed all components (Formation and OtherSkills), he goes up
    if (
      formationState.read &&
      !formationState.active &&
      otherSkillsState.read &&
      !otherSkillsState.active &&
      updatedPosition.frame === CENTER
    ) {
      goBackUp();
    }

    // -Highlights the text "Formation" when hero swims over it
    if (Number(HERO.style.left.slice(0, -2)) >= window.innerWidth - 400) {
      changePositionState(prevState => ({
        ...prevState,
        position: ON_THE_RIGHT
      }));

      // -Highlights the text "Other Skills" when hero swims over it
    } else if (Number(HERO.style.left.slice(0, -2)) <= 200) {
      changePositionState(prevState => ({
        ...prevState,
        position: ON_THE_LEFT
      }));

      // -Clear highlights
    } else if (updatedPosition.position !== CENTER && !isFinished) {
      changePositionState(prevState => ({
        frame: prevState.frame,
        position: CENTER
      }));
    }

    // ======== WHEN the HERO crosses the RIGHT border of the screen
    if (Number(HERO.style.left.slice(0, -2)) >= window.innerWidth - 50) {
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

      // -If HERO is coming from frame "left" (OtherSkills) sets scenario to "center"
      if (updatedPosition.frame === LEFT) {
        changePositionState({ frame: CENTER, position: ON_THE_LEFT });
        changeOtherSkillsState(prevState => ({ ...prevState, active: false }));

        // -If HERO is coming from frame "center" (basic Seabed) sets scenario to "right" (Formation)
      } else if (updatedPosition.frame === CENTER) {
        changePositionState({ frame: RIGHT, position: ON_THE_LEFT });
        changeFormationState(prevState => ({ ...prevState, active: true }));
      }
    }

    // ======== WHEN the HERO crosses the LEFT border of the screen
    if (Number(HERO.style.left.slice(0, -2)) <= -200) {
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

      // -If HERO is coming from frame "right" (Formation) sets scenario to "center"
      if (updatedPosition.frame === RIGHT) {
        changePositionState({ frame: CENTER, position: ON_THE_RIGHT });
        changeFormationState(prevState => ({ ...prevState, active: false }));

        // -If HERO is coming from frame "center" (basic Seabed) sets scenario to "left" (OtherSkillsSection)
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
  const goBackUp = () => {
    // window.removeEventListener('keyup', captureHeroMovement);
    setTimeout(() => {
      clearTimeout(float);
      HeroImg.current.src =
        heroMovements.facing === RIGHT ? SwimmingRight : SwimmingLeft;
      changePositionState({ frame: CENTER, position: CENTER });
      changeHeroMovements({
        ...heroMovements,
        isGoingUp: true,
        isSwimming: false
      });
    }, 1000);
    setTimeout(() => {
      changeHeroMovements({
        back2Surface: true,
        crossingBorder: false,
        isGoingUp: true,
        isSwimming: false,
        facing: heroMovements.facing
      });
    }, 1500);

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
        isSwimming: false,
        facing: RIGHT
      });
      HERO.style.left = `${window.innerWidth * 0.4}px`;
      HeroImg.current.src = FloatingRight;
    }, 8000);
  };

  useEffect(() => {
    const onKeyUp = () => {
      isKeyDown.current = false;
    };

    const captureHeroMovement = ({ key }) => {
      if (!isKeyDown.current) {
        isKeyDown.current = true;
        setTimeout(() => {
          isKeyDown.current = false;
        }, 1000);
        if (key === 'ArrowRight' || key === 'ArrowLeft') {
          moveHero(key, positionState);
        }
      }
    };
    if (
      isFinished &&
      positionState.frame === CENTER &&
      positionState.position === CENTER
    ) {
      window.removeEventListener('keydown', captureHeroMovement);
      window.removeEventListener('keyup', onKeyUp);
    } else {
      window.addEventListener('keydown', captureHeroMovement);
      window.addEventListener('keyup', onKeyUp);
    }

    return () => {
      window.removeEventListener('keydown', captureHeroMovement);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [positionState, moveHero, isFinished]);

  useEffect(() => {
    HERO = HeroRef.current;
    HERO.style.left = `${window.innerWidth * 0.4}px`;
  }, []);

  useEffect(() => {
    if (cuePointsActivated.has(SEABED_AREA)) {
      dispatch(triggerFinishScenario(false));
      if (sound.current.paused) {
        sound.current.currentTime = 0;
        sound.current.volume = 0.3;
        sound.current.play();
        sound.current.loop = true;
      }
    } else if (!sound.current.paused) {
      sound.current.pause();
    }
  }, [cuePointsActivated, dispatch]);

  useEffect(() => {
    if (pearlFound) {
      HeroImg.current.src = ScubaFish;
    }
  }, [pearlFound]);

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

      <HeroWrapper
        back2Surface={heroMovements.back2Surface}
        crossingBorder={heroMovements.crossingBorder}
        isGoingUp={heroMovements.isGoingUp}
        id="hero"
        ref={HeroRef}
      >
        <Bubbles
          facing={heroMovements.facing}
          isSwimming={heroMovements.isSwimming}
        >
          {[...Array(10).keys()].map(order => (
            <Bubble key={order} S />
          ))}
        </Bubbles>

        <HeroImage
          alt="A scuba diver swimming smoothly"
          back2Surface={heroMovements.back2Surface}
          crossingBorder={heroMovements.crossingBorder}
          facing={heroMovements.facing}
          isGoingUp={heroMovements.isGoingUp}
          isSwimming={heroMovements.isSwimming}
          ref={HeroImg}
          src={FloatingRight}
        />
      </HeroWrapper>

      <FishesElement />
      <ShellElement
        toggleHasPearl={toggleHasPearl}
        hidden={positionState.frame !== CENTER}
      />
      <CrabElement
        position={positionState}
        hidden={positionState.frame !== RIGHT}
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
  cuePointsActivated: instanceOf(Set).isRequired,
  resetScrollPosition: func.isRequired
};

export default SeaBed;
