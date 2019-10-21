import React, { Component } from 'react';

export class Experiences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
      read: false
    };
  }

  open = () => {
    if (!this.state.opened) {
      this.setState({
        opened: true,
        read: true
      });

      if (!window.matchMedia('(min-width: 768px)').matches) {
        document.querySelector('.otherSkills__mac').classList.add('hidden');
      }

      document.querySelector('.section__experiences').classList.add('opened');
    }
  };

  close = () => {
    this.setState({ opened: false });

    if (!window.matchMedia('(min-width: 768px)').matches) {
      document.querySelector('.otherSkills__mac').classList.remove('hidden');
    }

    document.querySelector('.section__experiences').classList.remove('opened');
    this.props.markAsRead();
  };

  render() {
    const { read, opened } = this.state;
    const { texts, viewedExperiences } = this.props;
    return (
      <React.Fragment>
        {!viewedExperiences &&
        !read &&
        window.matchMedia('(min-width: 768px)').matches ? (
          <React.Fragment>
            <p className="seabed__findSomething">{texts.find}</p>
            <p className="seabed__findSomething">{texts.investigate}</p>
          </React.Fragment>
        ) : null}

        <section className="section__experiences" onClick={this.open}>
          {!opened ? (
            <React.Fragment>
              <p className="experiences__text-fake">- - --- - --</p>
              <p className="experiences__text-fake">- -- -- - --</p>
              <p className="experiences__text-fake">- -- ---- --</p>
              <p className="experiences__text-fake">- - - --- --</p>
            </React.Fragment>
          ) : (
            <div className="experiences__outer">
              <button className="seabed__click2close" onClick={this.close}>
                X
              </button>

              <div className="experiences__inner">
                <div className="experiences__inner--year">
                  09/2017 - 05/2018
                </div>
                <div className="experiences__inner--year">
                  10/2015 - 11/2015
                </div>
                <div className="experiences__inner--year">
                  05/2005 - 12/2014
                </div>
              </div>
              <div className="experiences__inner">
                <div className="experiences__verticalBar"></div>
              </div>
              <div className="experiences__inner">
                <div className="experiences__inner--horizontalBar">
                  <div className="experiences__horizontarBar-psy"></div>
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
                  <div className="experiences__horizontarBar-ir"></div>
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
                  <div className="experiences__horizontarBar-master"></div>
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
                  <i className="fab fa-linkedin-in icon-linkedin"></i>
                </a>
              </p>
            </div>
          )}
        </section>
      </React.Fragment>
    );
  }
}
