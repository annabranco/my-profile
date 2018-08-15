import React from 'react';
import ScrollArea from './ScrollArea';

class MainArea extends React.Component {

  render () {

    return (

      <main className="main__outer">
        <section className="main__intro">
          <div className="images img0"></div>
        </section>
        <ScrollArea />

      </main>


    );
  }

}

export default MainArea;
