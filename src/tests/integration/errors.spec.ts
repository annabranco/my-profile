/// <reference types="Cypress" />

import TEXTS from '../../db/texts.json';
import appInfo from '../../../package.json';

const { en: ENGLISH } = TEXTS;
const REPORT_ISSUE_PAGE = `${appInfo.bugs.url}/new`;

describe('Catching errors', () => {
  before(() => {
    cy.on('uncaught:exception', () => false);
    cy.visit('/');
    cy.intercept('https://raw.githubusercontent.com/annabranco/**', {
      forceNetworkError: true
    });
  });

  it('should display an error screen when something bad happens', () => {
    cy.get('[data-e2e-id="error-title"]').should(
      'have.text',
      ENGLISH.error.title
    );
    cy.get('[data-e2e-id="error-sorryText"]').contains(
      ENGLISH.error.errorLine1
    );
    cy.get('[data-e2e-id="error-sorryText"]').contains(
      ENGLISH.error.errorLine2
    );
  });

  it('should display the error message', () => {
    cy.get('[data-e2e-id="error-message"]').should(
      'include.text',
      'Cannot read property'
    );
  });

  it('should navigate to my github issues page when notify button is clicked', () => {
    cy.get('[data-e2e-id="error-button"]').contains(ENGLISH.error.notifyMe);
    cy.get('[data-e2e-id="error-button"]')
      .should('have.attr', 'href')
      .and('equals', REPORT_ISSUE_PAGE)
      .as('url');
    cy.request('@url');
  });
});
