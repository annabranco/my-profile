import React from 'react';
import Hero from './Hero';
import ScrollArea from './ScrollArea';
import Languages from './Languages';

class MainArea extends React.Component {

  render () {

    return (

      <main className="main__outer">
        	<div className="main__intro">

	          	<Hero
					texts={this.props.texts}
					language={this.props.language}
	 			/>

        	</div>

	        <ScrollArea
		        handleAnimation={this.props.handleAnimation}
				texts={this.props.texts}
		        language={this.props.language}
				handleAdjustExpandedProjectsView={this.props.handleAdjustExpandedProjectsView}
	        />

			{!this.props.doNotShowLanguagePopupAgain ?
		        <Languages
		          	language={this.props.language}
		          	changeLanguage={this.props.changeLanguage}
					clearLanguagePopup={this.props.clearLanguagePopup}
		        />
			: null }

      </main>


    );
  }

}

export default MainArea;
