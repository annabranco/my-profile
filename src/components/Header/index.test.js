import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Header from './index';
import appInfo from '../../../package.json';
import { setupMockProvider, getMockState } from '../../../testing/mocks';
import { CHANGE_LANGUAGE } from '../../constants';
import { Flag } from './styles';

const APP_VERSION = appInfo.version;

describe('< ErrorComponent >', () => {
  let MockProvider;
  let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    MOCK_STATE = getMockState({ language: 'en' });

    component = mount(
      <MockProvider>
        <Header hideForever />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(component).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should display the App title', () => {
    const { title } = MOCK_STATE.texts.header;
    expect(component.find('AppTitle').text()).toBe(title);
  });

  it('should display the App version', () => {
    expect(component.find('Version').text()).toBe(APP_VERSION);
  });

  it('should display a languages wrapper', () => {
    expect(component.find('LanguagesWrapper').exists()).toBe(true);
  });

  it('should display country flags for each active language from state', () => {
    const activeLanguages = [];

    MOCK_STATE.languages
      .filter(lang => lang.active)
      .forEach(lang => activeLanguages.push(lang.flagCode));

    const renderedFlags = component.find('Flag').children();

    renderedFlags.forEach((flagWrapper, index) => {
      const url = flagWrapper.children().first().props().src;
      const expectedUrl = `https://www.countryflags.io/${activeLanguages[index]}/flat/16.png`;

      expect(url).toBe(expectedUrl);
    });
    expect(renderedFlags).toHaveLength(activeLanguages.length);
  });

  it('should highlight the active language flag', () => {
    const flagEnglish = shallow(<Flag lang="en" languageSelected="en" />);
    const flagPortuguese = shallow(<Flag lang="pt" languageSelected="en" />);

    expect(toJson(flagEnglish)).toHaveStyleRule('opacity', '1');
    expect(toJson(flagPortuguese)).toHaveStyleRule(
      'opacity',
      expect.stringContaining('0.')
    );
  });

  it('should dispatch a CHANGE_LANGAUGE action when a flag is clicked', () => {
    const dispatchSpy = jest.spyOn(window, 'interceptedDispatch');
    const flag = component.find('Flag').children().last();
    const flagLanguage = flag.props().lang;

    flag.simulate('click');

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith({
      payload: flagLanguage,
      type: CHANGE_LANGUAGE
    });
  });

  it('should change Title when state language changes', () => {
    const { title: englishTitle } = MOCK_STATE.texts.header;
    const { title: spanishhTitle } = getMockState({
      language: 'es'
    }).texts.header;

    expect(component.find('AppTitle').text()).toBe(englishTitle);

    const MockProviderWithStateChange = setupMockProvider({ language: 'es' })
      .MockProvider;
    const componentAfterLanguageChange = mount(
      <MockProviderWithStateChange>
        <Header hideForever />
      </MockProviderWithStateChange>
    );

    expect(componentAfterLanguageChange.find('AppTitle').text()).toBe(
      spanishhTitle
    );
  });
});
