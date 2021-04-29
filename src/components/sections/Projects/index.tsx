import React, { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { chunk, sortBy } from 'lodash';
import { instanceOf } from 'prop-types';
import { IProjectsIndexator, IProjects } from '../../../types/interfaces';
import { projectsSelector } from '../../../redux/selectors';
import { useStateWithLabel } from '../../../utils/hooks';
import ProjectsList from './ProjectsList';
import {
  ACTUAL_PAGE,
  ADVANCE_ACTION,
  BACK_ACTION,
  PROJECTS
} from '../../../constants';

interface Props {
  cuePointsActivated: Set<string>;
}

const Projects = ({ cuePointsActivated }: Props): ReactElement => {
  const projectsLoaded: IProjects[] = useSelector(projectsSelector);

  const [actualPage, changePage] = useStateWithLabel<number>(1, ACTUAL_PAGE);
  const [
    projectsState,
    setProjectsState
  ] = useStateWithLabel<IProjectsIndexator>(
    {
      projects: [],
      totalPages: 0
    },
    PROJECTS
  );

  const onClickChangePage = (action: string): void => {
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

  useEffect(() => {
    const organizeProjectsList = (numberOfProjectsPerPage: number): void => {
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
      totalPages={projectsState.totalPages}
      visible={cuePointsActivated.has(PROJECTS)}
    />
  );
};

Projects.propTypes = {
  cuePointsActivated: instanceOf(Set).isRequired
};

export default Projects;
