import React from 'react';
import { DeveloperProfile, Seabed } from '../';
import { InbetweenBar, Formation, MyInfoPage } from '../../views';
import { SHOW_ACTION, HIDE_ACTION } from '../../../constants';

export class ScrollArea extends React.Component {
  state = {
    adjustedSize: 0,
    developerActivation: {
      adalab: false,
      projects: false,
      skills: false
    },
    formationActivation: {
      psychology: false,
      ir: false,
      master: false,
      programming: false
    }
  };

  handleAdjustExpandedProjectsView = adjust =>
    this.setState({
      adjustedSize: adjust
    });

  toggleDynamicElements = (section, element, action) => {
    const key = `${section}Activation`;
    const result = action === SHOW_ACTION ? true : false;
    this.setState(prevState => ({
      [key]: {
        ...prevState[key],
        [element]: result
      }
    }));
  };

  handleScroll = event => {
    const { adjustedSize } = this.state;
    const scrollPosition = event.target.scrollTop;

    if (scrollPosition) {
      // Toggle Developer section
      if (scrollPosition >= 350 && scrollPosition <= 1540) {
        this.toggleDynamicElements('developer', 'adalab', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('developer', 'adalab', HIDE_ACTION);
      }
      if (scrollPosition >= 500 && scrollPosition <= 1540 + adjustedSize) {
        this.toggleDynamicElements('developer', 'projects', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('developer', 'projects', HIDE_ACTION);
      }
      if (scrollPosition >= 450 && scrollPosition <= 1540 + adjustedSize) {
        this.toggleDynamicElements('developer', 'skills', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('developer', 'skills', HIDE_ACTION);
      }

      // Toggle Formation section
      if (
        scrollPosition >= 1050 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'psychology', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'psychology', HIDE_ACTION);
      }
      if (
        scrollPosition >= 1200 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'ir', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'ir', HIDE_ACTION);
      }
      if (
        scrollPosition >= 1320 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'master', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'master', HIDE_ACTION);
      }
      if (
        scrollPosition >= 1420 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        this.toggleDynamicElements('formation', 'programming', SHOW_ACTION);
      } else {
        this.toggleDynamicElements('formation', 'programming', HIDE_ACTION);
      }
      console.log(scrollPosition);
    }
  };

  render() {
    const { developerActivation, formationActivation } = this.state;
    const { texts, userViewedAllComponents, viewedAll } = this.props;
    return (
      <section className="scrollArea__container" onScroll={this.handleScroll}>
        <div className="main__intro">
          <MyInfoPage texts={texts.infoPage} viewedAll={viewedAll} />
        </div>
        <InbetweenBar title={texts.developer.title} />
        <DeveloperProfile
          texts={texts.developer}
          handleAdjustExpandedProjectsView={
            this.handleAdjustExpandedProjectsView
          }
          language={texts.languages.languageCode}
          developerActivation={developerActivation}
        />

        <InbetweenBar title={texts.formation.title} />
        <Formation
          texts={texts.formation}
          language={texts.languages.languageCode}
          formationActivation={formationActivation}
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
  }
}
