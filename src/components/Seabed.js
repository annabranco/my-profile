import React from 'react';
import '../styles/components/Seabed.css';
import floatingRight from '../images/other/floatingRight.gif';
import floatingLeft from '../images/other/floatingLeft.gif';
import swimmingRight from '../images/other/swimmingRight.gif';
import swimmingLeft from '../images/other/swimmingLeft.gif';
import Experiences from './Experiences';

let floatLeft;
let floatRight;
let Hero;

class Seabed extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			hideInstructions: false,
			showExperiences: false,
			showOtherSkills: false,
			reachRight: false,
			countReachRight: 0,
			reachLeft: false,
			countReachLeft: 0
		}

	}

	componentDidMount() {
		window.addEventListener('keydown',this.moveHero);
		Hero = document.querySelector('#hero');
		Hero.style.left = (window.innerWidth * 0.40) + 'px';
	}

	moveHero = e => {
		this.setState({ hideInstructions: true });
		if ( e.key === 'ArrowRight' ) {
			if ((this.state.showExperiences) && (this.state.reachRight)) {
				this.setState(prevState => ({ countReachRight: prevState.countReachRight + 1 }));

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
			this.setState({ reachRight: false });
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

	moveToSomewhere = () => {
		console.log(Hero.style.left);
		if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth - 300) {
			document.querySelector('.seabed__go-textRight').classList.add('goThisWay');
			this.setState({ reachRight: true });

		} else if (Number(Hero.style.left.slice(0, -2)) <= 200) {
			document.querySelector('.seabed__go-textLeft').classList.add('goThisWay');
			this.setState({ reachLeft: true });
			this.setState(prevState => ({ countReachLeft: prevState.countReachLeft + 1 }));

		} else {
			document.querySelector('.seabed__go-textRight').classList.remove('goThisWay');
			document.querySelector('.seabed__go-textLeft').classList.remove('goThisWay');
		}

		if (Number(Hero.style.left.slice(0, -2)) >= window.innerWidth -100 ) {

			this.setState({
				showExperiences: true,
				showOtherSkills: false
			})
			Hero.style.transition = 'none';
			Hero.style.left = '-100px';
			document.querySelector('.seabed__go--experiences').classList.add('hidden');
			document.querySelector('.seabed__go--otherSkills').classList.add('hidden');
			document.querySelector('.seabed__anna').classList.add('hidden');
			setTimeout(()=> Hero.style.transition = 'left ease 1s',500);
		}

		if (Number(Hero.style.left.slice(0, -2)) <=  -300 ) {

			this.setState({ showExperiences: false });

			Hero.style.transition = 'none';
			Hero.style.left = window.innerWidth -200 + 'px';
			setTimeout(()=> Hero.style.transition = 'left ease 1s',500);

			if ((!this.state.showExperiences) && (!this.state.showOtherSkills)) {

				document.querySelector('.seabed__go--experiences').classList.remove('hidden');
				document.querySelector('.seabed__go--otherSkills').classList.remove('hidden');
				document.querySelector('.seabed__anna').classList.remove('hidden');

			}

			//this.setState({ showOtherSkills: true});


		}




	}


	render () {

		return (

			<section className="section__seabed">
				{this.state.hideInstructions ? null :

				<div className="seabed__message--outer floating-soft">
					<p className="seabed__message">Beyond developing webpages and applications, I love to experiment developing videogames, promoting interactivity with the user and lots of fun.</p>
					<p className="seabed__message seabed__message-keyboard">Now you know my basic profile. If you want more information about previous experiences or other skills, move the scuba diver to the desired direction using arrows keys on your keyboard.</p>
					<p className="seabed__message seabed__message-devices">Now you know my basic profile. If you want more information about previous experiences or other skills, move the scuba diver to the desired direction using the arrows keys on the sides.</p>
				</div>
				}

				<div className="seabed__go--experiences floating">
						<p className="seabed__go-text seabed__go-textRight">Previous experiences</p>
				</div>
				<div className="seabed__go--otherSkills floating">
					<p className="seabed__go-text seabed__go-textLeft">Other skills</p>
				</div>

				<img src={floatingRight} id="hero" className="seabed__hero floating-soft" alt=""/>
				<div className="seabed__image"><p className="seabed__anna">Anna Branco</p></div>

				{this.state.showExperiences ?
					<Experiences
						texts={this.props.texts}
						language={this.props.language}
					/>
				: null
				}

				{this.state.reachRight && this.state.countReachRight === 2 ?
					<p className="hero__says">Yeah. I too would love to explore around, but we have to focus on the professional profile, right?</p>
				: null
				}
			</section>


		);
	}

}

export default Seabed;
