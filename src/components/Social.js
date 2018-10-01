import React from 'react';

class Social extends React.Component {

	render () {

		const text = this.props.text;
		const language = this.props.language;

		return (

			<div className="hero__social">
				<div className="hero__social--inner">
					<a className="hero__social--link-mail" href="mailto:anya.branco@icloud.com">
						<i className="far fa-envelope icon-mail"></i>
						<p className="hero__social-text">anya.branco@icloud.com</p>
					</a>
				</div>
				<div className="hero__social--inner">
					<a className="hero__social--link" href="https://github.com/annabranco" target="_Blank" rel="noopener noreferrer">
						<i className="fab fa-github-alt icon-github"></i>
						<p className="hero__social-text">Github</p>
					</a>
				</div>
				<div className="hero__social--inner">
					<a className="hero__social--link" href="https://www.linkedin.com/in/annabranco/" target="_Blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin-in icon-linkedin"></i>
						<p className="hero__social-text">LinkedIn</p>
				</a>
				</div>
				<div className="hero__social--inner">
					<a className="hero__social--link" href="https://twitter.com/AnyaBranco" target="_Blank" rel="noopener noreferrer">
						<i className="fab fa-twitter icon-twitter"></i>
						<p className="hero__social-text">Twitter</p>
				</a>
				</div>
				<div className="hero__social--inner hero__social--link">
					<a className="hero__social--link hero__social--link-skype" href="skype:live%3Aanna.branco_3?call">
						<i className="fab fa-skype icon-call"></i>
						<p className="hero__social-text">{text[language].call}</p>
					</a>
					<a className="hero__social--link hero__social--link-skype" href="skype:live%3Aanna.branco_3?chat">
						<i className="fas fa-comments icon-chat"></i>
						<p className="hero__social-text">{text[language].chat}</p>
					</a>
				</div>
			</div>

		);
	}

}

export default Social;
