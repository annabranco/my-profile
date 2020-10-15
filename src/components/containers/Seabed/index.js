import React, { Component, createRef } from 'react';
import { arrayOf, func } from 'prop-types';
import { OtherSkills, Formation } from '../../views';
import {
  FloatingRight,
  FloatingLeft,
  SwimmingRight,
  SwimmingLeft
} from '../../../images';
import {
  seabedTextPropType,
  otherSkillsTextPropType,
  globalTextsPropType,
  formationPropType
} from '../../../types';
import { isDesktop } from '../../../utils/device';
import {
  SeabedMessage,
  SeabedMessageContainer,
  SeabedMessageDevices,
  SeabedSection,
  SeabedSubsectionFormation,
  SeabedSubsectionText,
  SeabedSubsectionOtherSkills,
  HeroImage,
  SeabedFloor,
  SeabedFloorText,
  SeabedBackText,
  HeroThinkingText
} from './styles';

const INITIAL_STATE = {
  hideInstructions: false,
  formationSection: {
    active: false,
    visible: false,
    read: false
  },
  otherSkillsSection: {
    active: false,
    visible: false,
    read: false
  },
  frame: 'center',
  position: 'initial',
  heroThinks: {
    side: undefined,
    thoughts: -1
  },
  clickedLinkOnMobile: undefined,
  finishedScenario: false,
  heroMovements: {
    isSwimming: false,
    isGoingUp: false
  }
};

class Seabed extends Component {
  static propTypes = {
    texts: seabedTextPropType.isRequired,
    globalTexts: globalTextsPropType.isRequired,
    formation: arrayOf(formationPropType).isRequired,
    textsOtherSkills: otherSkillsTextPropType.isRequired,
    triggerThankYouMessage: func.isRequired,
    resetScrollPosition: func.isRequired
  };

  state = INITIAL_STATE;

  HeroRef = createRef();

  Hero = undefined;

  floatLeft;

  floatRight;

  componentDidMount() {
    window.addEventListener('keyup', this.moveHero);
    this.Hero = this.HeroRef.current;
    this.Hero.style.left = `${window.innerWidth * 0.4}px`;
  }

  // ======== Triggers a random thought when the Hero reaches any outer border.
  onReachBorder = side => {
    this.setState(prevState => ({
      heroThinks: {
        side,
        thoughts: prevState.heroThinks.thoughts + 1
      }
    }));
  };

  // ======== Handle view components (Formation and Other Skills)

  onClickLinkOnMobile = link => {
    this.setState({
      [link]: {
        active: true,
        visible: true,
        read: true
      }
    });
  };

  onClickOpen = type => {
    if (!this.state[type].visible) {
      this.setState({
        [type]: {
          active: true,
          visible: true,
          read: true
        }
      });
    }
  };

  onClickClose = type => {
    this.setState(prevState => ({
      [type]: {
        active: isDesktop ? prevState[type].active : false,
        read: true,
        visible: false
      }
    }));
    if (
      this.state.formationSection.read &&
      this.state.otherSkillsSection.read &&
      isDesktop
    ) {
      this.setState({ finishedScenario: true });
    }
    // -- Triggers thank you message on first screen
    this.props.triggerThankYouMessage();
  };

  // ======== Handle Hero movements

  moveHero = event => {
    const { Hero } = this;
    const DISPLACEMENT = 250;

    if (event.key === 'ArrowRight') {
      // ---- Prevents movement beyond right margin on frame 'right'
      if (
        Number(Hero.style.left.slice(0, -2)) >=
          window.innerWidth - (DISPLACEMENT + 50) &&
        this.state.frame === 'right'
      ) {
        this.onReachBorder('on-right');
        return;
      }
      this.setState(prevState => ({
        heroThinks: {
          ...prevState.heroThinks,
          side: undefined
        }
      }));
      clearTimeout(this.floatRight);
      clearTimeout(this.floatLeft);
      Hero.src = SwimmingRight;
      Hero.style.left = `${Number(Hero.style.left.slice(0, -2)) +
        DISPLACEMENT}px`;
      this.setState({
        heroMovements: {
          isSwimming: true,
          isGoingUp: false
        }
      });
      this.floatRight = setTimeout(() => {
        Hero.src = FloatingRight;
        this.setState({
          heroMovements: {
            isSwimming: false,
            isGoingUp: false
          }
        });
        // Hero.classList.remove('swim');
      }, 3000);
    } else if (event.key === 'ArrowLeft') {
      // ---- Prevents movement beyond left margin on frame 'left'
      if (
        Number(Hero.style.left.slice(0, -2)) <= DISPLACEMENT - 50 &&
        this.state.frame === 'left'
      ) {
        this.onReachBorder('on-left');
        return;
      }
      this.setState(prevState => ({
        heroThinks: {
          ...prevState.heroThinks,
          side: undefined
        }
      }));
      clearTimeout(this.floatRight);
      clearTimeout(this.floatLeft);
      Hero.src = SwimmingLeft;
      Hero.style.left = `${Number(Hero.style.left.slice(0, -2)) -
        DISPLACEMENT}px`;
      // Hero.classList.add('swim');
      this.setState({
        heroMovements: {
          isSwimming: true,
          isGoingUp: false
        }
      });
      this.floatLeft = setTimeout(() => {
        Hero.src = FloatingLeft;
        // Hero.classList.remove('swim');
        this.setState({
          heroMovements: {
            isSwimming: false,
            isGoingUp: false
          }
        });
      }, 3000);
    }
    this.moveToSomewhere();
  };

  // ======= Function that fires events when Hero reaches some specific places
  moveToSomewhere = () => {
    const { Hero } = this;

    // ---- WHEN the Hero has viewed all components (Formation and OtherSkills), he goes up
    const { formationSection, otherSkillsSection, frame } = this.state;
    if (
      formationSection.read &&
      !formationSection.active &&
      otherSkillsSection.read &&
      !otherSkillsSection.active &&
      frame === 'center'
    ) {
      this.goBackUp();
    }

    // ---- Highlights the text "Formation" when hero swims over it
    if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 400) {
      this.setState({ position: 'on-the-right' });

      // ---- Highlights the text "Other Skills" when hero swims over it
    } else if (Number(Hero.style.left.slice(0, -2)) <= 200) {
      this.setState({ position: 'on-the-left' });

      // ---- Clear highlights
    } else if (this.state.position !== 'center') {
      this.setState({ position: 'center' });
    }

    // ======== WHEN the Hero crosses the RIGHT border of the screen
    if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 50) {
      this.setState({ hideInstructions: true });

      Hero.style.transition = 'none';
      Hero.style.left = '-30px';
      setTimeout(() => {
        Hero.style.transition = 'all ease 1s';
      }, 10);

      // ---- If Hero is coming from frame "left" (OtherSkills) sets scenario to "center"
      if (this.state.frame === 'left') {
        this.setState(prevState => ({
          otherSkillsSection: {
            ...prevState.otherSkillsSection,
            active: false
          },
          frame: 'center',
          position: 'on-the-left'
        }));

        // ---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "right" (Formation)
      } else if (this.state.frame === 'center') {
        this.setState(prevState => ({
          formationSection: {
            ...prevState.formationSection,
            active: true
          },
          frame: 'right'
        }));
      }
    }

    // ======== WHEN the Hero crosses the LEFT border of the screen
    if (Number(Hero.style.left.slice(0, -2)) <= -200) {
      this.setState({ hideInstructions: true });

      Hero.style.transition = 'none';
      Hero.style.left = `${window.innerWidth - 200}px`;
      setTimeout(() => {
        Hero.style.transition = 'all ease 1s';
      }, 10);

      // ---- If Hero is coming from frame "right" (Formation) sets scenario to "center"
      if (this.state.frame === 'right') {
        this.setState(prevState => ({
          formationSection: {
            ...prevState.formationSection,
            active: false
          },
          frame: 'center',
          position: 'on-the-right'
        }));

        // ---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "left" (OtherSkillsSection)
      } else if (this.state.frame === 'center') {
        this.setState(prevState => ({
          otherSkillsSection: {
            ...prevState.otherSkillsSection,
            active: true
          },
          frame: 'left'
        }));
      }
    }
  };

  // ======== All page viewed. Reset all states and go back to first page
  goBackUp = () => {
    const { Hero } = this;

    window.removeEventListener('keyup', this.moveHero);
    setTimeout(() => {
      clearTimeout(this.floatRight);
      clearTimeout(this.floatLeft);
      Hero.src = SwimmingRight;
      this.setState({
        heroMovements: {
          isSwimming: false,
          isGoingUp: true
        }
      });

      // Hero.classList.remove('floating-soft');
      // Hero.classList.add('goingUp');
      Hero.style.transition = 'all ease 10s';
      Hero.style.top = '40%';
    }, 2000);
    setTimeout(() => {
      Hero.style.top = '-200px';
    }, 2500);

    if (!isDesktop) {
      this.props.resetScrollPosition(2000);
    } else {
      this.props.resetScrollPosition(8000);
    }

    setTimeout(() => {
      // -- Resets component to its initial state
      this.setState(INITIAL_STATE);
      window.addEventListener('keyup', this.moveHero);

      // -- Puts Hero on its initial position
      this.setState({
        heroMovements: {
          isSwimming: false,
          isGoingUp: false
        }
      });
      // Hero.classList.add('floating-soft');
      // Hero.classList.remove('goingUp');
      Hero.style.top = '40%';
      Hero.style.left = `${window.innerWidth * 0.4}px`;
      Hero.src = FloatingRight;
      Hero.style.transition = 'all ease 1s';
    }, 8050);
  };

  render() {
    const {
      hideInstructions,
      formationSection,
      otherSkillsSection,
      heroThinks,
      position,
      frame,
      finishedScenario,
      heroMovements
    } = this.state;
    const { texts, textsOtherSkills, globalTexts, formation } = this.props;

    return (
      <SeabedSection>
        {isDesktop && !hideInstructions && (
          <SeabedMessageContainer>
            <SeabedMessage>{texts.message}</SeabedMessage>
            <SeabedMessage>{texts.messageKeyboard}</SeabedMessage>
            <SeabedMessageDevices>{texts.messageDevices}</SeabedMessageDevices>
          </SeabedMessageContainer>
        )}

        <SeabedSubsectionFormation
          onClick={() =>
            this.onClickLinkOnMobile(!isDesktop && 'formationSection')
          }
          role="button"
          tabIndex={0}
          hidden={finishedScenario || frame !== 'center'}
        >
          <SeabedSubsectionText active={position === 'on-the-right'}>
            {texts.formation}
          </SeabedSubsectionText>
        </SeabedSubsectionFormation>

        <SeabedSubsectionOtherSkills
          onClick={() =>
            this.onClickLinkOnMobile(!isDesktop && 'otherSkillsSection')
          }
          role="button"
          tabIndex={0}
          hidden={finishedScenario || frame !== 'center'}
        >
          <SeabedSubsectionText active={position === 'on-the-left'}>
            {texts.skills}
          </SeabedSubsectionText>
        </SeabedSubsectionOtherSkills>

        <HeroImage
          src={FloatingRight}
          id="hero"
          alt="A scuba diver swimming smoothly"
          ref={this.HeroRef}
          isSwimming={heroMovements.isSwimming}
          isGoingUp={heroMovements.isGoingUp}
        />

        <SeabedFloor>
          <SeabedFloorText hidden={finishedScenario || frame !== 'center'}>
            Anna Branco
          </SeabedFloorText>
        </SeabedFloor>

        {formationSection.active && (
          <Formation
            texts={texts}
            globalTexts={globalTexts}
            formation={formation}
            status={formationSection}
            onClickOpen={() => this.onClickOpen('formationSection')}
            onClickClose={() => this.onClickClose('formationSection')}
          />
        )}

        {otherSkillsSection.active && (
          <OtherSkills
            texts={textsOtherSkills}
            globalTexts={globalTexts}
            status={otherSkillsSection}
            onClickOpen={() => this.onClickOpen('otherSkillsSection')}
            onClickClose={() => this.onClickClose('otherSkillsSection')}
          />
        )}

        {finishedScenario && <SeabedBackText>{texts.time2go}</SeabedBackText>}

        {heroThinks.side && (
          <HeroThinkingText side={heroThinks.side}>
            {texts.thoughts[heroThinks.thoughts]}
          </HeroThinkingText>
        )}
      </SeabedSection>
    );
  }
}

export default Seabed;
