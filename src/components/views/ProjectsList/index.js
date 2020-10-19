import React from 'react';
import { arrayOf, string, func, bool, number, oneOf } from 'prop-types';

import { ProjectDetails } from '..';
import {
  ADVANCE_ACTION,
  BACK_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION,
  SHOW_THUMBNAILS_ACTION
} from '../../../constants';
import { developerTextPropType, projectsPropType } from '../../../types';
import {
  ProjectsSection,
  CheckboxWrapper,
  CheckboxElement,
  MyProjectsList,
  ProjectsPaginator,
  ProjectsPaginatorText,
  ProjectsPaginatorIcon
} from './styles';

const ProjectsList = ({
  texts,
  language,
  toggleProjectsThumbNails,
  displayThumbnails,
  actualPage,
  totalPages,
  projects,
  onClickChangePage,
  thumbnailsStyle
}) => (
  <ProjectsSection>
    <CheckboxWrapper>
      <CheckboxElement
        id="developer__projects-checkbox"
        type="checkbox"
        onClick={event => toggleProjectsThumbNails(event.currentTarget.checked)}
      />
      <label htmlFor="developer__projects-checkbox">
        {texts.showThumbnails}
      </label>
    </CheckboxWrapper>
    <MyProjectsList thumbnailsStyle={thumbnailsStyle}>
      {projects[actualPage - 1].map(project => (
        <ProjectDetails
          project={project}
          language={language}
          displayThumbnails={displayThumbnails}
          key={project.title}
        />
      ))}
    </MyProjectsList>
    <ProjectsPaginator>
      <ProjectsPaginatorText hidden={actualPage === 1}>
        {texts.goUp}
      </ProjectsPaginatorText>
      <ProjectsPaginatorIcon
        hidden={actualPage === 1}
        className="far fa-arrow-alt-circle-up"
        onClick={() => onClickChangePage(BACK_ACTION)}
        role="button"
        aria-label={texts.goUp}
        tabIndex={0}
      />
      <ProjectsPaginatorIcon
        hidden={actualPage === totalPages}
        className="far fa-arrow-alt-circle-down"
        onClick={() => onClickChangePage(ADVANCE_ACTION)}
        role="button"
        aria-label={texts.showMore}
        tabIndex={0}
      />
      <ProjectsPaginatorText hidden={actualPage === totalPages}>
        {texts.showMore}
      </ProjectsPaginatorText>
    </ProjectsPaginator>
  </ProjectsSection>
);

ProjectsList.propTypes = {
  texts: developerTextPropType.isRequired,
  projects: arrayOf(projectsPropType).isRequired,
  language: string.isRequired,
  toggleProjectsThumbNails: func.isRequired,
  displayThumbnails: bool.isRequired,
  actualPage: number.isRequired,
  totalPages: number.isRequired,
  onClickChangePage: func.isRequired,
  thumbnailsStyle: oneOf([
    SHOW_THUMBNAILS_ON_MOBILE_ACTION,
    SHOW_THUMBNAILS_ACTION
  ])
};

ProjectsList.defaultProps = {
  thumbnailsStyle: undefined
};

export default ProjectsList;
