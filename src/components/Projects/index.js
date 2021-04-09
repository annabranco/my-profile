import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { func } from 'prop-types';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import ProjectsList from '../ProjectsList';
import { projectsSelector } from '../../redux/selectors';
import { useStateWithLabel } from '../../utils/hooks';
import { isDesktop } from '../../utils/device';
import {
  ACTUAL_PAGE,
  ADVANCE_ACTION,
  BACK_ACTION,
  PROJECTS,
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION,
  THUMBS_STATE
} from '../../constants';

const Projects = ({ adjustScrollAfterThumbnails }) => {
  const projectsLoaded = useSelector(projectsSelector);

  const [actualPage, changePage] = useStateWithLabel(1, ACTUAL_PAGE);
  const [projectsState, setProjectsState] = useStateWithLabel(
    {
      projects: null,
      totalPages: 0
    },
    PROJECTS
  );
  const [thumbsState, updateThumbsState] = useStateWithLabel(
    {
      adjustedView: 0,
      displayThumbnails: true
    },
    THUMBS_STATE
  );

  const toggleProjectsThumbNails = isVisible => {
    updateThumbsState(prevState => ({
      adjustedView: isVisible
        ? prevState.adjustedView + 150
        : prevState.adjustedView - 150,
      displayThumbnails: isVisible
    }));
    adjustScrollAfterThumbnails(150);
  };

  const onClickChangePage = action => {
    let nextPage;

    if (action === ADVANCE_ACTION) {
      nextPage = actualPage + 1;
    } else if (action === BACK_ACTION) {
      nextPage = actualPage - 1;
    }

    if (nextPage) {
      changePage(nextPage);
    }
  };

  const getThumbnailsStyle = () => {
    if (thumbsState.displayThumbnails && isDesktop) {
      return SHOW_THUMBNAILS_ACTION;
    }
    if (thumbsState.displayThumbnails) {
      return SHOW_THUMBNAILS_ON_MOBILE_ACTION;
    }
    return null;
  };

  useEffect(() => {
    const organizeProjectsList = numberOfProjectsPerPage => {
      const pagedProjects = chunk(
        sortBy(projectsLoaded),
        numberOfProjectsPerPage
      );
      setProjectsState({
        projects: pagedProjects,
        totalPages: pagedProjects.length
      });
    };

    organizeProjectsList(isDesktop ? 2 : 1);
  }, [projectsLoaded, setProjectsState]);

  return (
    <ProjectsList
      actualPage={actualPage}
      displayThumbnails={thumbsState.displayThumbnails}
      onClickChangePage={onClickChangePage}
      projects={projectsState.projects}
      thumbnailsStyle={getThumbnailsStyle()}
      toggleProjectsThumbNails={toggleProjectsThumbNails}
      totalPages={projectsState.totalPages}
    />
  );
};

Projects.propTypes = {
  adjustScrollAfterThumbnails: func.isRequired
};

export default Projects;
