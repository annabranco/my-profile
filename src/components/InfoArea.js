import React from 'react';
import AnnaLogo from '../images/logo-anna-rabbit.gif';
import '../styles/components/InfoArea.css';

class InfoArea extends React.Component {

  render () {

    return (
      <div className="images img0 ">
        <section className="section__info">


          <img src={AnnaLogo} alt="" className="anna-logo"/>
          <div className="warnings">
            <p className="warning">Currently, it can only be correctly viewed on desktop version.</p>
            <p className="warning">De momento, solo puede ser visualizada correctamente en versión desktop.</p>
          </div>
          <i class="fas fa-angle-double-down scroll-icon anim1"></i>
          <i class="fas fa-angle-double-down scroll-icon anim2"></i>
          <i class="fas fa-angle-double-down scroll-icon anim3"></i>


        </section>

      </div>
    );
  }

}

export default InfoArea;
