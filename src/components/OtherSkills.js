import React from 'react';
import '../styles/components/OtherSkills.css';
import MacBar from '../images/bg/bg-mac.jpg';

class OtherSkills extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			opened: false,
			read: false
		}
	}


		open = () => {
			if (!this.state.opened) {

				this.setState({
					opened: true,
					read: true
				 });
				document.querySelector('.section__otherSkills').classList.add('opened');
				document.querySelector('.otherSkills__mac').classList.add('opened');
				document.querySelector('.otherSkills__mac--screen').classList.add('opened');
				document.querySelector('.otherSkills__mac--keyboard').classList.add('hidden');
				document.querySelector('.otherSkills__mac--keyboard-keyArea').classList.add('hidden');
				this.props.markAsRead();

			} else {

				this.setState({ opened: false });
				document.querySelector('.section__otherSkills').classList.remove('opened');
				document.querySelector('.otherSkills__mac').classList.remove('opened');
				document.querySelector('.otherSkills__mac--screen').classList.remove('opened');
				document.querySelector('.otherSkills__mac--keyboard').classList.remove('hidden');
				document.querySelector('.otherSkills__mac--keyboard-keyArea').classList.remove('hidden');
			}
		}

	render () {

		const text = this.props.texts.OtherSkills;
		const language = this.props.language;

		return (

			<React.Fragment>

				{!this.props.viewedOtherSkills && !this.state.read ?
					<React.Fragment>
						<p className="seabed__findSomething">{text[language].find}</p>
						<p className="seabed__findSomething">{text[language].find2}</p>
						<p className="seabed__findSomething">{text[language].investigate}</p>
					</React.Fragment>
				: null
				}

				<div className="otherSkills__mac">
					<div className="otherSkills__mac--screen">

						<section className="section__otherSkills" onClick={this.open}>

							<img src={MacBar} alt="" className="skills--topBar"/>
							<p className="seabed__click2close seabed__click2close-otherSkills">{this.props.texts.Seabed[language].click2close}</p>

							<div className="skills__outer skills__outer--languages">
								<h2 className="skills__table--title">{text[language].languages}</h2>
								<table className="skills__table skills__table--languages">
									<tbody>
										<tr>
										    <td>{text[language].english}<img src="https://www.countryflags.io/us/flat/16.png" alt="" className="languages--flag" /></td>
										    <td><i className="fas fa-comments icon--languages" title="Speaking"></i>{text[language].fluent}</td>
										    <td><i className="fas fa-book-open icon--languages" title="Reading"></i>{text[language].fluent}</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>{text[language].fluent}</td>
										</tr>
										<tr>
										    <td>{text[language].spanish}<img src="https://www.countryflags.io/es/flat/16.png" alt="" className="languages--flag" /></td>
										    <td><i className="fas fa-comments icon--languages" title="Speaking"></i>{text[language].fluent}</td>
										    <td><i className="fas fa-book-open icon--languages" title="Reading"></i>{text[language].fluent}</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>{text[language].fluent}</td>
										</tr>
										<tr>
											<td>{text[language].portuguese}<img src="https://www.countryflags.io/br/flat/16.png" alt="" className="languages--flag" /></td>
											<td><i className="fas fa-comments icon--languages" title="Speaking"></i>{text[language].fluent}</td>
											<td><i className="fas fa-book-open icon--languages" title="Reading"></i>{text[language].fluent}</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>{text[language].fluent}</td>
										</tr>
										<tr>
											<td>{text[language].french}<img src="https://www.countryflags.io/fr/flat/16.png" alt="" className="languages--flag" /></td>
											<td><i className="fas fa-comments icon--languages" title="Speaking"></i>{text[language].intermediate}</td>
											<td><i className="fas fa-book-open icon--languages" title="Reading"></i>{text[language].intermediate}</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>{text[language].basic}</td>
										</tr>
									 	<tr>
											<td>{text[language].russian}<img src="https://www.countryflags.io/ru/flat/16.png" alt="" className="languages--flag" /></td>
											<td><i className="fas fa-comments icon--languages" title="Speaking"></i>{text[language].basic}</td>
											<td><i className="fas fa-book-open icon--languages" title="Reading"></i>{text[language].basic}</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>{text[language].basic}</td>
									 	</tr>
									</tbody>
								</table>
							</div>

							<div className="skills__outer skills__outer--other">
								<h2 className="skills__table--title">{text[language].other}</h2>
								<table className="skills__table skills__table--other">
									<thead>
										<tr>
											<th>{text[language].skill}</th>
											<th>{text[language].how}</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{text[language].skill1}</td>
											<td>{text[language].skill1details}</td>
										</tr>
										<tr>
											<td>{text[language].skill2}</td>
											<td>{text[language].skill2details}</td>
										</tr>
										<tr>
											<td>{text[language].skill3}</td>
											<td>{text[language].skill3details}</td>
										</tr>
										<tr>
											<td>{text[language].skill4}</td>
											<td>{text[language].skill4details}</td>
										</tr>
										<tr>
											<td>{text[language].skill5}</td>
											<td>{text[language].skill5details}</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="skills__outer skills__outer--design">
								<h2 className="skills__table--title">{text[language].design}</h2>
								<p className="skills__design">{text[language].samples}</p>
								<div className="skills__design--samples">
								<img src="https://via.placeholder.com/300x200/fff5f4/000?text=sample" alt="" className="design__sample"/>
								<img src="https://via.placeholder.com/300x200/fff5f4/000?text=sample" alt="" className="design__sample"/>
								<img src="https://via.placeholder.com/300x200/fff5f4/000?text=sample" alt="" className="design__sample"/>
								<img src="https://via.placeholder.com/300x200/fff5f4/000?text=sample" alt="" className="design__sample"/>
								<img src="https://via.placeholder.com/300x200/fff5f4/000?text=sample" alt="" className="design__sample"/>
								<img src="https://via.placeholder.com/300x200/fff5f4/000?text=sample" alt="" className="design__sample"/>
								</div>
							</div>


						</section>
					</div>
					<div className="otherSkills__mac--keyboard"></div>
					<div className="otherSkills__mac--keyboard-keyArea">
						<p className="otherSkills__mac--keyboard-keys"> . . . . . . . ...</p>
						<p className="otherSkills__mac--keyboard-keys">... . . . . . . ..</p>
						<p className="otherSkills__mac--keyboard-keys">. . . . . . . . . .</p>
						<p className="otherSkills__mac--keyboard-keys">. . . . . . . . . .</p>
						<p className="otherSkills__mac--keyboard-keys">--------- ......</p>
					</div>
				</div>

			</React.Fragment>

		);
	}
}

export default OtherSkills;
