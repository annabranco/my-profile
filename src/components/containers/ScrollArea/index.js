import React from 'react';
import { DeveloperProfile, Seabed } from '../';
import { InbetweenBar, Formation, MyInfoPage } from '../../views';

export class ScrollArea extends React.Component {
  state = {
    adjustedSize: 0
  };

  handleAdjustExpandedProjectsView = adjust =>
    this.setState({
      adjustedSize: adjust
    });

  handleScroll = event => {
    const { adjustedSize } = this.state;
    const scrollPosition = event.target.scrollTop;

    if (scrollPosition) {
      if (scrollPosition >= 350 && scrollPosition <= 1540) {
        document.querySelector('.developer__formation').classList.add('comeIn');
      } else {
        document
          .querySelector('.developer__formation')
          .classList.remove('comeIn');
      }

      if (scrollPosition >= 500 && scrollPosition <= 1540 + adjustedSize) {
        document.querySelector('.developer__projects').classList.add('comeIn');
      } else {
        document
          .querySelector('.developer__projects')
          .classList.remove('comeIn');
      }

      if (scrollPosition >= 450 && scrollPosition <= 1540 + adjustedSize) {
        document.querySelector('.developer__sidebar').classList.add('comeIn');
      } else {
        document
          .querySelector('.developer__sidebar')
          .classList.remove('comeIn');
      }

      if (
        scrollPosition >= 1050 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        document
          .querySelector('.formation__horizontarBar-psy')
          .classList.add('comeIn');
        document.querySelector('.formation__title-psy').classList.add('comeIn');
        for (const each of document.querySelectorAll(
          '.formation__details-psy'
        )) {
          each.classList.add('comeIn');
        }
      } else {
        document
          .querySelector('.formation__horizontarBar-psy')
          .classList.remove('comeIn');
        document
          .querySelector('.formation__title-psy')
          .classList.remove('comeIn');
        for (const each of document.querySelectorAll(
          '.formation__details-psy'
        )) {
          each.classList.remove('comeIn');
        }
      }

      if (
        scrollPosition >= 1200 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        document
          .querySelector('.formation__horizontarBar-ir')
          .classList.add('comeIn');
        document.querySelector('.formation__title-ir').classList.add('comeIn');
        for (const each of document.querySelectorAll(
          '.formation__details-ir'
        )) {
          each.classList.add('comeIn');
        }
      } else {
        document
          .querySelector('.formation__horizontarBar-ir')
          .classList.remove('comeIn');
        document
          .querySelector('.formation__title-ir')
          .classList.remove('comeIn');
        for (const each of document.querySelectorAll(
          '.formation__details-ir'
        )) {
          each.classList.remove('comeIn');
        }
      }

      if (
        scrollPosition >= 1320 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        document
          .querySelector('.formation__horizontarBar-master')
          .classList.add('comeIn');
        document
          .querySelector('.formation__title-master')
          .classList.add('comeIn');
        for (const each of document.querySelectorAll(
          '.formation__details-master'
        )) {
          each.classList.add('comeIn');
        }
      } else {
        document
          .querySelector('.formation__horizontarBar-master')
          .classList.remove('comeIn');
        document
          .querySelector('.formation__title-master')
          .classList.remove('comeIn');
        for (const each of document.querySelectorAll(
          '.formation__details-master'
        )) {
          each.classList.remove('comeIn');
        }
      }

      if (
        scrollPosition >= 1420 + adjustedSize &&
        scrollPosition <= 2000 + adjustedSize
      ) {
        document
          .querySelector('.formation__horizontarBar-adalab')
          .classList.add('comeIn');
        document
          .querySelector('.formation__title-adalab')
          .classList.add('comeIn');
      } else {
        document
          .querySelector('.formation__horizontarBar-adalab')
          .classList.remove('comeIn');
        document
          .querySelector('.formation__title-adalab')
          .classList.remove('comeIn');
      }
      console.log(scrollPosition);
    }
  };

  render() {
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
  }
}
