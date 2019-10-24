import React from 'react';

export const Formation = ({ texts }) => {
  return (
    <section className="section__formation">
      <div className="formation__outer">
        <div className="formation__inner">
          <div className="formation__inner--year">1999 - 2005</div>
          <div className="formation__inner--year">2007 - 2011</div>

          <div className="formation__inner--year">2012 - 2013</div>

          <div className="formation__inner--year">2018</div>
        </div>
        <div className="formation__inner">
          <div className="formation__verticalBar"></div>
        </div>
        <div className="formation__inner">
          <div className="formation__inner--horizontalBar">
            <div className="formation__horizontarBar-psy"></div>
            <h2 className="formation__title formation__title-psy">
              {texts.psy}
            </h2>
            <p className="formation__details formation__details-psy">
              Universidade Gama Filho
              <img
                className="formation__flag"
                src="https://www.countryflags.io/br/flat/16.png"
                alt={texts.brazil}
                title={texts.brazil}
              />
            </p>
            <p className="formation__details formation__details-psy">
              {texts.grade}8,46
            </p>
          </div>
          <div className="formation__inner--horizontalBar">
            <div className="formation__horizontarBar-ir"></div>
            <h2 className="formation__title formation__title-ir">{texts.ir}</h2>
            <p className="formation__details formation__details-ir">
              Universidade Estácio de Sá
              <img
                className="formation__flag"
                src="https://www.countryflags.io/br/flat/16.png"
                alt={texts.brazil}
                title={texts.brazil}
              />
            </p>
            <p className="formation__details formation__details-ir">
              {texts.grade}9,15
            </p>
          </div>
          <div className="formation__inner--horizontalBar">
            <div className="formation__horizontarBar-master"></div>
            <h2 className="formation__title formation__title-master">
              {texts.master}
            </h2>
            <p className="formation__details formation__details-master">
              Universitat Autònoma de Barcelona{' '}
              <img
                className="formation__flag"
                src="https://www.countryflags.io/es/flat/16.png"
                alt={texts.spain}
                title={texts.spain}
              />
            </p>
            <p className="formation__details formation__details-master">
              {texts.grade}8,00
            </p>
          </div>
          <div className="formation__inner--horizontalBar">
            <div className="formation__horizontarBar-adalab"></div>
            <h2 className="formation__title formation__title-adalab">Adalab</h2>
          </div>
        </div>
      </div>
    </section>
  );
};
