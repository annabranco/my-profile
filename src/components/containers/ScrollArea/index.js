import React from 'react';
import { DeveloperProfile, Seabed } from '../';
import { InbetweenBar, Formation } from '../../views';

export const ScrollArea = ({
  texts,
  handleAdjustExpandedProjectsView,
  userViewedAllComponents
}) => {
  return (
    <section className="main__images">
      <InbetweenBar title={texts.developer.title} />
      <DeveloperProfile
        texts={texts.developer}
        handleAdjustExpandedProjectsView={handleAdjustExpandedProjectsView}
        language={texts.languages.languageCode}
      />

      <InbetweenBar title={texts.formation.title} />
      <Formation
        texts={texts.formation}
        language={texts.languages.languageCode}
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
