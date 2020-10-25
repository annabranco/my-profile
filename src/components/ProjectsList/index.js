import React from 'react';
import { useSelector } from 'react-redux';
import { arrayOf, bool, func, number, oneOf } from 'prop-types';
import ProjectDetails from '../ProjectDetails';
import { developerTextSelector } from '../../redux/selectors';
import {
  ADVANCE_ACTION,
  BACK_ACTION,
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../constants';
import {
  Checkbox,
  CheckboxWrapper,
  Icon,
  Paginator,
  ProjectsGrid,
  ProjectsSection,
  Text
} from './styles';
import { projectsPropType } from '../../types';

const ProjectsList = ({
  actualPage,
  displayThumbnails,
  onClickChangePage,
  projects,
  thumbnailsStyle,
  toggleProjectsThumbNails,
  totalPages
}) => {
  const texts = useSelector(developerTextSelector);

  return (
    <ProjectsSection>
      <CheckboxWrapper>
        <Checkbox
          id="developer__projects-checkbox"
          onClick={event =>
            toggleProjectsThumbNails(event.currentTarget.checked)
          }
          type="checkbox"
        />
        <label htmlFor="developer__projects-checkbox">
          {texts.showThumbnails}
        </label>
      </CheckboxWrapper>
      <ProjectsGrid thumbnailsStyle={thumbnailsStyle}>
        {projects &&
          projects[actualPage - 1].map(project => (
            <ProjectDetails
              displayThumbnails={displayThumbnails}
              key={project.title}
              project={project}
            />
          ))}
      </ProjectsGrid>
      <Paginator>
        <Text hidden={actualPage === 1}>{texts.goUp}</Text>
        <Icon
          aria-label={texts.goUp}
          className="far fa-arrow-alt-circle-up"
          hidden={actualPage === 1}
          onClick={() => onClickChangePage(BACK_ACTION)}
          role="button"
          tabIndex={0}
        />
        <Icon
          aria-label={texts.showMore}
          className="far fa-arrow-alt-circle-down"
          hidden={actualPage === totalPages}
          onClick={() => onClickChangePage(ADVANCE_ACTION)}
          role="button"
          tabIndex={0}
        />
        <Text hidden={actualPage === totalPages}>{texts.showMore}</Text>
      </Paginator>
    </ProjectsSection>
  );
};

ProjectsList.propTypes = {
  actualPage: number.isRequired,
  displayThumbnails: bool.isRequired,
  onClickChangePage: func.isRequired,
  projects: arrayOf(arrayOf(projectsPropType)),
  thumbnailsStyle: oneOf([
    SHOW_THUMBNAILS_ON_MOBILE_ACTION,
    SHOW_THUMBNAILS_ACTION
  ]),
  toggleProjectsThumbNails: func.isRequired,
  totalPages: number.isRequired
};

ProjectsList.defaultProps = {
  thumbnailsStyle: ''
};

ProjectsList.defaultProps = {
  projects: [
    [
      {
        description: {
          en: '',
          es: '',
          pt: ''
        },
        order: 0,
        repo: '',
        thumbnail: '',
        url: ''
      }
    ]
  ]
};

export default ProjectsList;
