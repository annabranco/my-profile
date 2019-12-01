import React from 'react';
import { PropTypes } from 'prop-types';
import { DeveloperMain } from './styles';
import { LogoAdalab } from '../../../images';
import ProjectsList from '../ProjectsList';

const DeveloperInfo = ({
  knowMore,
  texts,
  language,
  toggleKnowMore,
  toggleProjectsThumbNails,
  displayThumbnails,
  actualPage,
  totalPages,
  projectsList,
  onClickChangePage,
  setProjectsListClasses
}) => {
  return (
    <DeveloperMain>
      <div className="developer__formation comeIn">
        <h2 className="developer__adalab--title">
          {texts.formation}{' '}
          <img
            src={LogoAdalab}
            alt="Adalab"
            className="developer__adalab--logo"
          />
          <span
            className="developer--more"
            onClick={toggleKnowMore}
            role="button"
            aria-label={texts.more}
            tabIndex={0}
          >
            {texts.more}
          </span>
        </h2>

        {knowMore && (
          <>
            <p className="developer__adalab--text">{texts.adalabText}</p>
            <p className="developer__adalab--text">
              {texts.adalabMore}
              <a
                href="https://www.adalab.es"
                target="_Blank"
                rel="noopener noreferrer"
                className="project__url-a"
              >
                Adalab
              </a>
            </p>
          </>
        )}
      </div>
      <div className="developer__projects comeIn">
        <h2 className="developer__projects--title">{texts.projects}</h2>
        <p className="developer__projects--text">{texts.projectsText}</p>

        <ProjectsList
          texts={texts}
          language={language}
          toggleProjectsThumbNails={toggleProjectsThumbNails}
          displayThumbnails={displayThumbnails}
          actualPage={actualPage}
          totalPages={totalPages}
          projectsList={projectsList}
          onClickChangePage={onClickChangePage}
          setProjectsListClasses={setProjectsListClasses}
        />
      </div>
    </DeveloperMain>
  );
};

DeveloperInfo.propTypes = {
  knowMore: PropTypes.string.isRequired,
  texts: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  toggleKnowMore: PropTypes.func.isRequired,
  toggleProjectsThumbNails: PropTypes.string.isRequired,
  displayThumbnails: PropTypes.string.isRequired,
  actualPage: PropTypes.string.isRequired,
  totalPages: PropTypes.string.isRequired,
  projectsList: PropTypes.string.isRequired,
  onClickChangePage: PropTypes.string.isRequired,
  setProjectsListClasses: PropTypes.string.isRequired
};

export default DeveloperInfo;
