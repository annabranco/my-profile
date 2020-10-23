import React, { useEffect } from 'react';
import { arrayOf, func, string } from 'prop-types';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import { useStateWithLabel } from '../../../utils/hooks';
import { isDesktop } from '../../../utils/device';
import { ProjectsList } from '../../views';
import {
  ACTUAL_PAGE,
  ADVANCE_ACTION,
  BACK_ACTION,
  PROJECTS_STATE,
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION,
  THUMBS_STATE
} from '../../../constants';
import { developerTextPropType, projectsPropType } from '../../../types';

const Projects = ({
  adjustScrollAfterThumbnails,
  language,
  projects,
  texts
}) => {
  const [actualPage, changePage] = useStateWithLabel(1, ACTUAL_PAGE);
  const [projectsState, setProjectsState] = useStateWithLabel(
    {
      projects: null,
      totalPages: 0
    },
    PROJECTS_STATE
  );
  const [thumbsState, updateThumbsState] = useStateWithLabel(
    {
      adjustedView: 0,
      displayThumbnails: false
    },
    THUMBS_STATE
  );

  const organizeProjectsList = numberOfProjectsPerPage => {
    const pagedProjects = chunk(sortBy(projects), numberOfProjectsPerPage);
    setProjectsState({
      projects: pagedProjects,
      totalPages: pagedProjects.length
    });
  };

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
    return '';
  };

  useEffect(() => {
    organizeProjectsList(isDesktop ? 2 : 1);
  }, []);

  return (
    <ProjectsList
      actualPage={actualPage}
      displayThumbnails={thumbsState.displayThumbnails}
      language={language}
      onClickChangePage={onClickChangePage}
      projects={projectsState.projects}
      texts={texts}
      thumbnailsStyle={getThumbnailsStyle()}
      toggleProjectsThumbNails={toggleProjectsThumbNails}
      totalPages={projectsState.totalPages}
    />
  );
};

Projects.propTypes = {
  adjustScrollAfterThumbnails: func.isRequired,
  language: string.isRequired,
  projects: arrayOf(projectsPropType).isRequired,
  texts: developerTextPropType.isRequired
};

export default Projects;
