import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../tests/mocks/matchMedia';
import MyInfoPage from '.';
import { setupMockProvider } from '../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< MyInfoPage >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <MyInfoPage />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should display my name correctly on desktop and devices', () => {});

  xit('should display my photo', () => {});

  xit('should display a job title updated with data obtained from server', () => {});

  xit('should render a Social component', () => {});

  xit('should display a thanks message when all app is viewed', () => {});

  xit('should display a boat animation', () => {});

  xit('should display a desktop recommendation advise on devices', () => {});

  xit('should display animated arrows on desktop', () => {});

  xit('should translate all texts when the language is changed', () => {});
});
