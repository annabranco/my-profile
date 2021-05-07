import { mount, ReactWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import LanguagesModal from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// TODO [07-May -21]: Enhance Testing (Anna Branco)

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
});
