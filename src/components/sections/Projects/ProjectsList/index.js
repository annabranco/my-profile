import React from 'react';
import { useSelector } from 'react-redux';
import { arrayOf, bool, func, number, oneOf } from 'prop-types';
import { developerTextSelector } from '../../../../redux/selectors';
import ProjectDetails from '../ProjectDetails';
import {
  ADVANCE_ACTION,
  BACK_ACTION,
  SHOW_THUMBNAILS_ACTION,
  SHOW_THUMBNAILS_ON_MOBILE_ACTION
} from '../../../../constants';
import { projectsPropType } from '../../../../types';
import { Icon, Paginator, ProjectsGrid, ProjectsSection, Text } from './styles';
import { isDesktop } from '../../../../utils/device';

const ProjectsList = ({
  actualPage,
  onClickChangePage,
  projects,
  thumbnailsStyle,
  totalPages,
  visible
}) => {
  const texts = useSelector(developerTextSelector);

  return (
    <ProjectsSection>
      {(visible || !isDesktop) && (
        <>
          <ProjectsGrid thumbnailsStyle={thumbnailsStyle}>
            {projects &&
              projects[actualPage - 1].map(project => (
                <ProjectDetails
                  actualPage={actualPage}
                  key={project.title}
                  project={project}
                />
              ))}
          </ProjectsGrid>

          <Paginator>
            <Text notVisible={actualPage === 1}>{texts.goUp}</Text>
            <Icon
              aria-label={texts.goUp}
              className="far fa-arrow-alt-circle-up"
              notVisible={actualPage === 1}
              onClick={() => onClickChangePage(BACK_ACTION)}
              role="button"
              tabIndex={0}
            />
            <Icon
              aria-label={texts.showMore}
              className="far fa-arrow-alt-circle-down"
              next
              notVisible={actualPage === totalPages}
              onClick={() => onClickChangePage(ADVANCE_ACTION)}
              role="button"
              tabIndex={0}
            />
            <Text next notVisible={actualPage === totalPages}>
              {texts.showMore}
            </Text>
          </Paginator>
        </>
      )}
    </ProjectsSection>
  );
};

ProjectsList.propTypes = {
  actualPage: number.isRequired,
  onClickChangePage: func.isRequired,
  projects: arrayOf(arrayOf(projectsPropType)),
  thumbnailsStyle: oneOf([
    SHOW_THUMBNAILS_ON_MOBILE_ACTION,
    SHOW_THUMBNAILS_ACTION
  ]),
  totalPages: number.isRequired,
  visible: bool.isRequired
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
  ],
  thumbnailsStyle: ''
};

export default ProjectsList;
