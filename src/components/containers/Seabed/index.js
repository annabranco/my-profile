import React, { Component, Fragment } from 'react';
import { Experiences, OtherSkills } from '../../views';
import {
  FloatingRight,
  FloatingLeft,
  SwimmingRight,
  SwimmingLeft
} from '../../../images';

let floatLeft;
let floatRight;
let Hero;
let thoughts = 0;

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
  heroThinks: undefined
};

export class Seabed extends Component {
  state = INITIAL_STATE;

  componentDidMount() {
    window.addEventListener('keyup', this.moveHero);
    Hero = document.querySelector('#hero');
    Hero.style.left = window.innerWidth * 0.4 + 'px';
  }

  // ======== Triggers a random thought when the Hero reaches any outer border.
  heroThinks = side => {
    this.setState({ heroThinks: thoughts });
    thoughts++;

    document.querySelector('.hero__thinks').style[side] = '40px';
  };

  // ======== Handle view components (Experience and Other Skills)

  onClickOpen = type => {
    if (!this.state[type].visible) {
      this.setState(prevState => ({
        [type]: {
          ...prevState[type],
          visible: true,
          read: true
        }
      }));

      switch (type) {
        case 'experiences':
          if (!window.matchMedia('(min-width: 768px)').matches) {
            document.querySelector('.otherSkills__mac').classList.add('hidden');
          }
          document
            .querySelector('.section__experiences')
            .classList.add('opened');

          break;
        case 'otherSkills':
          if (!window.matchMedia('(min-width: 768px)').matches) {
            document
              .querySelector('.section__experiences')
              .classList.add('hidden');
          }

          document
            .querySelector('.section__otherSkills')
            .classList.add('opened');
          document.querySelector('.otherSkills__mac').classList.add('opened');
          document
            .querySelector('.otherSkills__mac--screen')
            .classList.add('opened');
          document
            .querySelector('.otherSkills__mac--keyboard')
            .classList.add('hidden');
          document
            .querySelector('.otherSkills__mac--keyboard-keyArea')
            .classList.add('hidden');
          break;
        default:
          break;
      }
    }
  };

  onClickClose = type => {
    this.setState(prevState => ({
      [type]: {
        ...prevState[type],
        visible: false
      }
    }));

    switch (type) {
      case 'experiences':
        if (!window.matchMedia('(min-width: 768px)').matches) {
          document
            .querySelector('.otherSkills__mac')
            .classList.remove('hidden');
        }
        document
          .querySelector('.section__experiences')
          .classList.remove('opened');

        break;
      case 'otherSkills':
        if (!window.matchMedia('(min-width: 768px)').matches) {
          document
            .querySelector('.section__experiences')
            .classList.remove('hidden');
        }
        document
          .querySelector('.section__otherSkills')
          .classList.remove('opened');
        document.querySelector('.otherSkills__mac').classList.remove('opened');
        document
          .querySelector('.otherSkills__mac--screen')
          .classList.remove('opened');
        document
          .querySelector('.otherSkills__mac--keyboard')
          .classList.remove('hidden');
        document
          .querySelector('.otherSkills__mac--keyboard-keyArea')
          .classList.remove('hidden');
        break;
      default:
        break;
    }
  };

  // ======== Handle diver movements

  moveHero = event => {
    if (event.key === 'ArrowRight') {
      //---- Prevents movement beyond right margin on frame 'right'
      if (
        Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 300 &&
        this.state.frame === 'right'
      ) {
        this.heroThinks('right');
        return;
      } else {
        this.setState({ heroThinks: undefined });
        clearTimeout(floatRight);
        clearTimeout(floatLeft);
        Hero.src = SwimmingRight;
        Hero.style.left = Number(Hero.style.left.slice(0, -2)) + 250 + 'px';
        Hero.classList.add('swim');
        floatRight = setTimeout(() => {
          Hero.src = FloatingRight;
          Hero.classList.remove('swim');
        }, 3000);
      }
    } else if (event.key === 'ArrowLeft') {
      //---- Prevents movement beyond left margin on frame 'left'
      if (
        Number(Hero.style.left.slice(0, -2)) <= 200 &&
        this.state.frame === 'left'
      ) {
        this.heroThinks('left');
        return;
      } else {
        this.setState({ heroThinks: undefined });
        clearTimeout(floatRight);
        clearTimeout(floatLeft);
        Hero.src = SwimmingLeft;
        Hero.style.left = Number(Hero.style.left.slice(0, -2)) - 250 + 'px';
        Hero.classList.add('swim');
        floatLeft = setTimeout(() => {
          Hero.src = FloatingLeft;
          Hero.classList.remove('swim');
        }, 3000);
      }
    }
    this.moveToSomewhere();
  };

  //======== Function that fires events when Hero reaches some specific places
  moveToSomewhere = () => {
    //---- WHEN the Hero has viewed all components (Experience and OtherSkills), he goes up
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

    //---- Highlights the text "Previous Experiences" when hero swims over it
    if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 400) {
      document
        .querySelector('.seabed__go-textRight')
        .classList.add('goThisWay');

      //---- Highlights the text "Other Skills" when hero swims over it
    } else if (Number(Hero.style.left.slice(0, -2)) <= 200) {
      document.querySelector('.seabed__go-textLeft').classList.add('goThisWay');

      //---- Erases both highlights when hero swims anywhere else
    } else {
      document
        .querySelector('.seabed__go-textRight')
        .classList.remove('goThisWay');
      document
        .querySelector('.seabed__go-textLeft')
        .classList.remove('goThisWay');
    }

    // ======== WHEN the Hero crosses the RIGHT border of the screen
    if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 50) {
      this.setState({ hideInstructions: true });

      Hero.style.transition = 'none';
      Hero.style.left = '-30px';
      setTimeout(() => (Hero.style.transition = 'all ease 1s'), 10);

      //---- If Hero is coming from frame "left" (OtherSkills) sets scenario to "center"
      if (this.state.frame === 'left') {
        document
          .querySelector('.seabed__go--experiences')
          .classList.remove('hidden');
        document
          .querySelector('.seabed__go--otherSkills')
          .classList.remove('hidden');
        document.querySelector('.seabed__anna').classList.remove('hidden');
        this.setState(prevState => ({
          otherSkills: {
            ...prevState.otherSkills,
            active: false
          },
          frame: 'center'
        }));

        //---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "right" (Experiences)
      } else if (this.state.frame === 'center') {
        document
          .querySelector('.seabed__go--experiences')
          .classList.add('hidden');
        document
          .querySelector('.seabed__go--otherSkills')
          .classList.add('hidden');
        document.querySelector('.seabed__anna').classList.add('hidden');
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
      Hero.style.left = window.innerWidth - 200 + 'px';
      setTimeout(() => (Hero.style.transition = 'all ease 1s'), 10);

      //---- If Hero is coming from frame "right" (Experiences) sets scenario to "center"
      if (this.state.frame === 'right') {
        document
          .querySelector('.seabed__go--experiences')
          .classList.remove('hidden');
        document
          .querySelector('.seabed__go--otherSkills')
          .classList.remove('hidden');
        document.querySelector('.seabed__anna').classList.remove('hidden');
        this.setState(prevState => ({
          experiences: {
            ...prevState.experiences,
            active: false
          },
          frame: 'center'
        }));

        //---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "left" (OtherSkills)
      } else if (this.state.frame === 'center') {
        document
          .querySelector('.seabed__go--experiences')
          .classList.add('hidden');
        document
          .querySelector('.seabed__go--otherSkills')
          .classList.add('hidden');
        document.querySelector('.seabed__anna').classList.add('hidden');
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
    window.removeEventListener('keyup', this.moveHero);

    document.querySelector('.seabed__go--experiences').classList.add('hidden');
    document.querySelector('.seabed__go--otherSkills').classList.add('hidden');

    setTimeout(() => {
      clearTimeout(floatRight);
      clearTimeout(floatLeft);
      Hero.src = SwimmingRight;
      Hero.classList.remove('floating-soft');
      Hero.classList.add('goingUp');
      Hero.style.transition = 'all ease 10s';
      Hero.style.top = '40%';
    }, 2000);
    setTimeout(() => (Hero.style.top = '-200px'), 2500);

    if (!window.matchMedia('(min-width: 768px)').matches) {
      this.props.resetScrollPosition(2000);
    } else {
      this.props.resetScrollPosition(8000);
    }

    setTimeout(() => {
      //-- Resets component to its initial state
      this.setState(INITIAL_STATE);
      document
        .querySelector('.seabed__go--experiences')
        .classList.remove('hidden');
      document
        .querySelector('.seabed__go--otherSkills')
        .classList.remove('hidden');
      document
        .querySelector('.seabed__go-textRight')
        .classList.remove('goThisWay');
      document
        .querySelector('.seabed__go-textLeft')
        .classList.remove('goThisWay');
      window.addEventListener('keyup', this.moveHero);

      //-- Triggers thank you message on first screen
      this.props.triggerThankYouMessage();

      //-- Puts Hero on its initial position
      Hero.classList.add('floating-soft');
      Hero.classList.remove('goingUp');
      Hero.style.top = '40%';
      Hero.style.left = window.innerWidth * 0.4 + 'px';
      Hero.src = FloatingRight;
      Hero.style.transition = 'all ease 1s';
    }, 8050);
  };

  render() {
    const {
      hideInstructions,
      experiences,
      otherSkills,
      heroThinks
    } = this.state;
    const { texts, textsExperiences, textsOtherSkills } = this.props;

    return (
      <section className="section__seabed">
        {window.matchMedia('(min-width: 768px)').matches && !hideInstructions && (
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

        {window.matchMedia('(max-width: 768px)').matches &&
          !experiences.read &&
          !otherSkills.red && (
            <Fragment>
              <p className="seabed__findSomething floating-soft">
                {texts.find}
              </p>
              <p className="seabed__findSomething floating-soft">
                {texts.find2}
              </p>
            </Fragment>
          )}

        <div className="seabed__go--experiences floating floating-delay">
          <p className="seabed__go-text seabed__go-textRight">
            {texts.experiences}
          </p>
        </div>
        <div className="seabed__go--otherSkills floating">
          <p className="seabed__go-text seabed__go-textLeft">{texts.skills}</p>
        </div>

        <img
          src={FloatingRight}
          id="hero"
          className="seabed__hero floating-soft"
          alt=""
        />

        <div className="seabed__image">
          <p className="seabed__anna">Anna Branco</p>
        </div>

        {experiences.active &&
          window.matchMedia('(min-width: 768px)').matches && (
            <Experiences
              texts={textsExperiences}
              status={experiences}
              onClickOpen={this.onClickOpen}
              onClickClose={this.onClickClose}
            />
          )}

        {otherSkills.active &&
          window.matchMedia('(min-width: 768px)').matches && (
            <OtherSkills
              texts={textsOtherSkills}
              status={otherSkills}
              onClickOpen={this.onClickOpen}
              onClickClose={this.onClickClose}
            />
          )}

        {experiences.read && otherSkills.read && (
          <p className="seabed__back">{texts.time2go}</p>
        )}

        {heroThinks !== undefined && (
          <p className="hero__thinks">{texts.thoughts[heroThinks]}</p>
        )}
      </section>
    );
  }
}
