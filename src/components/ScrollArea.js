import React from 'react';
import InbetweenBar from './InbetweenBar';
import Developer from './Developer';
import Formation from './Formation';
import Seabed from './Seabed';
import Knowledges from './Knowledges';
import Experiences from './Experiences';

import '../styles/components/ScrollArea.css';


class ScrollArea extends React.Component {

  render () {

    return (
      	<section className="main__images">


			<InbetweenBar title={this.props.texts.Developer[this.props.language].title} />
			<Developer
				  texts={this.props.texts}
				  language={this.props.language}
				  handleAdjustExpandedProjectsView={this.props.handleAdjustExpandedProjectsView}
			/>

			<InbetweenBar title={this.props.texts.Formation[this.props.language].title}  />
			<Formation
				  texts={this.props.texts}
				  language={this.props.language}
			/>

			<InbetweenBar title={this.props.texts.Seabed[this.props.language].title}  />


			<Seabed
				  texts={this.props.texts}
				  language={this.props.language}
			/>

			{/* <div className="scrollArea__horizontal">
				<Knowledges
					texts={this.props.texts}
					language={this.props.language}
				/>



				<Experiences
					texts={this.props.texts}
					language={this.props.language}
				/>
			</div> */}


      	</section>
    );
  }

}

export default ScrollArea;
