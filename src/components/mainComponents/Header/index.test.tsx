import { mount, ReactWrapper, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import renderer, {
  ReactTestRenderer,
  ReactTestInstance
} from 'react-test-renderer';
import Header from './index';
import appInfo from '../../../../package.json';
import { setupMockProvider, getMockState } from '../../../tests/mocks';
import { CHANGE_LANGUAGE } from '../../../constants';
import { AppTitle, Flag } from './styles';
import { IAppState } from '../../../types/interfaces';
import '../../../tests/mocks/matchMedia';

// TODO [10-May -21]: Refine testing (Anna Branco)

const APP_VERSION = appInfo.version;

describe('< Header Component >', () => {
  let MockProvider;
  let MOCK_STATE: IAppState;
  let wrapper: ReactWrapper;
  // let testInstance: ReactTestInstance;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    MOCK_STATE = getMockState({ language: 'en' });

    wrapper = mount(
      <MockProvider>
        <Header hideForever isSeabedElementOpened />
      </MockProvider>
    );
    // console.log('$$$ wrapper', toJson(wrapper.children()));

    // testInstance = wrapper.root;
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should display the App title', () => {
  //   const { title } = MOCK_STATE.texts.header;

  //   expect(wrapper.find('div').text()).toBe(title);
  // });

  // it('should display the App version', () => {
  //   expect(testInstance.find('Version').text()).toBe(APP_VERSION);
  // });

  // it('should display a languages wrapper', () => {
  //   expect(testInstance.find('LanguagesWrapper').exists()).toBe(true);
  // });

  // it('should display country flags for each active language from state', () => {
  //   const activeLanguages: string[] = [];

  //   MOCK_STATE.languages
  //     .filter(lang => lang.active)
  //     .forEach(lang => activeLanguages.push(lang.flagCode));

  //   const renderedFlags = testInstance.find('Flag').children();

  //   renderedFlags.forEach((flagWrapper: HTMLDivElement, index: number) => {
  //     const url = flagWrapper.children().first().props().src;
  //     const expectedUrl = `https://www.countryflags.io/${activeLanguages[index]}/flat/16.png`;

  //     expect(url).toBe(expectedUrl);
  //   });
  //   expect(renderedFlags).toHaveLength(activeLanguages.length);
  // });

  it('should highlight the active language flag', () => {
    const flagEnglish = shallow(<Flag lang="en" languageSelected="en" />);
    const flagPortuguese = shallow(<Flag lang="pt" languageSelected="en" />);

    expect(toJson(flagEnglish)).toHaveStyleRule('opacity', '1');
    expect(toJson(flagPortuguese)).toHaveStyleRule(
      'opacity',
      expect.stringContaining('0.')
    );
  });

  // it('should dispatch a CHANGE_LANGUAGE action when a flag is clicked', () => {
  //   const dispatchSpy = jest.spyOn(window, 'interceptedDispatch');
  //   const flag = testInstance.find('Flag').children().last();
  //   const flagLanguage = flag.props().lang;

  //   flag.simulate('click');

  //   expect(dispatchSpy).toHaveBeenCalledTimes(1);
  //   expect(dispatchSpy).toHaveBeenCalledWith({
  //     payload: flagLanguage,
  //     type: CHANGE_LANGUAGE
  //   });
  // });

  // it('should change Title when state language changes', () => {
  //   const { title: englishTitle } = MOCK_STATE.texts.header;
  //   const { title: spanishhTitle } = getMockState({
  //     language: 'es'
  //   }).texts.header;

  //   expect(testInstance.find('AppTitle').text()).toBe(englishTitle);

  //   const MockProviderWithStateChange = setupMockProvider({ language: 'es' })
  //     .MockProvider;
  //   const componentAfterLanguageChange = mount(
  //     <MockProviderWithStateChange>
  //       <Header hideForever isSeabedElementOpened />
  //     </MockProviderWithStateChange>
  //   );

  //   expect(componentAfterLanguageChange.find('AppTitle').text()).toBe(
  //     spanishhTitle
  //   );
  // });
});
