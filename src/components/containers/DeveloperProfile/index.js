import React, { Component } from 'react';
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

let adjust = 0;

export class DeveloperProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      knowMore: false,
      seeAll: false,
      seeThumbnails: false
    };
  }

  componentDidUpdate() {
    adjust = 0;

    if (this.state.seeThumbnails && this.state.seeAll) {
      adjust = 1300;
    } else if (this.state.seeAll) {
      adjust = 650;
    } else {
      adjust = 0;
    }
    if (this.state.knowMore) {
      adjust += 200;
    }
    this.props.handleAdjustExpandedProjectsView(adjust);
  }

  onClickKnowMore = () =>
    this.setState(prevState => ({ knowMore: !prevState.knowMore }));

  onClickSeeAll = () => {
    this.setState(prevState => ({ seeAll: !prevState.seeAll }));

    if (this.state.seeAll) {
      document.querySelector('.projects__list').style.height = '210px';
    } else {
      document.querySelector('.projects__list').style.height = 'auto';
    }
  };

  handleAdjustThumbnailsView = thumbnails => {
    this.setState({ seeThumbnails: thumbnails });
  };

  render() {
    const { knowMore, seeAll } = this.state;
    const { texts } = this.props;
    return (
      <section className="section__developer">
        <div className="developer__outer">
          <div className="developer__sidebar">
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
            <div className="developer__formation">
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

              {knowMore ? (
                <p className="developer__adalab--text">{texts.adalabText}</p>
              ) : null}
              {knowMore ? (
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
              ) : null}
            </div>
            <div className="developer__projects">
              <h2 className="developer__projects--title">
                {texts.projects}
                <span className="developer--more" onClick={this.onClickSeeAll}>
                  {seeAll ? texts.reduced : texts.expanded}
                </span>
              </h2>
              <p className="developer__projects--text">{texts.projectsText}</p>

              <ProjectsList
                seeAll={seeAll}
                texts={texts}
                handleAdjustThumbnailsView={this.handleAdjustThumbnailsView}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
