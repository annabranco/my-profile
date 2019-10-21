import React from 'react';
import { InbetweenBar, Developer, Formation, Seabed } from '../';

export const ScrollArea = ({
  texts,
  handleAdjustExpandedProjectsView,
  userViewedAllComponents
}) => {
  return (
    <section className="main__images">
      <InbetweenBar title={texts.developer.title} />
      <Developer
        texts={texts.developer}
        handleAdjustExpandedProjectsView={handleAdjustExpandedProjectsView}
      />

      <InbetweenBar title={texts.formation.title} />
      <Formation
        texts={texts.formation}
        language={texts.languages.languageAbv}
      />

      <InbetweenBar title={texts.seabed.title} />
      <Seabed
        texts={texts.seabed}
        textsExperiences={texts.experiences}
        textsOtherSkills={texts.otherSkills}
        userViewedAllComponents={userViewedAllComponents}
      />
    </section>
  );
};
