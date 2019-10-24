import React from 'react';
import { ScrollArea } from '../';
import { MyInfoPage, LanguagesModal } from '../../views';

export const MainArea = ({
  onChangeLanguage,
  closeLanguagePopup,
  doNotShowLanguagePopupAgain,
  handleAdjustExpandedProjectsView,
  texts,
  userViewedAllComponents,
  viewedAll
}) => {
  return (
    <main className="main__outer">
      <div className="main__intro">
        <MyInfoPage texts={texts.infoPage} viewedAll={viewedAll} />
      </div>

      <ScrollArea
        texts={texts}
        handleAdjustExpandedProjectsView={handleAdjustExpandedProjectsView}
        userViewedAllComponents={userViewedAllComponents}
      />

      {!doNotShowLanguagePopupAgain ? (
        <LanguagesModal
          texts={texts.languages}
          language={texts.languages.language}
          onChangeLanguage={onChangeLanguage}
          closeLanguagePopup={closeLanguagePopup}
        />
      ) : null}
    </main>
  );
};
