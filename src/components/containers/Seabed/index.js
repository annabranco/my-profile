import React, { Component, createRef } from 'react';
import { PropTypes } from 'prop-types';
import { Experiences, OtherSkills } from '../../views';
import {
  FloatingRight,
  FloatingLeft,
  SwimmingRight,
  SwimmingLeft
} from '../../../images';
import {
  seabedTextPropType,
  experiencesTextPropType,
  otherSkillsTextPropType,
  globalTextsPropType
} from '../../../types';
import { isDesktop } from '../../../utils/device';

const INITIAL_STATE = {
  hideInstructions: false,
  experiences: {
    active: false,
    visible: false,
    read: false
  },
  otherSkills: {
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
  finishedScenario: false
};

class Seabed extends Component {
  static propTypes = {
    texts: seabedTextPropType.isRequired,
    globalTexts: globalTextsPropType.isRequired,
    textsExperiences: experiencesTextPropType.isRequired,
    textsOtherSkills: otherSkillsTextPropType.isRequired,
    triggerThankYouMessage: PropTypes.func.isRequired,
    resetScrollPosition: PropTypes.func.isRequired
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

  // ======== Handle view components (Experience and Other Skills)

  onClickLinkOnMobile = link => {
    console.log('$$$ link', link);
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
    if (this.state.experiences.read && this.state.otherSkills.read) {
      this.setState({ finishedScenario: true });
    }
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
      Hero.classList.add('swim');
      this.floatRight = setTimeout(() => {
        Hero.src = FloatingRight;
        Hero.classList.remove('swim');
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
      Hero.classList.add('swim');
      this.floatLeft = setTimeout(() => {
        Hero.src = FloatingLeft;
        Hero.classList.remove('swim');
      }, 3000);
    }
    this.moveToSomewhere();
  };

  // ======= Function that fires events when Hero reaches some specific places
  moveToSomewhere = () => {
    const { Hero } = this;

    // ---- WHEN the Hero has viewed all components (Experience and OtherSkills), he goes up
    const { experiences, otherSkills, frame } = this.state;
    if (
      experiences.read &&
      !experiences.active &&
      otherSkills.read &&
      !otherSkills.active &&
      frame === 'center'
    ) {
      this.goBackUp();
    }

    // ---- Highlights the text "Previous Experiences" when hero swims over it
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
          otherSkills: {
            ...prevState.otherSkills,
            active: false
          },
          frame: 'center',
          position: 'on-the-left'
        }));

        // ---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "right" (Experiences)
      } else if (this.state.frame === 'center') {
        this.setState(prevState => ({
          experiences: {
            ...prevState.experiences,
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

      // ---- If Hero is coming from frame "right" (Experiences) sets scenario to "center"
      if (this.state.frame === 'right') {
        this.setState(prevState => ({
          experiences: {
            ...prevState.experiences,
            active: false
          },
          frame: 'center',
          position: 'on-the-right'
        }));

        // ---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "left" (OtherSkills)
      } else if (this.state.frame === 'center') {
        this.setState(prevState => ({
          otherSkills: {
            ...prevState.otherSkills,
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
      Hero.classList.remove('floating-soft');
      Hero.classList.add('goingUp');
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

      // -- Triggers thank you message on first screen
      this.props.triggerThankYouMessage();

      // -- Puts Hero on its initial position
      Hero.classList.add('floating-soft');
      Hero.classList.remove('goingUp');
      Hero.style.top = '40%';
      Hero.style.left = `${window.innerWidth * 0.4}px`;
      Hero.src = FloatingRight;
      Hero.style.transition = 'all ease 1s';
    }, 8050);
  };

  render() {
    const {
      hideInstructions,
      experiences,
      otherSkills,
      heroThinks,
      position,
      frame,
      finishedScenario
    } = this.state;
    const {
      texts,
      textsExperiences,
      textsOtherSkills,
      globalTexts
    } = this.props;

    return (
      <section className="section__seabed">
        {isDesktop && !hideInstructions && (
          <div className="seabed__message--outer floating-soft">
            <p className="seabed__message">{texts.message}</p>
            <p className="seabed__message seabed__message-keyboard">
              {texts.messageKeyboard}
            </p>
            <p className="seabed__message seabed__message-devices">
              {texts.messageDevices}
            </p>
          </div>
        )}

        <div
          className={`seabed__go--experiences floating floating-delay ${(frame !==
            'center' ||
            finishedScenario) &&
            'hidden'}`}
          onClick={() => this.onClickLinkOnMobile(!isDesktop && 'experiences')}
          role="button"
          tabIndex={0}
        >
          <p
            className={`seabed__go-text seabed__go-textRight ${position ===
              'on-the-right' && 'goThisWay'}`}
          >
            {texts.experiences}
          </p>
        </div>
        <div
          className={`seabed__go--otherSkills floating ${(frame !== 'center' ||
            finishedScenario) &&
            'hidden'}`}
          onClick={() => this.onClickLinkOnMobile(!isDesktop && 'otherSkills')}
          role="button"
          tabIndex={0}
        >
          <p
            className={`seabed__go-text seabed__go-textLeft ${position ===
              'on-the-left' && 'goThisWay'}`}
          >
            {texts.skills}
          </p>
        </div>

        <img
          src={FloatingRight}
          id="hero"
          className="seabed__hero floating-soft"
          alt="A scuba diver swimming smoothly"
          ref={this.HeroRef}
        />

        <div className="seabed__image">
          <p
            className={`seabed__anna ${(frame !== 'center' ||
              finishedScenario) &&
              'hidden'}`}
          >
            Anna Branco
          </p>
        </div>

        {experiences.active && (
          <Experiences
            texts={textsExperiences}
            globalTexts={globalTexts}
            status={experiences}
            onClickOpen={this.onClickOpen}
            onClickClose={this.onClickClose}
          />
        )}

        {otherSkills.active && (
          <OtherSkills
            texts={textsOtherSkills}
            globalTexts={globalTexts}
            status={otherSkills}
            onClickOpen={this.onClickOpen}
            onClickClose={this.onClickClose}
          />
        )}

        {finishedScenario && <p className="seabed__back">{texts.time2go}</p>}

        {heroThinks.side && (
          <p className={`hero__thinks ${heroThinks.side}`}>
            {texts.thoughts[heroThinks.thoughts]}
          </p>
        )}
      </section>
    );
  }
}

export default Seabed;
