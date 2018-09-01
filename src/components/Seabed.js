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

class Seabed extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			hideInstructions: false,
			showExperiences: false,
			viewedExperiences: false,
			showOtherSkills: false,
			viewedOtherSkills: false,
			countReachRight: 0,
			countReachLeft: 0,
			frame: 'center'
		}
	}

	componentDidMount() {
		window.addEventListener('keydown',this.moveHero);
		Hero = document.querySelector('#hero');
		Hero.style.left = (window.innerWidth * 0.40) + 'px';
	}

	moveHero = e => {
		if ( e.key === 'ArrowRight' ) {
			if ((this.state.showExperiences) && (this.state.frame === 'right')) {
				return;

			} else {
				clearTimeout(floatRight);
				clearTimeout(floatLeft);
				Hero.src = swimmingRight;
				Hero.style.left = (Number(Hero.style.left.slice(0, -2)) + 200) + 'px';
				Hero.classList.add('swim');
				floatRight = setTimeout(() => {
					Hero.src = floatingRight;
					Hero.classList.remove('swim');
				},3000);
			}
		} else if ( e.key === 'ArrowLeft' ) {
			clearTimeout(floatRight);
			clearTimeout(floatLeft);
			Hero.src = swimmingLeft;
			Hero.style.left = (Number(Hero.style.left.slice(0, -2)) - 200) + 'px';
			Hero.classList.add('swim');
			floatLeft = setTimeout(() => {
				Hero.src = floatingLeft;
				Hero.classList.remove('swim');
			},3000);
		}
		this.moveToSomewhere();
	}

//======== Function that fires events when Hero reaches some specific places
	moveToSomewhere = () => {

//---- WHEN the Hero has viewed all components (Experience and OtherSkills), he goes up
		// if ((this.state.viewedExperiences) && (this.state.viewedOtherSkills)) {
		// 	window.removeEventListener('keydown',this.moveHero);
		//
		// 	document.querySelector('.seabed__go--experiences').classList.add('hidden');
		// 	document.querySelector('.seabed__go--otherSkills').classList.add('hidden');
		//
		// 	setTimeout(()=> {
		// 		clearTimeout(floatRight);
		// 		clearTimeout(floatLeft);
		// 		Hero.src = swimmingRight;
		// 		Hero.classList.remove('floating-soft');
		// 		Hero.classList.add('goingUp');
		// 		Hero.style.transition = 'all ease 10s'
		// 		Hero.style.top = '40%';
		//
		// 	},2000);
		// 	setTimeout(()=> Hero.style.top = '-200px',2500);
		// 	setTimeout(()=> window.scrollTo(0, 0),8000);
		// }

//---- Highlights the text "Previous Experiences" when hero swims over it
		if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 300) {
			document.querySelector('.seabed__go-textRight').classList.add('goThisWay');

//---- Highlights the text "Other Skills" when hero swims over it
		} else if (Number(Hero.style.left.slice(0, -2)) <= 200) {
			document.querySelector('.seabed__go-textLeft').classList.add('goThisWay');
			this.setState(prevState => ({ countReachLeft: prevState.countReachLeft + 1 }));

//---- Erases both highlights when hero swims anywhere else
		} else {
			document.querySelector('.seabed__go-textRight').classList.remove('goThisWay');
			document.querySelector('.seabed__go-textLeft').classList.remove('goThisWay');
		}

// ======== WHEN the Hero crosses the RIGHT border of the screen
		if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth -50 ) {

			this.setState(prevState => ({ countReachRight: prevState.countReachRight + 1 }));
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

			this.setState(prevState => ({ countReachLeft: prevState.countReachLeft + 1 }));
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


	render () {

		const text = this.props.texts.Seabed;
		const language = this.props.language;

		return (

			<section className="section__seabed">
				{this.state.hideInstructions ? null :

				<div className="seabed__message--outer floating-soft">
					<p className="seabed__message">{text[language].message}</p>
					<p className="seabed__message seabed__message-keyboard">{text[language].messageKeyboard}</p>
					<p className="seabed__message seabed__message-devices">{text[language].messageDevices}</p>
				</div>
				}

				<div className="seabed__go--experiences floating">
						<p className="seabed__go-text seabed__go-textRight">{text[language].experiences}</p>
				</div>
				<div className="seabed__go--otherSkills floating">
					<p className="seabed__go-text seabed__go-textLeft">{text[language].skills}</p>
				</div>

				<img src={floatingRight} id="hero" className="seabed__hero floating-soft" alt=""/>
				<div className="seabed__image"><p className="seabed__anna">Anna Branco</p></div>

				{this.state.showExperiences ?
					<Experiences
						texts={this.props.texts}
						language={this.props.language}
						viewedExperiences={this.state.viewedExperiences}
					/>
				: null
				}

				{this.state.showOtherSkills ?
							<OtherSkills
								texts={this.props.texts}
								language={this.props.language}
								viewedOtherSkills={this.state.viewedOtherSkills}
							/>
				: null
				}

				{this.state.viewedExperiences && this.state.viewedOtherSkills ?
					<p className="seabed__back">{text[language].time2go}</p>
				: null
				}

				{this.state.frame === 'right' && this.state.countReachRight === 3 ?
					<p className="hero__says">{text[language].me2}</p>
				: null
				}

			</section>


		);
	}
}

export default Seabed;
