import React from 'react';
import { Hero, ScrollArea, Languages } from '../';

export const MainArea = ({
  changeLanguage,
  clearLanguagePopup,
  doNotShowLanguagePopupAgain,
  handleAdjustExpandedProjectsView,
  handleAnimation,
  texts,
  userViewedAllComponents,
  viewedAll
}) => {
  return (
    <main className="main__outer">
      <div className="main__intro">
        <Hero texts={texts.hero} viewedAll={viewedAll} />
      </div>

      <ScrollArea
        texts={texts}
        handleAdjustExpandedProjectsView={handleAdjustExpandedProjectsView}
        userViewedAllComponents={userViewedAllComponents}
      />

      {!doNotShowLanguagePopupAgain ? (
        <Languages
          texts={texts.languages}
          language={texts.languages.language}
          changeLanguage={changeLanguage}
          clearLanguagePopup={clearLanguagePopup}
        />
      ) : null}
    </main>
  );
};
