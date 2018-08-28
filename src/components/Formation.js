import React from 'react';
import '../styles/components/Formation.css';

class Formation extends React.Component {

	render () {

		return (

			<section className="section__formation">
				<div className="formation__outer">
					<div className="formation__inner">
						<div className="formation__inner--year">1999 - 2005</div>
						<div className="formation__inner--year">2007 - 2011</div>

						<div className="formation__inner--year">2012 - 2013</div>

						<div className="formation__inner--year">2018</div>

					</div>
					<div className="formation__inner">
						<div className="formation__verticalBar"></div>
					</div>
					<div className="formation__inner">
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-psi"></div>
							<h2 className="formation__title">Psychology</h2>
						</div>
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-ri"></div>
							<h2 className="formation__title">International Relations</h2>
						</div>
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-master"></div>
							<h2 className="formation__title">Master in International Relations</h2>
						</div>
						<div className="formation__inner--horizontalBar">
							<div className="formation__horizontarBar-adalab"></div>
							<h2 className="formation__title">Adalab</h2>
						</div>
					</div>

				</div>
			</section>


		);
	}

}

export default Formation;
