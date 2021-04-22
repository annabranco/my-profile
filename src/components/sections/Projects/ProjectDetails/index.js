import React from 'react';
import { useSelector } from 'react-redux';
import { number } from 'prop-types';
import { currentLanguageSelector } from '../../../../redux/selectors';
import { isDesktop } from '../../../../utils/device';
import { THUMBNAILS } from '../../../../assets/images';
import { projectsPropType } from '../../../../types';
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

const ProjectDetails = ({ actualPage, project }) => {
  const languageSelected = useSelector(currentLanguageSelector);

  return (
    <ProjectItem actualPage={actualPage} key={project.title}>
      {isDesktop && (
        <>
          <Link href={project.url} rel="noopener noreferrer" target="_Blank">
            <Title>
              {project.title}
              <SeeIcon className="far fa-eye" />
            </Title>
          </Link>
          <Description>{project.description[languageSelected]}</Description>
          <Link href={project.repo} rel="noopener noreferrer" target="_Blank">
            <RepoUrl className="project__repo">
              <RepoIcon className="fab fa-github-alt" />
              {project.repo.replace('https://github.com', '')}
            </RepoUrl>
          </Link>
        </>
      )}
      <Link
        href={isDesktop ? project.url : project.repo}
        rel="noopener noreferrer"
        target="_Blank"
      >
        <Thumbnail src={THUMBNAILS[project.thumbnail]} alt={project.title} />
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
