import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { number } from 'prop-types';
import { IProjects } from '../../../../types/interfaces';
import { currentLanguageSelector } from '../../../../redux/selectors';
import { isDesktop } from '../../../../utils/device';
import { THUMBNAILS } from '../../../../assets/images';
import { projectsPropType } from '../../../../types/propTypes';
import {
  Description,
  Link,
  ProjectItem,
  RepoIcon,
  RepoUrl,
  SeeIcon,
  Thumbnail,
  Title
} from './styles';

interface Props {
  actualPage: number;
  project: IProjects;
}

const ProjectDetails = ({ actualPage, project }: Props): ReactElement => {
  const languageSelected = useSelector(currentLanguageSelector);

  return (
    <ProjectItem actualPage={actualPage} key={project.title}>
      {isDesktop && (
        <>
          <Link
            href={project.url}
            data-e2e-id={`projects-title_${project.title}`}
            rel="noopener noreferrer"
            target="_Blank"
          >
            <Title>
              {project.title}
              <SeeIcon className="far fa-eye" />
            </Title>
          </Link>
          <Description>{project.description[languageSelected]}</Description>
          <Link
            href={project.repo}
            data-e2e-id={`projects-repo_${project.title}`}
            rel="noopener noreferrer"
            target="_Blank"
          >
            <RepoUrl className="project__repo">
              <RepoIcon className="fab fa-github-alt" />
              {project.repo.replace('https://github.com', '')}
            </RepoUrl>
          </Link>
        </>
      )}
      <Link
        data-e2e-id={`projects-thumb_${project.title}`}
        href={isDesktop ? project.url : project.repo}
        rel="noopener noreferrer"
        target="_Blank"
      >
        <Thumbnail
          src={THUMBNAILS[project.thumbnail as keyof typeof THUMBNAILS]}
          alt={project.title}
        />
        {!isDesktop && <Title>{project.title}</Title>}
      </Link>
    </ProjectItem>
  );
};

ProjectDetails.propTypes = {
  actualPage: number.isRequired,
  project: projectsPropType.isRequired
};

export default ProjectDetails;
