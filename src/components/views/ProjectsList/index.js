import React, { Fragment } from 'react';
import projectsDB from '../../../db/projectsDB';

export const ProjectsList = ({
  texts,
  language,
  toggleProjectsThumbNails,
  onClickNextProjects,
  onClickPreviousProjects,
  seeAllProjects,
  displayThumbnails
}) => (
  <Fragment>
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
    <ul className="projects__list">
      {projectsDB.map((project, index) => (
        <Fragment key={index}>
          <li className="project__item">
            <a href={project.url} className="project__url-a" target="_Blank">
              <h3 className="project__title">
                {project.title}{' '}
                <i className="far fa-eye project__title-icon"></i>
              </h3>
            </a>
            <p className="project__description">
              {project.description[language]}
            </p>

            <a href={project.repo} className="project__url-a" target="_Blank">
              <p className="project__repo">
                <i className="fab fa-github-alt project__repo--icon"></i>
                {project.repo}
              </p>
            </a>
          </li>

          {displayThumbnails && (
            <a href={project.url} className="project__url-a" target="_Blank">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project__thumbnail"
              />
            </a>
          )}
        </Fragment>
      ))}
    </ul>
    {!seeAllProjects && (
      <div className="project__seeMore">
        <span className="project__seeMore-text project__seeMore-up invisible">
          {texts.goUp}
        </span>
        <i
          className="far fa-arrow-alt-circle-up icon--more invisible"
          onClick={onClickPreviousProjects}
        ></i>
        <i
          className="far fa-arrow-alt-circle-down icon--more"
          onClick={onClickNextProjects}
        ></i>
        <span className="project__seeMore-text project__seeMore-down">
          {texts.showMore}
        </span>
      </div>
    )}
  </Fragment>
);
