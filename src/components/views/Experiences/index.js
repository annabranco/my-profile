import React from 'react';
import { PropTypes } from 'prop-types';
import {
  experiencesTextPropType,
  seabedElementsPropType,
  globalTextsPropType
} from '../../../types';

const Experiences = ({
  texts,
  globalTexts,
  status: { read, visible },
  onClickOpen,
  onClickClose
}) => (
  <>
    {!read && window.matchMedia('(min-width: 768px)').matches ? (
      <>
        <p className="seabed__findSomething">{texts.find}</p>
        <p className="seabed__findSomething">{texts.investigate}</p>
      </>
    ) : null}
    <section>
      <div
        className="section__experiences"
        onClick={() => onClickOpen('experiences')}
        role="button"
        aria-label={globalTexts.open}
        tabIndex={0}
      >
        {!visible ? (
          <>
            <p className="experiences__text-fake">- - --- - --</p>
            <p className="experiences__text-fake">- -- -- - --</p>
            <p className="experiences__text-fake">- -- ---- --</p>
            <p className="experiences__text-fake">- - - --- --</p>
          </>
        ) : (
          <div className="experiences__outer">
            <button
              className="seabed__click2close"
              onClick={() => onClickClose('experiences')}
              type="button"
              aria-label={globalTexts.close}
            >
              X
            </button>

            <div className="experiences__inner">
              <div className="experiences__inner--year">09/2017 - 05/2018</div>
              <div className="experiences__inner--year">10/2015 - 11/2015</div>
              <div className="experiences__inner--year">05/2005 - 12/2014</div>
            </div>
            <div className="experiences__inner">
              <div className="experiences__verticalBar" />
            </div>
            <div className="experiences__inner">
              <div className="experiences__inner--horizontalBar">
                <div className="experiences__horizontarBar-psy" />
                <h2 className="experiences__title">{texts.ict}</h2>
                <p className="experiences__details">
                  Servicios Profesionales Sociales, Madrid.
                  <img
                    className="experiences__flag"
                    src="https://www.countryflags.io/es/flat/16.png"
                    alt={texts.spain}
                    title={texts.spain}
                  />
                </p>
                <p className="experiences__details">{texts.ictDetails}</p>
              </div>
              <div className="experiences__inner--horizontalBar">
                <div className="experiences__horizontarBar-ir" />
                <h2 className="experiences__title">{texts.eru}</h2>
                <p className="experiences__details">
                  Cruz Roja Española
                  <img
                    className="experiences__flag"
                    src="https://www.countryflags.io/es/flat/16.png"
                    alt={texts.spain}
                    title={texts.spain}
                  />
                </p>
                <p className="experiences__details">{texts.eruDetails}</p>
              </div>
              <div className="experiences__inner--horizontalBar">
                <div className="experiences__horizontarBar-master" />
                <h2 className="experiences__title">{texts.tj}</h2>
                <p className="experiences__details">
                  Tribunal de Justiça do Estado do Rio de Janeiro{' '}
                  <img
                    className="experiences__flag"
                    src="https://www.countryflags.io/br/flat/16.png"
                    alt={texts.brazil}
                    title={texts.brazil}
                  />
                </p>
                <p className="experiences__details">{texts.tjDetails}</p>
              </div>
            </div>
            <p className="experiences__more">
              {texts.linkedin}
              <a
                className="experiences__social--link"
                href="https://www.linkedin.com/in/annabranco/"
                target="_Blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in icon-linkedin" />
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  </>
);

Experiences.propTypes = {
  texts: experiencesTextPropType.isRequired,
  globalTexts: globalTextsPropType.isRequired,
  status: seabedElementsPropType.isRequired,
  onClickOpen: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired
};

export default Experiences;
