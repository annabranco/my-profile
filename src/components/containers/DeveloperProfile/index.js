import React, { Component, Fragment } from 'react';
import { ProjectsList } from '../../views';
import {
  LogoAdalab,
  Html,
  Css,
  Javascript,
  Git,
  Github,
  Bootstrap,
  Zeplin
} from '../../../images';

export class DeveloperProfile extends Component {
  state = {
    knowMore: false,
    seeAllProjects: false,
    displayThumbnails: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.knowMore !== this.state.knowMore ||
      prevState.seeAllProjects !== this.state.seeAllProjects ||
      prevState.displayThumbnails !== this.state.displayThumbnails
    ) {
      let adjust = 0;
      if (this.state.displayThumbnails) {
        adjust += 650;
      }
      if (this.state.seeAllProjects) {
        adjust += 650;
      }
      if (this.state.knowMore) {
        adjust += 200;
      }
      this.props.handleAdjustExpandedProjectsView(adjust);
    }
  }

  onClickKnowMore = () =>
    this.setState(prevState => ({ knowMore: !prevState.knowMore }));

  onClickSeeAllProjects = () =>
    this.setState(prevState => ({ seeAllProjects: !prevState.seeAllProjects }));

  toggleProjectsThumbNails = isVisible =>
    this.setState({ displayThumbnails: isVisible });

  onClickNextProjects = () => {
    const { displayThumbnails } = this.state;
    const adjustments = displayThumbnails ? 2 : 1;

    if (window.matchMedia('(min-width: 768px)').matches) {
      document.querySelector('.projects__list').scrollTop += 248;
    } else {
      if (displayThumbnails) {
        document.querySelector('.projects__list').scrollTop +=
          195 * adjustments;
      } else {
        document.querySelector('.projects__list').scrollTop +=
          248 * adjustments;
      }
    }

    document
      .querySelector('.fa-arrow-alt-circle-up')
      .classList.remove('invisible');
    document
      .querySelector('.project__seeMore-up')
      .classList.remove('invisible');

    if (window.matchMedia('(min-width: 768px)').matches) {
      if (
        document.querySelector('.projects__list').scrollTop >=
        744 * adjustments
      ) {
        document
          .querySelector('.fa-arrow-alt-circle-down')
          .classList.add('invisible');
        document
          .querySelector('.project__seeMore-down')
          .classList.add('invisible');
      }
    } else {
      if (displayThumbnails) {
        if (document.querySelector('.projects__list').scrollTop >= 2000) {
          document
            .querySelector('.fa-arrow-alt-circle-down')
            .classList.add('invisible');
          document
            .querySelector('.project__seeMore-down')
            .classList.add('invisible');
        }
      } else {
        if (
          document.querySelector('.projects__list').scrollTop >=
          1488 * adjustments
        ) {
          document
            .querySelector('.fa-arrow-alt-circle-down')
            .classList.add('invisible');
          document
            .querySelector('.project__seeMore-down')
            .classList.add('invisible');
        }
      }
    }
  };

  onClickPreviousProjects = () => {
    const { displayThumbnails } = this.state;
    const adjustments = displayThumbnails ? 2 : 1;

    if (window.matchMedia('(min-width: 768px)').matches) {
      document.querySelector('.projects__list').scrollTop -= 252;
    } else {
      if (displayThumbnails) {
        document.querySelector('.projects__list').scrollTop -=
          195 * adjustments;
      } else {
        document.querySelector('.projects__list').scrollTop -=
          248 * adjustments;
      }
    }

    document
      .querySelector('.fa-arrow-alt-circle-down')
      .classList.remove('invisible');
    document
      .querySelector('.project__seeMore-down')
      .classList.remove('invisible');

    if (document.querySelector('.projects__list').scrollTop === 0) {
      document
        .querySelector('.fa-arrow-alt-circle-up')
        .classList.add('invisible');
      document.querySelector('.project__seeMore-up').classList.add('invisible');
    }
  };

  render() {
    const { knowMore, seeAllProjects, displayThumbnails } = this.state;
    const { texts, language, developerActivation, projects } = this.props;
    return (
      <section className="section__developer">
        <div className="developer__outer">
          <div
            className={`developer__sidebar ${developerActivation.skills &&
              'comeIn'}`}
          >
            <h3 className="developer__skills--title">{texts.main}</h3>

            <div className="developer__inner--skills">
              <div className="skills__outer">
                <h4 className="skills__text">CSS</h4>
                <div className="skills__inner--icon">
                  <img src={Css} alt="" className="skills__icon" />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star icon--star" aria-hidden></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">HTML</h4>
                <div className="skills__inner--icon">
                  <img src={Html} alt="" className="skills__icon" />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star-half icon--star" aria-hidden></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">JavaScript</h4>
                <div className="skills__inner--icon">
                  <img src={Javascript} alt="" className="skills__icon" />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star-half icon--star" aria-hidden></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">SASS/SCSS</h4>
                <div className="skills__inner--icon">
                  <i
                    className="fab fa-sass skills__icon icon--sass"
                    aria-hidden
                  ></i>
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star-half icon--star" aria-hidden></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">React.js</h4>
                <div className="skills__inner--icon">
                  <i
                    className="fab fa-react skills__icon icon--react"
                    aria-hidden
                  ></i>
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star icon--star" aria-hidden></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">git</h4>
                <div className="skills__inner--icon">
                  <img src={Git} alt="" className="skills__icon" />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden></i>
                  <i className="fas fa-star icon--star" aria-hidden></i>
                </div>
              </div>
            </div>
            <h3 className="developer__skills--title">{texts.other}</h3>
            <div className="developer__inner--skills developer__inner--skills-others">
              <div className="skills__outer">
                <h4 className="skills__text--others">GitHub</h4>
                <div className="skills__inner--icon-others">
                  <img
                    src={Github}
                    alt=""
                    className="skills__icon--others icon--github"
                  />
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  ></i>
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  ></i>
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  ></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">node.js</h4>
                <div className="skills__inner--icon-others">
                  <i
                    className="fab fa-node-js skills__icon--others icon--node"
                    aria-hidden
                  ></i>
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star-half icon--star icon--star--others"
                    aria-hidden
                  ></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">gulp</h4>
                <div className="skills__inner--icon-others">
                  <i
                    className="fab fa-gulp skills__icon--others icon--gulp"
                    aria-hidden
                  ></i>
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star-half icon--star icon--star--others"
                    aria-hidden
                  ></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">npm</h4>
                <div className="skills__inner--icon-others">
                  <i
                    className="fab fa-npm skills__icon--others icon--npm"
                    aria-hidden
                  ></i>
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star-half icon--star icon--star--others"
                    aria-hidden
                  ></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">Bootstrap</h4>
                <div className="skills__inner--icon-others">
                  <img
                    src={Bootstrap}
                    alt=""
                    className="skills__icon--others icon--bootstrap"
                  />
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star-half icon--star icon--star--others"
                    aria-hidden
                  ></i>
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">Zeplin</h4>
                <div className="skills__inner--icon-others">
                  <img
                    src={Zeplin}
                    alt=""
                    className="skills__icon--others icon--zeplin"
                  />
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  ></i>
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <div className="developer__main">
            <div
              className={`developer__formation ${developerActivation.adalab &&
                'comeIn'}`}
            >
              <h2 className="developer__adalab--title">
                {texts.formation}{' '}
                <img
                  src={LogoAdalab}
                  alt="Adalab"
                  className="developer__adalab--logo"
                />
                <span
                  className="developer--more"
                  onClick={this.onClickKnowMore}
                >
                  {texts.more}
                </span>
              </h2>

              {knowMore && (
                <Fragment>
                  <p className="developer__adalab--text">{texts.adalabText}</p>
                  <p className="developer__adalab--text">
                    {texts.adalabMore}
                    <a
                      href="https://www.adalab.es"
                      target="_Blank"
                      rel="noopener noreferrer"
                      className="project__url-a"
                    >
                      Adalab
                    </a>
                  </p>
                </Fragment>
              )}
            </div>
            <div
              className={`developer__projects ${developerActivation.projects &&
                'comeIn'}`}
            >
              <h2 className="developer__projects--title">
                {texts.projects}
                <span
                  className="developer--more"
                  onClick={this.onClickSeeAllProjects}
                >
                  {seeAllProjects ? texts.reduced : texts.expanded}
                </span>
              </h2>
              <p className="developer__projects--text">{texts.projectsText}</p>

              <ProjectsList
                seeAllProjects={seeAllProjects}
                texts={texts}
                projects={projects}
                language={language}
                toggleProjectsThumbNails={this.toggleProjectsThumbNails}
                displayThumbnails={displayThumbnails}
                onClickNextProjects={this.onClickNextProjects}
                onClickPreviousProjects={this.onClickPreviousProjects}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
