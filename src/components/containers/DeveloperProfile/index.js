import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ProjectsList from '../ProjectsList';
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
import {
  developerTextPropType,
  projectsPropType,
  developerActivationPropType
} from '../../../types';

class DeveloperProfile extends Component {
  static propTypes = {
    texts: developerTextPropType.isRequired,
    projects: PropTypes.arrayOf(projectsPropType).isRequired,
    handleAdjustExpandedProjectsView: PropTypes.func.isRequired,
    language: PropTypes.string.isRequired,
    developerActivation: developerActivationPropType.isRequired
  };

  state = {
    knowMore: false,
    seeAllProjects: false
  };

  onClickKnowMore = () =>
    this.setState(prevState => ({ knowMore: !prevState.knowMore }));

  onClickSeeAllProjects = () =>
    this.setState(prevState => ({
      seeAllProjects: !prevState.seeAllProjects
    }));

  render() {
    const { knowMore, seeAllProjects } = this.state;
    const {
      texts,
      language,
      developerActivation,
      projects,
      handleAdjustExpandedProjectsView
    } = this.props;

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
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star icon--star" aria-hidden />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">HTML</h4>
                <div className="skills__inner--icon">
                  <img src={Html} alt="" className="skills__icon" />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star-half icon--star" aria-hidden />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">JavaScript</h4>
                <div className="skills__inner--icon">
                  <img src={Javascript} alt="" className="skills__icon" />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star-half icon--star" aria-hidden />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">SASS/SCSS</h4>
                <div className="skills__inner--icon">
                  <i
                    className="fab fa-sass skills__icon icon--sass"
                    aria-hidden
                  />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star-half icon--star" aria-hidden />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">React.js</h4>
                <div className="skills__inner--icon">
                  <i
                    className="fab fa-react skills__icon icon--react"
                    aria-hidden
                  />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star icon--star" aria-hidden />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text">git</h4>
                <div className="skills__inner--icon">
                  <img src={Git} alt="" className="skills__icon" />
                </div>
                <div className="skills__inner--stars">
                  <i className="fas fa-star icon--star" aria-hidden />
                  <i className="fas fa-star icon--star" aria-hidden />
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
                  />
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  />
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">node.js</h4>
                <div className="skills__inner--icon-others">
                  <i
                    className="fab fa-node-js skills__icon--others icon--node"
                    aria-hidden
                  />
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star-half icon--star icon--star--others"
                    aria-hidden
                  />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">gulp</h4>
                <div className="skills__inner--icon-others">
                  <i
                    className="fab fa-gulp skills__icon--others icon--gulp"
                    aria-hidden
                  />
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star-half icon--star icon--star--others"
                    aria-hidden
                  />
                </div>
              </div>

              <div className="skills__outer">
                <h4 className="skills__text--others">npm</h4>
                <div className="skills__inner--icon-others">
                  <i
                    className="fab fa-npm skills__icon--others icon--npm"
                    aria-hidden
                  />
                </div>
                <div className="skills__inner--stars">
                  <i
                    className="fas fa-star-half icon--star icon--star--others"
                    aria-hidden
                  />
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
                  />
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
                  />
                  <i
                    className="fas fa-star icon--star icon--star--others"
                    aria-hidden
                  />
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
                  role="button"
                  aria-label={texts.more}
                  tabIndex={0}
                >
                  {texts.more}
                </span>
              </h2>

              {knowMore && (
                <>
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
                </>
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
                  role="button"
                  aria-label={seeAllProjects ? texts.reduced : texts.expanded}
                  tabIndex={0}
                >
                  {seeAllProjects ? texts.reduced : texts.expanded}
                </span>
              </h2>
              <p className="developer__projects--text">{texts.projectsText}</p>

              <ProjectsList
                texts={texts}
                projects={projects}
                language={language}
                seeAllProjects={seeAllProjects}
                handleAdjustExpandedProjectsView={
                  handleAdjustExpandedProjectsView
                }
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default DeveloperProfile;
