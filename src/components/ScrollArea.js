import React from 'react';
import InbetweenBar from './InbetweenBar';
import Developer from './Developer';
import ScrollItem from './ScrollItem';
import '../styles/components/ScrollArea.css';


class ScrollArea extends React.Component {


  determineBlocks() {
    let BlocksToRender = [];

    for (let i = 0; i < 7; i++) {
      BlocksToRender.push(

        <ScrollItem
            num={i}
            bg={`url('${this.props.bgs[i]}')`}
            showText={this.props.showText}
            title={this.props.blockContents[i][this.props.language].title}
        />
      ) ;
    }
    return BlocksToRender;
  }


  render () {



    return (
      <section className="main__images">

		<InbetweenBar
			texts={this.props.texts}
		/>
		<Developer
			  texts={this.props.texts}
			  language={this.props.language}
		/>

        {this.determineBlocks()}

      </section>
    );
  }

}

export default ScrollArea;
