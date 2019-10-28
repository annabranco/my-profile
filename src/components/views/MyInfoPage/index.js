import React from 'react';
import { PropTypes } from 'prop-types';
import Social from '../Social';
import { Mugshot, Barquinho } from '../../../images';
import { infoPageTextPropType } from '../../../types';

const MyInfoPage = ({ texts, displayThanksMessage }) => (
  <section className="section__infoPage">
    <div className="infoPage__outerWrapper">
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
              {!displayThanksMessage ? texts.aditional : texts.thankyou}
            </div>
          </div>
        </div>
        <div className="infoPage__social--container">
          <Social texts={texts} />
        </div>
      </div>

      <img
        className="infoPage__boat"
        src={Barquinho}
        alt="Navigating beautifully"
      />

      {!window.matchMedia('(min-width: 1024px)').matches && (
        <div className="infoPage__advise">{texts.advise}</div>
      )}

      <div className="infoPage__scrollDown">
        <div className="infoPage__scrollDown-inner">
          <i className="fas fa-angle-double-down scroll-icon anim1" />
          <i className="fas fa-angle-double-down scroll-icon anim1" />
          <i className="fas fa-angle-double-down scroll-icon anim1" />
        </div>
        <div className="infoPage__scrollDown-inner">
          <i className="fas fa-angle-double-down scroll-icon anim2" />
          <i className="fas fa-angle-double-down scroll-icon anim2" />
          <i className="fas fa-angle-double-down scroll-icon anim2" />
        </div>
        <div className="infoPage__scrollDown-inner">
          <i className="fas fa-angle-double-down scroll-icon anim3" />
          <i className="fas fa-angle-double-down scroll-icon anim3" />
          <i className="fas fa-angle-double-down scroll-icon anim3" />
        </div>
      </div>
    </div>
  </section>
);

MyInfoPage.propTypes = {
  texts: infoPageTextPropType.isRequired,
  displayThanksMessage: PropTypes.bool
};

MyInfoPage.defaultProps = {
  displayThanksMessage: false
};

export default MyInfoPage;
