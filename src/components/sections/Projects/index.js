import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import { projectsSelector } from '../../../redux/selectors';
import { useStateWithLabel } from '../../../utils/hooks';
import { isDesktop } from '../../../utils/device';
import ProjectsList from './ProjectsList';
import {
  ACTUAL_PAGE,
  ADVANCE_ACTION,
  BACK_ACTION,
  PROJECTS,
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../../constants';

const Projects = () => {
  const projectsLoaded = useSelector(projectsSelector);

  const [actualPage, changePage] = useStateWithLabel(1, ACTUAL_PAGE);
  const [projectsState, setProjectsState] = useStateWithLabel(
    {
      projects: null,
      totalPages: 0
    },
    PROJECTS
  );

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

  const getThumbnailsStyle = () =>
    isDesktop ? SHOW_THUMBNAILS_ACTION : SHOW_THUMBNAILS_ON_MOBILE_ACTION;

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

    organizeProjectsList(2);
  }, [projectsLoaded, setProjectsState]);

  return (
    <ProjectsList
      actualPage={actualPage}
      onClickChangePage={onClickChangePage}
      projects={projectsState.projects}
      thumbnailsStyle={getThumbnailsStyle()}
      totalPages={projectsState.totalPages}
    />
  );
};

export default Projects;
