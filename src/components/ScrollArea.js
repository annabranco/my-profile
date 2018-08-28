import React from 'react';
import InbetweenBar from './InbetweenBar';
import Developer from './Developer';
import Formation from './Formation';
import ScrollItem from './ScrollItem';
import '../styles/components/ScrollArea.css';


class ScrollArea extends React.Component {


  // determineBlocks() {
  //   let BlocksToRender = [];
  //
  //   for (let i = 0; i < 7; i++) {
  //     BlocksToRender.push(
  //
  //       <ScrollItem
  //           num={i}
  //           bg={`url('${this.props.bgs[i]}')`}
  //           handleAnimation={this.props.handleAnimation}
  //           title={this.props.blockContents[i][this.props.language].title}
  //       />
  //     ) ;
  //   }
  //   return BlocksToRender;
  // }


  render () {

    return (
      	<section className="main__images">


			<InbetweenBar title={this.props.texts.Developer[this.props.language].title} />
			<Developer
				  texts={this.props.texts}
				  language={this.props.language}
			/>

			<InbetweenBar texts={this.props.texts} />
			<Formation
				  texts={this.props.texts}
				  language={this.props.language}
			/>

      	</section>
    );
  }

}

export default ScrollArea;
