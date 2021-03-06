import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { arrayOf, bool, func, number } from 'prop-types';
import { IProjects } from '../../../../types/interfaces';
import { developerTextSelector } from '../../../../redux/selectors';
import { isDesktop } from '../../../../utils/device';
import ProjectDetails from '../ProjectDetails';
import { ADVANCE_ACTION, BACK_ACTION } from '../../../../constants';
import { projectsPropType } from '../../../../types/propTypes';
import { Icon, Paginator, ProjectsGrid, ProjectsSection, Text } from './styles';

interface Props {
  actualPage: number;
  onClickChangePage: (action: string) => void;
  projects: IProjects[][];
  totalPages: number;
  visible: boolean;
}

const ProjectsList = ({
  actualPage,
  onClickChangePage,
  projects,
  totalPages,
  visible
}: Props): ReactElement => {
  const texts = useSelector(developerTextSelector);

  return (
    <ProjectsSection>
      {(visible || !isDesktop) && (
        <>
          <ProjectsGrid>
            {projects &&
              projects[actualPage - 1] &&
              projects[actualPage - 1].map(project => (
                <ProjectDetails
                  actualPage={actualPage}
                  key={project.title}
                  project={project}
                />
              ))}
          </ProjectsGrid>

          <Paginator>
            <Text notVisible={actualPage === 1}>{texts.showMorePrevious}</Text>
            <Icon
              aria-label={texts.showMorePrevious}
              className="far fa-arrow-alt-circle-left"
              data-e2e-id="projects-button_back"
              notVisible={actualPage === 1}
              onClick={() => onClickChangePage(BACK_ACTION)}
              role="button"
              tabIndex={0}
            />
            <Icon
              aria-label={
                actualPage === 1 ? texts.showMore : texts.showMoreNext
              }
              className="far fa-arrow-alt-circle-right"
              data-e2e-id="projects-button_advance"
              next
              notVisible={actualPage === totalPages}
              onClick={() => onClickChangePage(ADVANCE_ACTION)}
              role="button"
              tabIndex={0}
            />
            <Text next notVisible={actualPage === totalPages}>
              {actualPage === 1 ? texts.showMore : texts.showMoreNext}
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
  ]
};

export default ProjectsList;
