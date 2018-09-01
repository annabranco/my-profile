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

		const text = this.props.texts.Experiences;
		const language = this.props.language;

		return (

			<React.Fragment>

				{!this.state.read ?
					<React.Fragment>
						<p className="seabed__findSomething">{text[language].find}</p>
						<p className="seabed__findSomething">{text[language].investigate}</p>
					</React.Fragment>
				: null
				}

				<div className="otherSkills__mac">
					<div className="otherSkills__mac--screen">

						<section className="section__otherSkills" onClick={this.open}>

							<img src={MacBar} alt="" className="skills--topBar"/>
							<div className="skills__outer skills__outer--languages">
								<h2 className="skills__table--title">Languages</h2>
								<table className="skills__table skills__table--languages">
									<tbody>
										<tr>
										    <td>English<img src="https://www.countryflags.io/us/flat/16.png" alt="" className="languages--flag" /></td>
										    <td><i className="fas fa-comments icon--languages" title="Speaking"></i>Fluent</td>
										    <td><i className="fas fa-book-open icon--languages" title="Reading"></i>Fluent</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>Fluent</td>
										</tr>
										<tr>
										    <td>Spanish<img src="https://www.countryflags.io/es/flat/16.png" alt="" className="languages--flag" /></td>
										    <td><i className="fas fa-comments icon--languages" title="Speaking"></i>Fluent</td>
										    <td><i className="fas fa-book-open icon--languages" title="Reading"></i>Fluent</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>Fluent</td>
										</tr>
										<tr>
											<td>Portuguese<img src="https://www.countryflags.io/br/flat/16.png" alt="" className="languages--flag" /></td>
											<td><i className="fas fa-comments icon--languages" title="Speaking"></i>Fluent</td>
											<td><i className="fas fa-book-open icon--languages" title="Reading"></i>Fluent</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>Fluent</td>
										</tr>
										<tr>
											<td>French<img src="https://www.countryflags.io/fr/flat/16.png" alt="" className="languages--flag" /></td>
											<td><i className="fas fa-comments icon--languages" title="Speaking"></i>Intermediate</td>
											<td><i className="fas fa-book-open icon--languages" title="Reading"></i>Intermediate</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>Basic</td>
										</tr>
									 	<tr>
											<td>Russian<img src="https://www.countryflags.io/ru/flat/16.png" alt="" className="languages--flag" /></td>
											<td><i className="fas fa-comments icon--languages" title="Speaking"></i>Basic</td>
											<td><i className="fas fa-book-open icon--languages" title="Reading"></i>Basic</td>
											<td><i className="fas fa-pen icon--languages" title="Writing"></i>Basic</td>
									 	</tr>
									</tbody>
								</table>
							</div>

							<div className="skills__outer skills__outer--other">
								<h2 className="skills__table--title">Other skills</h2>
								<table className="skills__table skills__table--other">
									<thead>
										<tr>
											<th>Skill</th>
											<th>How I have developed it</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Working under pressure</td>
											<td>More than 5 years as volunteer on ambulances and emergencies</td>
										</tr>
										<tr>
											<td>Leadership</td>
											<td>More than 3 years of professional experience managing different teams</td>
										</tr>
										<tr>
											<td>Communication</td>
											<td>Solid experience teaching, giving formations and speeches</td>
										</tr>
										<tr>
											<td>Empathy</td>
											<td>Psychology formation and humanitarian background</td>
										</tr>
										<tr>
											<td>Flexibility</td>
											<td>Very good experience working within multicultural environments</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="skills__outer skills__outer--design">
								<h2 className="skills__table--title">Graphic design</h2>
								<p className="skills__design">Here are some samples of my design creations:</p>
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
