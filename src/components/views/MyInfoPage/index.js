import React from 'react';
import { Social } from '../';
import { Mugshot } from '../../../images';

export const MyInfoPage = ({ texts, textsSocial, viewedAll }) => {
  return (
    <section className="section__infoPage">
      <h1 className="infoPage__name infoPage__name--devices">Anna Branco</h1>

      <div className="infoPage__container">
        <div className="infoPage__photoAndName">
          <div className="infoPage__photo--container">
            <div className="infoPage__photo">
              <img
                src={Mugshot}
                alt="Anna Branco"
                className="infoPage__mugshot"
              />
            </div>
          </div>
          <div className="infoPage__id--container">
            <div className="infoPage__id">
              <h1 className="infoPage__name infoPage__name--desktop">
                Anna Branco
              </h1>
              <h2 className="infoPage__job">{texts.job}</h2>
            </div>
            <div className="infoPage__aditional">
              {!viewedAll ? texts.aditional : texts.thankyou}
            </div>
          </div>
        </div>
        <div className="infoPage__social--container">
          <Social texts={texts} />
        </div>
      </div>

      <img
        className="infoPage__boat"
        src="http://www.animatedimages.org/data/media/271/animated-ship-image-0031.gif"
        alt="Navigating beautifully"
      />

      {!window.matchMedia('(min-width: 1024px)').matches ? (
        <div className="infoPage__advise">{texts.advise}</div>
      ) : null}

      <div className="infoPage__scrollDown">
        <div className="infoPage__scrollDown-inner">
          <i className="fas fa-angle-double-down scroll-icon anim1"></i>
          <i className="fas fa-angle-double-down scroll-icon anim1"></i>
          <i className="fas fa-angle-double-down scroll-icon anim1"></i>
        </div>
        <div className="infoPage__scrollDown-inner">
          <i className="fas fa-angle-double-down scroll-icon anim2"></i>
          <i className="fas fa-angle-double-down scroll-icon anim2"></i>
          <i className="fas fa-angle-double-down scroll-icon anim2"></i>
        </div>
        <div className="infoPage__scrollDown-inner">
          <i className="fas fa-angle-double-down scroll-icon anim3"></i>
          <i className="fas fa-angle-double-down scroll-icon anim3"></i>
          <i className="fas fa-angle-double-down scroll-icon anim3"></i>
        </div>
      </div>
    </section>
  );
};
