/// <reference types="Cypress" />

import { chunk, sortBy } from 'lodash';
import TEXTS from '../../db/texts.json';
import SKILLS from '../../db/skills.json';
import PROJECTS from '../../db/projectsDB.json';

const { en: ENGLISH, es: SPANISH, pt: PORTUGUESE } = TEXTS;
let displayLanguagesModal = true;

describe('Changing Languages', () => {
  beforeEach(() => {
    if (!displayLanguagesModal) {
      localStorage.setItem(
        "Anna Branco's professional profile",
        JSON.stringify({ language: 'en', hideLanguagesModalForever: true })
      );
    }
    cy.visit('/');
    cy.wait(2000);
  });

  it('mounts correctly', () => {
    cy.contains('Anna Branco');
    cy.contains('Frontend Developer');
  });

  it('should display a functional Languages selector modal when loaded', () => {
    cy.get('[data-e2e-id="languagesModal"]').should('exist');
  });

  it('should change language to Spanish when clicking on the Spanish flag on Languages modal', () => {
    cy.get('[data-e2e-id="langModal-instructionsText"]').should(
      'have.text',
      ENGLISH.languages.changeUpperBar
    );
    cy.get('[data-e2e-id="langModal-flag_es"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="langModal-instructionsText"]').should(
      'have.text',
      SPANISH.languages.changeUpperBar
    );
  });

  it('should close the modal with the selected language displayed when clicking OK on Languages modal', () => {
    cy.get('[data-e2e-id="langModal-flag_es"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="langModal-ok"]').click({
      scrollBehavior: false
    });
    // TOFIX: Not triggering toggleModalVisible(false) on App.tsx
    // cy.get('[data-e2e-id="languagesModal"]').should('not.exist');
    cy.get('[data-e2e-id="appTitle"]').should(
      'have.text',
      SPANISH.header.title
    );
    cy.get('[data-e2e-id="jobTitle"]').should(
      'have.text',
      SPANISH.infoPage.job
    );
  });

  it('should change the language to Portuguese when the Brazil flag is clicked', () => {
    cy.get('[data-e2e-id="langModal-instructionsText"]').should(
      'have.text',
      ENGLISH.languages.changeUpperBar
    );
    cy.get('[data-e2e-id="langModal-flag_br"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="langModal-instructionsText"]').should(
      'have.text',
      PORTUGUESE.languages.changeUpperBar
    );
  });

  it('should display the languages modal again, with the last selected language, the next time the user accesses the app', () => {
    cy.get('[data-e2e-id="languagesModal"]').should('exist');
    cy.get('[data-e2e-id="langModal-flag_es"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="langModal-ok"]').click({
      scrollBehavior: false
    });
    cy.reload();
    cy.get('[data-e2e-id="languagesModal"]').should('exist');
  });

  it('should not display the Languages modal anymore if the checkbox "Do not show" is left clicked', () => {
    cy.get('[data-e2e-id="languagesModal"]').should('exist');
    cy.get('[data-e2e-id="langModal-checkbox"]').check();
    cy.get('[data-e2e-id="langModal-ok"]').click({
      scrollBehavior: false
    });
    cy.reload();
    cy.get('[data-e2e-id="languagesModal"]').should('not.exist');
    displayLanguagesModal = false;
  });

  it('should change language when Header flags are clicked', () => {
    cy.get('[data-e2e-id="appTitle"]').should(
      'have.text',
      ENGLISH.header.title
    );
    cy.get('[data-e2e-id="header-flag_es"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="appTitle"]').should(
      'have.text',
      SPANISH.header.title
    );
    cy.get('[data-e2e-id="header-flag_br"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="appTitle"]').should(
      'have.text',
      PORTUGUESE.header.title
    );
    cy.get('[data-e2e-id="header-flag_us"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="appTitle"]').should(
      'have.text',
      ENGLISH.header.title
    );
  });
});

describe('Using social buttons', () => {
  before(() => {
    localStorage.setItem(
      "Anna Branco's professional profile",
      JSON.stringify({ language: 'en', hideLanguagesModalForever: true })
    );
    cy.visit('/');
  });

  it('should be able to send me en e-mail', () => {
    cy.get('[data-e2e-id="social-email"]')
      .should('have.attr', 'href')
      .and('equals', 'mailto:anya.branco@icloud.com');
  });

  it('should open my Github page when Github button is clicked', () => {
    cy.get('[data-e2e-id="social-github"]')
      .should('have.attr', 'href')
      .and('equals', 'https://github.com/annabranco')
      .as('url');
    cy.request('@url');
  });
  it('should open my LinkedIn page when LinkedIn button is clicked', () => {
    cy.get('[data-e2e-id="social-linkedin"]')
      .should('have.attr', 'href')
      .and('equals', 'https://www.linkedin.com/in/annabranco/')
      .as('url');
    cy.request('@url');
  });

  it('should open my Twitter page when LinkedIn button is clicked', () => {
    cy.get('[data-e2e-id="social-twitter"]')
      .should('have.attr', 'href')
      .and('equals', 'https://twitter.com/AnyaBranco')
      .as('url');
    cy.request('@url');
  });

  it('should start a Skype call or chat when Skype buttons are clicked', () => {
    cy.get('[data-e2e-id="social-skype_chat"]')
      .should('have.attr', 'href')
      .and('equals', 'skype:live%3Aanna.branco_3?chat')
      .as('url');
    cy.request('@url');

    cy.get('[data-e2e-id="social-skype_call"]')
      .should('have.attr', 'href')
      .and('equals', 'skype:live%3Aanna.branco_3?call')
      .as('url');
    cy.request('@url');
  });
});

describe('Scrolling down to Technical Competences section', () => {
  before(() => {
    localStorage.setItem(
      "Anna Branco's professional profile",
      JSON.stringify({ language: 'en', hideLanguagesModalForever: true })
    );
    cy.visit('/');
  });

  beforeEach(() => {
    cy.wait(2000);
  });

  it('should activate Technical Competences section when scrolled down for a while', () => {
    cy.get('[data-e2e-id="section-skills"]').should('not.be.visible');

    cy.get('[data-e2e-id="section-skills"]')
      .scrollIntoView()
      .should('be.visible');
  });

  it('should update language when the language flag is clicked', () => {
    cy.get('[data-e2e-id="section-skills"]').should(
      'have.text',
      ENGLISH.sections.technical
    );
    cy.get('[data-e2e-id="header-flag_es"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="section-skills"]').should(
      'have.text',
      SPANISH.sections.technical
    );
  });

  it('should display all skills separated by groups', () => {
    const skillsGroups = SKILLS.map(skill => skill.name);
    skillsGroups.forEach(skill => {
      cy.contains(skill);
    });
  });

  it('should display the level of a skill when it is hovered', () => {
    cy.get('[data-e2e-id="skill-React"]').should('have.text', 'React');
    cy.get('[data-e2e-id="skill-React_star"]')
      .should('have.length', 3)
      .should('not.be.visible');

    cy.get('[data-e2e-id="skill-Docker"]').should('have.text', 'Docker');
    cy.get('[data-e2e-id="skill-Docker_star"]')
      .should('have.length', 1)
      .should('not.be.visible');
    // Currently there is no way to trigger CSS effect on hover
    // see https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/testing-dom__hover-hidden-elements
    // so something like the following test cannot be done:
    // cy.get('[data-e2e-id="skill-React_starsWrapper"]').hover();
    // reactLevel.should('be.visible');
  });
});

describe('Scrolling down to  Own Projects  section', () => {
  before(() => {
    localStorage.setItem(
      "Anna Branco's professional profile",
      JSON.stringify({ language: 'en', hideLanguagesModalForever: true })
    );
    cy.visit('/');
    cy.get('[data-e2e-id="section-projects"]').should('not.be.visible');
    cy.get('[data-e2e-id="section-projects"]').scrollIntoView({
      offset: { top: -20, left: 0 },
      easing: 'linear'
    });
  });

  beforeEach(() => {
    cy.wait(2000);
  });

  it('should activate Own Projects section when scrolled down for a while', () => {
    cy.get('[data-e2e-id="section-projects"]').should('be.visible');
  });

  it('should update language when the language flag is clicked', () => {
    cy.get('[data-e2e-id="section-projects"]').should(
      'have.text',
      ENGLISH.sections.projects
    );
    cy.get('[data-e2e-id="header-flag_es"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id="section-projects"]').should(
      'have.text',
      SPANISH.sections.projects
    );
  });

  it('should display more projects when Next button is clicked', () => {
    cy.get('[data-e2e-id*="projects-title"]')
      .should('have.length', 2)
      .contains(PROJECTS[0].title);
    cy.get('[data-e2e-id*="projects-title"]')
      .should('have.length', 2)
      .contains(PROJECTS[1].title);
    cy.get('[data-e2e-id="projects-button_advance"]').click({
      scrollBehavior: false
    });
    cy.get('[data-e2e-id*="projects-title"]')
      .should('have.length', 2)
      .contains(PROJECTS[2].title);
    cy.get('[data-e2e-id*="projects-title"]')
      .should('have.length', 2)
      .contains(PROJECTS[3].title);
  });

  it('should hide Next button when reaching the last page', () => {
    const projectsOrdered = chunk(sortBy(PROJECTS), 2);
    for (let x = 0; x < projectsOrdered.length - 2; x++) {
      // length - 1 to not count the first page & -1 because we already moved one page
      cy.get('[data-e2e-id="projects-button_advance"]').click({
        scrollBehavior: false
      });
    }
    cy.get('[data-e2e-id="projects-button_advance"]').should('not.be.visible');
  });

  it('should hide Previous button when going back to the first page', () => {
    const projectsOrdered = chunk(sortBy(PROJECTS), 2);

    cy.get('[data-e2e-id="projects-button_back"]').should('be.visible');
    for (let x = 0; x < projectsOrdered.length - 1; x++) {
      cy.get('[data-e2e-id="projects-button_back"]').click({
        scrollBehavior: false
      });
    }
    cy.get('[data-e2e-id="projects-button_back"]').should('not.be.visible');
  });

  it('should open project demo when the thumb or title are clicked', () => {
    cy.get(`[data-e2e-id="projects-title_${PROJECTS[0].title}"]`)
      .should('have.attr', 'href')
      .and('equals', PROJECTS[0].url)
      .as('url');
    cy.request('@url');
    cy.get(`[data-e2e-id="projects-thumb_${PROJECTS[0].title}"]`)
      .should('have.attr', 'href')
      .and('equals', PROJECTS[0].url)
      .as('url');
    cy.request('@url');
    cy.get(`[data-e2e-id="projects-title_${PROJECTS[1].title}"]`)
      .should('have.attr', 'href')
      .and('equals', PROJECTS[1].url)
      .as('url');
    cy.request('@url');
    cy.get(`[data-e2e-id="projects-thumb_${PROJECTS[1].title}"]`)
      .should('have.attr', 'href')
      .and('equals', PROJECTS[1].url)
      .as('url');
    cy.request('@url');
  });

  it('should open project repo when the repo url is clicked', () => {
    cy.get(`[data-e2e-id="projects-repo_${PROJECTS[0].title}"]`).contains(
      PROJECTS[0].repo.replace('https://github.com', '')
    );
    cy.get(`[data-e2e-id="projects-repo_${PROJECTS[0].title}"]`)
      .should('have.attr', 'href')
      .and('equals', PROJECTS[0].repo)
      .as('url');
    cy.request('@url');
    cy.get(`[data-e2e-id="projects-repo_${PROJECTS[1].title}"]`).contains(
      PROJECTS[1].repo.replace('https://github.com', '')
    );
    cy.get(`[data-e2e-id="projects-repo_${PROJECTS[1].title}"]`)
      .should('have.attr', 'href')
      .and('equals', PROJECTS[1].repo)
      .as('url');
    cy.request('@url');
  });
});

describe.skip('Scrolling down to  Professional Experience  section', () => {
  it('should activate and animate Professional Experience section when scrolled down for a while', async () => {});
});

describe.skip('Scrolling down to  Seabed section', () => {
  it('should display the Sea Bed section when scrolled down until the bottom', async () => {});

  it('should display a Shell on the bottom, and cause a transforming effect if its inner pearl is taken', async () => {});

  it('should display swimming fishes', async () => {});

  it('should hide instructions when Diver moves', async () => {});

  it('should change scenario to Formation when diver is moved beyond the right edge of the main scenario', async () => {});

  it('should display an event message when entering Formation scenario', async () => {});

  it('should display a crab that runs away when Diver swimmes in the Formation scenario', async () => {});

  it('should activate and animate Formation info when Sheet on the bottom is clicked', async () => {});

  it('should hide Formation info when diver moves', async () => {});

  it('should not display event information after Sheet is clicked', async () => {});

  it('should prevent Diver from crossing the right side of FOrmation section and display random thoughts', async () => {});

  it('should go back to the main scenario when Diver swimms back to the left, crossing the border', async () => {});

  it('should change scenario to Other Informations when diver is moved beyond the left edge of the main scenario', async () => {});

  it('should display an event message when entering Other Informations scenario', async () => {});

  it('should activate Other Informations info when Computer on the bottom is clicked', async () => {});

  it('should hide Other Informations info when diver moves or the screen is clicked', async () => {});

  it('should not display event information after Other Informations is clicked', async () => {});

  it('should display a Time To Go Back message', async () => {});

  it('should prevent Diver from crossing the left side of Other Informations section and display random thoughts', async () => {});

  it('should go back to the main scenario when Diver swimms back to the right, crossing the border', async () => {});

  it('should prevent Diver from moving when she reaches the center portion of the Main scenario and trigger a diver going up animation', async () => {});

  it('should scroll back to the beginning section after diver moves up', async () => {});

  it('should display a Thank you message', async () => {});
});
