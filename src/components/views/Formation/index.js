import React from 'react';
import {
  formationTextPropType,
  formationActivationPropType
} from '../../../types';

const Formation = ({ texts, formationActivation }) => (
  <section className="section__formation">
    <div className="formation__outer">
      <div className="formation__inner">
        <div className="formation__inner--year">1999 - 2005</div>
        <div className="formation__inner--year">2007 - 2011</div>

        <div className="formation__inner--year">2012 - 2013</div>

        <div className="formation__inner--year">2018</div>
      </div>
      <div className="formation__inner">
        <div className="formation__verticalBar" />
      </div>
      <div className="formation__inner">
        <div className="formation__inner--horizontalBar">
          <div
            className={`formation__horizontarBar-psy ${formationActivation.psychology &&
              'comeIn'}`}
          />
          <h2
            className={`formation__title formation__title-psy ${formationActivation.psychology &&
              'comeIn'}`}
          >
            {texts.psy}
          </h2>
          <p
            className={`formation__details formation__details-psy ${formationActivation.psychology &&
              'comeIn'}`}
          >
            Universidade Gama Filho
            <img
              className="formation__flag"
              src="https://www.countryflags.io/br/flat/16.png"
              alt={texts.brazil}
              title={texts.brazil}
            />
          </p>
          <p
            className={`formation__details formation__details-psy ${formationActivation.psychology &&
              'comeIn'}`}
          >
            {texts.grade}8,46
          </p>
        </div>
        <div className="formation__inner--horizontalBar">
          <div
            className={`formation__horizontarBar-ir ${formationActivation.ir &&
              'comeIn'}`}
          />
          <h2
            className={`formation__title formation__title-ir ${formationActivation.ir &&
              'comeIn'}`}
          >
            {texts.ir}
          </h2>
          <p
            className={`formation__details formation__details-ir ${formationActivation.ir &&
              'comeIn'}`}
          >
            Universidade Estácio de Sá
            <img
              className="formation__flag"
              src="https://www.countryflags.io/br/flat/16.png"
              alt={texts.brazil}
              title={texts.brazil}
            />
          </p>
          <p
            className={`formation__details formation__details-ir ${formationActivation.ir &&
              'comeIn'}`}
          >
            {texts.grade}9,15
          </p>
        </div>
        <div className="formation__inner--horizontalBar">
          <div
            className={`formation__horizontarBar-master ${formationActivation.master &&
              'comeIn'}`}
          />
          <h2
            className={`formation__title formation__title-master ${formationActivation.master &&
              'comeIn'}`}
          >
            {texts.master}
          </h2>
          <p
            className={`formation__details formation__details-master ${formationActivation.master &&
              'comeIn'}`}
          >
            Universitat Autònoma de Barcelona{' '}
            <img
              className="formation__flag"
              src="https://www.countryflags.io/es/flat/16.png"
              alt={texts.spain}
              title={texts.spain}
            />
          </p>
          <p
            className={`formation__details formation__details-master ${formationActivation.master &&
              'comeIn'}`}
          >
            {texts.grade}8,00
          </p>
        </div>
        <div className="formation__inner--horizontalBar">
          <div
            className={`formation__horizontarBar-adalab ${formationActivation.programming &&
              'comeIn'}`}
          />
          <h2
            className={`formation__title formation__title-adalab ${formationActivation.programming &&
              'comeIn'}`}
          >
            Adalab
          </h2>
        </div>
      </div>
    </div>
  </section>
);

Formation.propTypes = {
  texts: formationTextPropType.isRequired,
  formationActivation: formationActivationPropType.isRequired
};

export default Formation;
