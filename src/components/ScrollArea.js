import React from 'react';
import InbetweenBar from './InbetweenBar';
import Developer from './Developer';
import Formation from './Formation';
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

      	</section>
    );
  }

}

export default ScrollArea;
