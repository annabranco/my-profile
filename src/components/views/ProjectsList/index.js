import React from 'react';
import { PropTypes } from 'prop-types';

import { ProjectDetails } from '..';
import { HIDE_ACTION, ADVANCE_ACTION, BACK_ACTION } from '../../../constants';
import { developerTextPropType, projectsPropType } from '../../../types';

const ProjectsList = ({
  texts,
  language,
  toggleProjectsThumbNails,
  displayThumbnails,
  actualPage,
  totalPages,
  projectsList,
  onClickChangePage,
  setProjectsListClasses
}) => (
  <section>
    <div className="developer__projects--thumbnails-checkbox">
      <input
        id="developer__projects-checkbox"
        type="checkbox"
        className="developer__projects-checkbox"
        onClick={event => toggleProjectsThumbNails(event.currentTarget.checked)}
      />
      <label htmlFor="developer__projects-checkbox">
        {texts.showThumbnails}
      </label>
    </div>
    <ul className={`projects__list${setProjectsListClasses()}`}>
      {projectsList[actualPage - 1].map(project => (
        <ProjectDetails
          project={project}
          language={language}
          displayThumbnails={displayThumbnails}
          key={project.title}
        />
      ))}
    </ul>
    <div className="project__seeMore">
      <span
        className={`project__seeMore-text project__seeMore-up ${actualPage ===
          1 && HIDE_ACTION}`}
      >
        {texts.goUp}
      </span>
      <i
        className={`far fa-arrow-alt-circle-up icon--more ${actualPage === 1 &&
          HIDE_ACTION}`}
        onClick={() => onClickChangePage(BACK_ACTION)}
        role="button"
        aria-label={texts.goUp}
        tabIndex={0}
      />
      <i
        className={`far fa-arrow-alt-circle-down icon--more ${actualPage ===
          totalPages && HIDE_ACTION}`}
        onClick={() => onClickChangePage(ADVANCE_ACTION)}
        role="button"
        aria-label={texts.showMore}
        tabIndex={0}
      />
      <span
        className={`project__seeMore-text project__seeMore-down ${actualPage ===
          totalPages && HIDE_ACTION}`}
      >
        {texts.showMore}
      </span>
    </div>
  </section>
);

ProjectsList.propTypes = {
  texts: developerTextPropType.isRequired,
  projects: PropTypes.arrayOf(projectsPropType).isRequired,
  language: PropTypes.string.isRequired,
  toggleProjectsThumbNails: PropTypes.func.isRequired,
  displayThumbnails: PropTypes.bool.isRequired,
  actualPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  projectsList: PropTypes.string.isRequired,
  adjustedView: PropTypes.number.isRequired,
  onClickChangePage: PropTypes.func.isRequired,
  setProjectsListClasses: PropTypes.func.isRequired
};

export default ProjectsList;
