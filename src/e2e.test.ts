import puppeteer, { Browser, Page } from 'puppeteer';
import 'jest-styled-components';

describe('< e2e Testing >', () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 30
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForTimeout(1000);
  });

  it('should load correctly', async () => {
    const me = await page.$eval('[data-e2e-id="me"]', el => el.textContent);
    expect(me).toBe('Anna Branco');
  });

  xit('should display a Languages selector modal when loaded', async () => {});

  xit('should change language to Spanish when clicking on the Spanish flag on Languages modal', async () => {});

  xit('should close the modal with the selected language displayed when clicking OK on Languages modal', async () => {});

  xit('should display the modal again when the app is reloaded', async () => {});

  xit('should display the last selected language (Spanish) on the app', async () => {});

  xit('should change the language to Portuguese when the Brazil flag is clicked', async () => {});

  xit('should not display the Languages modal anymore if the checkbox Do Not SHow is left clicked', async () => {});

  xit('should change language to English if the upper USA flag is clicked', async () => {});

  xit('should open a Github page on another tab when the Github button is clicked', async () => {});

  xit('should open a LinkedIn page on another tab when the LinkedIn button is clicked', async () => {});

  xit('should open a Twitter page on another tab when the Twitter button is clicked', async () => {});

  xit('should start a Skype call when Call button is clicked', async () => {});

  xit('should start a Skype message when Chat button is clicked', async () => {});

  xit('should activate and animate Technical Competences section when scrolled down for a while', async () => {});

  xit('should display skill level of a skill when it is hovered', async () => {});

  xit('should activate and animate Own Projects section when scrolled down for a while', async () => {});

  xit('should display more projects and Previous button when Next button is clicked', async () => {});

  xit('should hide Next button when reaching the last page', async () => {});

  xit('should hide Previous button when going back to the first page', async () => {});

  xit('should trigger an animation when project thumb is hovered', async () => {});

  xit('should open project demo when the thumb is clicked', async () => {});

  xit('should open project repo when the thumb is clicked', async () => {});

  xit('should hide next button when reaching the last page', async () => {});

  xit('should activate and animate Professional Experience section when scrolled down for a while', async () => {});

  xit('should display the Sea Bed section when scrolled down until the bottom', async () => {});

  xit('should display a Shell on the bottom, and cause a transforming effect if its inner pearl is taken', async () => {});

  xit('should display swimming fishes', async () => {});

  xit('should hide instructions when Diver moves', async () => {});

  xit('should change scenario to Formation when diver is moved beyond the right edge of the main scenario', async () => {});

  xit('should display an event message when entering Formation scenario', async () => {});

  xit('should display a crab that runs away when Diver swimmes in the Formation scenario', async () => {});

  xit('should activate and animate Formation info when Sheet on the bottom is clicked', async () => {});

  xit('should hide Formation info when diver moves', async () => {});

  xit('should not display event information after Sheet is clicked', async () => {});

  xit('should prevent Diver from crossing the right side of FOrmation section and display random thoughts', async () => {});

  xit('should go back to the main scenario when Diver swimms back to the left, crossing the border', async () => {});

  xit('should change scenario to Other Informations when diver is moved beyond the left edge of the main scenario', async () => {});

  xit('should display an event message when entering Other Informations scenario', async () => {});

  xit('should activate Other Informations info when Computer on the bottom is clicked', async () => {});

  xit('should hide Other Informations info when diver moves or the screen is clicked', async () => {});

  xit('should not display event information after Other Informations is clicked', async () => {});

  xit('should display a Time To Go Back message', async () => {});

  xit('should prevent Diver from crossing the left side of Other Informations section and display random thoughts', async () => {});

  xit('should go back to the main scenario when Diver swimms back to the right, crossing the border', async () => {});

  xit('should prevent Diver from moving when she reaches the center portion of the Main scenario and trigger a diver going up animation', async () => {});

  xit('should scroll back to the beginning section after diver moves up', async () => {});

  xit('should display a Thank you message', async () => {});
});
