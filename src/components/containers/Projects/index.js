import React, { Component } from 'react';
import { arrayOf, string } from 'prop-types';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import { isDesktop } from '../../../utils/device';
import {
  SHOW_THUMBNAILS_ACTION,
  ADVANCE_ACTION,
  BACK_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../../constants';
import { developerTextPropType, projectsPropType } from '../../../types';
import ProjectsList from '../../views/ProjectsList';

class Projects extends Component {
  static propTypes = {
    texts: developerTextPropType.isRequired,
    projects: arrayOf(projectsPropType).isRequired,
    language: string.isRequired
  };

  state = {
    displayThumbnails: false,
    actualPage: 1,
    totalPages: 0,
    projects: [[]],
    adjustedView: 0
  };

  componentDidMount() {
    this.organizeProjectsList(isDesktop ? 2 : 1);
  }

  organizeProjectsList = numberOfProjectsPerPage => {
    const organizedProjects = chunk(
      sortBy(this.props.projects),
      numberOfProjectsPerPage
    );
    this.setState({
      projects: organizedProjects,
      totalPages: organizedProjects.length
    });
  };

  toggleProjectsThumbNails = isVisible =>
    this.setState(prevState => ({
      displayThumbnails: isVisible,
      adjustedView: isVisible
        ? prevState.adjustedView + 150
        : prevState.adjustedView - 150
    }));

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

  getThumbnailsStyle = () => {
    const { displayThumbnails } = this.state;

    if (displayThumbnails && isDesktop) {
      return SHOW_THUMBNAILS_ACTION;
    }
    if (displayThumbnails) {
      return SHOW_THUMBNAILS_ON_MOBILE_ACTION;
    }
    return '';
  };

  render() {
    const { displayThumbnails, actualPage, totalPages, projects } = this.state;
    const { texts, language } = this.props;

    return (
      <ProjectsList
        texts={texts}
        language={language}
        toggleProjectsThumbNails={this.toggleProjectsThumbNails}
        displayThumbnails={displayThumbnails}
        actualPage={actualPage}
        totalPages={totalPages}
        projects={projects}
        onClickChangePage={this.onClickChangePage}
        thumbnailsStyle={this.getThumbnailsStyle()}
      />
    );
  }
}

export default Projects;
