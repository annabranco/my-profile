import React from 'react';
import ScrollArea from './ScrollArea';
import Languages from './Languages';
import InfoArea from './InfoArea';

class MainArea extends React.Component {

  render () {

    return (

      <main className="main__outer">
        <section className="main__intro">

            <InfoArea />

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
