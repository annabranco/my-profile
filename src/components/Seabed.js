import React from 'react';
import '../styles/components/Seabed.css';
import floatingRight from '../images/other/floatingRight.gif';
import floatingLeft from '../images/other/floatingLeft.gif';
import swimmingRight from '../images/other/swimmingRight.gif';
import swimmingLeft from '../images/other/swimmingLeft.gif';
import Experiences from './Experiences';
import OtherSkills from './OtherSkills';

let floatLeft;
let floatRight;
let Hero;
let thoughts = 0;

class Seabed extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			hideInstructions: false,
			showExperiences: false,
			viewedExperiences: false,
			showOtherSkills: false,
			viewedOtherSkills: false,
			frame: 'center',
			heroThinks: undefined,
			readComponents: {
				Experiences: false,
				OtherSkills: false
			}
		}
	}

	componentDidMount() {
		window.addEventListener('keyup',this.moveHero);
		Hero = document.querySelector('#hero');
		Hero.style.left = (window.innerWidth * 0.40) + 'px';
	}

	componentDidUpdate() {
		if ((this.state.readComponents.OtherSkills) && (this.state.readComponents.Experiences) && (!window.matchMedia("(min-width: 768px)").matches)) {
			this.setState({
				readComponents: {
					Experiences: false,
					OtherSkills: false
				}
			});
			this.goBackUp();
			this.props.userViewedAllComponents();
		}
	}

	moveHero = e => {
		if ( e.key === 'ArrowRight' ) {

			//---- Prevents movement beyond right margin on frame 'right'
			if ((Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 300) && (this.state.frame === 'right')) {
				this.heroThinks('right');
				return;

			} else {
				this.setState({ heroThinks: undefined })
				clearTimeout(floatRight);
				clearTimeout(floatLeft);
				Hero.src = swimmingRight;
				Hero.style.left = (Number(Hero.style.left.slice(0, -2)) + 250) + 'px';
				Hero.classList.add('swim');
				floatRight = setTimeout(() => {
					Hero.src = floatingRight;
					Hero.classList.remove('swim');
				},3000);
			}
		} else if ( e.key === 'ArrowLeft' ) {

			//---- Prevents movement beyond left margin on frame 'left'
			if ((Number(Hero.style.left.slice(0, -2)) <= 200) && (this.state.frame === 'left')) {
				this.heroThinks('left');
				return;

			} else {
				this.setState({ heroThinks: undefined })
				clearTimeout(floatRight);
				clearTimeout(floatLeft);
				Hero.src = swimmingLeft;
				Hero.style.left = (Number(Hero.style.left.slice(0, -2)) - 250) + 'px';
				Hero.classList.add('swim');
				floatLeft = setTimeout(() => {
					Hero.src = floatingLeft;
					Hero.classList.remove('swim');
				},3000);
			}
		}
		this.moveToSomewhere();
	}

//======== Function that fires events when Hero reaches some specific places
	moveToSomewhere = () => {

//---- WHEN the Hero has viewed all components (Experience and OtherSkills), he goes up
		if ((this.state.readComponents.OtherSkills) && (this.state.readComponents.Experiences) && (this.state.frame === 'center')) {
			this.goBackUp();
		}

//---- Highlights the text "Previous Experiences" when hero swims over it
		if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 400) {
			document.querySelector('.seabed__go-textRight').classList.add('goThisWay');

//---- Highlights the text "Other Skills" when hero swims over it
		} else if (Number(Hero.style.left.slice(0, -2)) <= 200) {
			document.querySelector('.seabed__go-textLeft').classList.add('goThisWay');

//---- Erases both highlights when hero swims anywhere else
		} else {
			document.querySelector('.seabed__go-textRight').classList.remove('goThisWay');
			document.querySelector('.seabed__go-textLeft').classList.remove('goThisWay');
		}

// ======== WHEN the Hero crosses the RIGHT border of the screen
		if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth -50 ) {

			this.setState({ hideInstructions: true });

			Hero.style.transition = 'none';
			Hero.style.left = '-30px';
			setTimeout(()=> Hero.style.transition = 'all ease 1s',10);

//---- If Hero is coming from frame "left" (OtherSkills) sets scenario to "center"
			if (this.state.frame === 'left') {

				document.querySelector('.seabed__go--experiences').classList.remove('hidden');
				document.querySelector('.seabed__go--otherSkills').classList.remove('hidden');
				document.querySelector('.seabed__anna').classList.remove('hidden');
				this.setState({
					showOtherSkills: false,
					frame: 'center',
					viewedOtherSkills: true,
 				});

//---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "right" (Experiences)
			} else if (this.state.frame === 'center') {

				document.querySelector('.seabed__go--experiences').classList.add('hidden');
				document.querySelector('.seabed__go--otherSkills').classList.add('hidden');
				document.querySelector('.seabed__anna').classList.add('hidden');
				this.setState({
					showExperiences: true,
					frame: 'right'
				})
			}
		}

// ======== WHEN the Hero crosses the LEFT border of the screen
		if (Number(Hero.style.left.slice(0, -2)) <=  -200 ) {

			this.setState({ hideInstructions: true });

			Hero.style.transition = 'none';
			Hero.style.left = window.innerWidth -200 + 'px';
			setTimeout(()=> Hero.style.transition = 'all ease 1s',10);

//---- If Hero is coming from frame "right" (Experiences) sets scenario to "center"
			if (this.state.frame === 'right') {

				document.querySelector('.seabed__go--experiences').classList.remove('hidden');
				document.querySelector('.seabed__go--otherSkills').classList.remove('hidden');
				document.querySelector('.seabed__anna').classList.remove('hidden');
				this.setState({
					showExperiences: false,
					frame: 'center',
					viewedExperiences: true,
				 });

//---- If Hero is coming from frame "center" (basic Seabed) sets scenario to "left" (OtherSkills)
			} else if (this.state.frame === 'center') {

				document.querySelector('.seabed__go--experiences').classList.add('hidden');
				document.querySelector('.seabed__go--otherSkills').classList.add('hidden');
				document.querySelector('.seabed__anna').classList.add('hidden');
				this.setState({
					showOtherSkills: true,
					frame: 'left'
				})
			}
		}
	}

// ======== All page viewed. Reset all states and go back to first page

	goBackUp = () => {
		window.removeEventListener('keyup',this.moveHero);

		document.querySelector('.seabed__go--experiences').classList.add('hidden');
		document.querySelector('.seabed__go--otherSkills').classList.add('hidden');

		setTimeout(()=> {
			clearTimeout(floatRight);
			clearTimeout(floatLeft);
			Hero.src = swimmingRight;
			Hero.classList.remove('floating-soft');
			Hero.classList.add('goingUp');
			Hero.style.transition = 'all ease 10s'
			Hero.style.top = '40%';

		},2000);
		setTimeout(()=> Hero.style.top = '-200px',2500);

		if (!window.matchMedia("(min-width: 768px)").matches) {
			setTimeout(()=> window.scrollTo(0, 0),2000);
		} else {
			setTimeout(()=> window.scrollTo(0, 0),8000);
		}

		setTimeout(()=> {

			//-- Resets component to its initial state
			this.setState({
				hideInstructions: false,
				showExperiences: false,
				viewedExperiences: false,
				showOtherSkills: false,
				viewedOtherSkills: false,
				frame: 'center',
				heroThinks: undefined,
				readComponents: {
					Experiences: false,
					OtherSkills: false
				}
			});
			document.querySelector('.seabed__go--experiences').classList.remove('hidden');
			document.querySelector('.seabed__go--otherSkills').classList.remove('hidden');
			document.querySelector('.seabed__go-textRight').classList.remove('goThisWay');
			document.querySelector('.seabed__go-textLeft').classList.remove('goThisWay');
			window.addEventListener('keyup',this.moveHero);

			//-- Triggers thank you message on first screen
			this.props.userViewedAllComponents();

			//-- Puts Hero on its initial position
			Hero.classList.add('floating-soft');
			Hero.classList.remove('goingUp');
			Hero.style.top = '40%';
			Hero.style.left = (window.innerWidth * 0.40) + 'px';
			Hero.src = floatingRight;
			Hero.style.transition = 'all ease 1s';

		},8050);
	}

// ======== Triggers a random thought when the Hero reaches any border.
	heroThinks = side => {

	this.setState({ heroThinks: thoughts })
	thoughts++;

	document.querySelector('.hero__thinks').style[side] = '40px';

	}

// ======== Marks components as read, so when both were read the Hero can go up
	markExperiencesAsRead = () => {
		this.setState({
			 readComponents: { ... this.state.readComponents,
				 Experiences: true
			 }
		 });
	}

	markOtherSkillsAsRead = () => {
		this.setState({
			 readComponents: { ... this.state.readComponents,
				 OtherSkills: true
			 }
		 });
	}

	render () {

		const text = this.props.texts.Seabed;
		const language = this.props.language;

		return (

			<section className="section__seabed">
				{this.state.hideInstructions || !window.matchMedia("(min-width: 768px)").matches ?
				null :

				<div className="seabed__message--outer floating-soft">
					<p className="seabed__message">{text[language].message}</p>
					<p className="seabed__message seabed__message-keyboard">{text[language].messageKeyboard}</p>
					<p className="seabed__message seabed__message-devices">{text[language].messageDevices}</p>
				</div>
				}

				{!window.matchMedia("(min-width: 768px)").matches && !this.state.readComponents.Experiences && !this.state.readComponents.OtherSkills ?
					<React.Fragment>
						<p className="seabed__findSomething floating-soft">{text[language].find}</p>
						<p className="seabed__findSomething floating-soft">{text[language].find2}</p>
					</React.Fragment>
				: null
				}

				<div className="seabed__go--experiences floating floating-delay">
						<p className="seabed__go-text seabed__go-textRight">{text[language].experiences}</p>
				</div>
				<div className="seabed__go--otherSkills floating">
					<p className="seabed__go-text seabed__go-textLeft">{text[language].skills}</p>
				</div>

				<img src={floatingRight} id="hero" className="seabed__hero floating-soft" alt=""/>

				<div className="seabed__image"><p className="seabed__anna">Anna Branco</p></div>

				{this.state.showExperiences || 	!window.matchMedia("(min-width: 768px)").matches ?
					<Experiences
						texts={this.props.texts}
						language={this.props.language}
						viewedExperiences={this.state.viewedExperiences}
						markAsRead={this.markExperiencesAsRead}
					/>
				: null
				}

				{this.state.showOtherSkills || !window.matchMedia("(min-width: 768px)").matches ?
							<OtherSkills
								texts={this.props.texts}
								language={this.props.language}
								viewedOtherSkills={this.state.viewedOtherSkills}
								markAsRead={this.markOtherSkillsAsRead}
							/>
				: null
				}

				{this.state.readComponents.OtherSkills && this.state.readComponents.Experiences ?
					<p className="seabed__back">{text[language].time2go}</p>
				: null
				}

				{this.state.heroThinks !== undefined ?
					<p className="hero__thinks">{text[language].thoughts[this.state.heroThinks]}</p>
				: null
				}

			</section>


		);
	}
}

export default Seabed;
