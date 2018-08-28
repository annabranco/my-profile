import React from 'react';
import '../styles/components/InbetweenBar.css';

class InbetweenBar extends React.Component {

	render () {

		return (

			<div className="innertext--between">{this.props.title}</div>

		);
	}

}

export default InbetweenBar;
