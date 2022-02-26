import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../tests/mocks/matchMedia';
import LanguagesModal from '.';
import { setupMockProvider } from '../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< LanguagesModal >', () => {
  let MockProvider;
  let wrapper: ReactWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;

    wrapper = mount(
      <MockProvider>
        <LanguagesModal
          hideForever
          onCloseLanguageModal={() => null}
          toggleBlockLangModal={() => null}
        />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should display all languages options received from server', () => {});

  xit('should display a flag and the name of each language', () => {});

  xit('should change the app language when the flag or name is clicked', () => {});

  xit('should close modal when OK button is clicked', () => {});

  xit('should set language preferencies on localstorage when OK button is clicked', () => {});
});
