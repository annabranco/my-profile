import React from 'react';
import Hero from './Hero';
import InfoArea from './InfoArea';
import ScrollArea from './ScrollArea';
import Languages from './Languages';

class MainArea extends React.Component {

  render () {

    return (

      <main className="main__outer">
        <section className="main__intro">

          <Hero
						texts={this.props.texts}
						language={this.props.language}
 					/>

        </section>

        <ScrollArea
          showText={this.props.showText}
          bgs={this.props.bgs}
          blockContents={this.props.blockContents}
          language={this.props.language}
        />
        <Languages
          language={this.props.language}
          changeLanguage={this.props.changeLanguage}
        />
      </main>


    );
  }

}

export default MainArea;
