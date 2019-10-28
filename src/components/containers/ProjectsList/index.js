import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import {
  SHOW_THUMBNAILS_ACTION,
  SHOW_ACTION,
  HIDE_ACTION,
  ADVANCE_ACTION,
  BACK_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../../constants';
import { ProjectDetails } from '../../views';
import { textsPropType, projectsPropType } from '../../../types';

class ProjectsList extends Component {
  static propTypes = {
    texts: textsPropType.isRequired,
    projects: projectsPropType.isRequired,
    language: PropTypes.string.isRequired,
    seeAllProjects: PropTypes.bool.isRequired,
    handleAdjustExpandedProjectsView: PropTypes.func.isRequired
  };

  state = {
    displayThumbnails: false,
    actualPage: 1,
    totalPages: 0,
    projectsList: [[]]
  };

  componentDidMount() {
    this.organizeProjectsList(
      window.matchMedia('(min-width: 768px)').matches ? 2 : 1
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.knowMore !== this.state.knowMore ||
      prevState.displayThumbnails !== this.state.displayThumbnails ||
      prevProps.seeAllProjects !== this.props.seeAllProjects
    ) {
      let adjust = 0;
      if (this.state.displayThumbnails) {
        adjust += 650;
      }
      if (this.props.seeAllProjects) {
        console.log('$$$ CHANGED');
        adjust += 650;
        this.organizeProjectsList(this.props.projects.length);
      }
      if (this.state.knowMore) {
        adjust += 200;
      }
      this.props.handleAdjustExpandedProjectsView(adjust);
    }
  }

  organizeProjectsList = numberOfProjectsPerPage => {
    const organizedProjects = chunk(
      sortBy(this.props.projects),
      numberOfProjectsPerPage
    );
    this.setState({
      projectsList: organizedProjects,
      totalPages: organizedProjects.length
    });
    console.log('$$$ organizedProjects', organizedProjects);
  };

  toggleProjectsThumbNails = isVisible =>
    this.setState({
      displayThumbnails: isVisible
    });

  onClickChangePage = action => {
    const { actualPage } = this.state;
    let nextPage;

    if (action === ADVANCE_ACTION) {
      nextPage = actualPage + 1;
    } else if (action === BACK_ACTION) {
      nextPage = actualPage - 1;
    }

    if (nextPage) {
      this.setState({
        actualPage: nextPage
      });
    }
  };

  setProjectsListClasses = () => {
    const { displayThumbnails } = this.state;
    const { seeAllProjects } = this.props;

    if (seeAllProjects) {
      return ` ${SHOW_ACTION}`;
    }
    if (displayThumbnails && window.matchMedia('(min-width: 768px)').matches) {
      return ` ${SHOW_THUMBNAILS_ACTION}`;
    }
    if (displayThumbnails) {
      return ` ${SHOW_THUMBNAILS_ON_MOBILE_ACTION}`;
    }
    return '';
  };

  render() {
    const {
      displayThumbnails,
      projectsList,
      actualPage,
      totalPages
    } = this.state;
    const { texts, language, seeAllProjects } = this.props;

    return (
      <section>
        <div className="developer__projects--thumbnails-checkbox">
          <input
            id="developer__projects-checkbox"
            type="checkbox"
            className="developer__projects-checkbox"
            onClick={event =>
              this.toggleProjectsThumbNails(event.currentTarget.checked)
            }
          />
          <label htmlFor="developer__projects-checkbox">
            {texts.showThumbnails}
          </label>
        </div>
        <ul className={`projects__list${this.setProjectsListClasses()}`}>
          {projectsList[actualPage - 1].map(project => (
            <ProjectDetails
              project={project}
              language={language}
              displayThumbnails={displayThumbnails}
              key={project.title}
            />
          ))}
        </ul>
        {!seeAllProjects && (
          <div className="project__seeMore">
            <span
              className={`project__seeMore-text project__seeMore-up ${actualPage ===
                1 && HIDE_ACTION}`}
            >
              {texts.goUp}
            </span>
            <i
              className={`far fa-arrow-alt-circle-up icon--more ${actualPage ===
                1 && HIDE_ACTION}`}
              onClick={() => this.onClickChangePage(BACK_ACTION)}
              role="button"
              aria-label={texts.goUp}
              tabIndex={0}
            />
            <i
              className={`far fa-arrow-alt-circle-down icon--more ${actualPage ===
                totalPages && HIDE_ACTION}`}
              onClick={() => this.onClickChangePage(ADVANCE_ACTION)}
              role="button"
              aria-label={texts.showMore}
              tabIndex={0}
            />
            <span
              className={`project__seeMore-text project__seeMore-down ${actualPage ===
                totalPages && HIDE_ACTION}`}
            >
              {texts.showMore}
            </span>
          </div>
        )}
      </section>
    );
  }
}

export default ProjectsList;
