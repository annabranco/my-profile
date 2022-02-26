import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import Experiences from '.';
import { setupMockProvider } from '../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< Experiences >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <Experiences cuePointsActivated={new Set()} />
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  xit('should render all experiences received from server', () => {});

  xit('should dislay the experiences correctly ordered according to the custom order configured', () => {});

  xit('should display date, title and details of each experience', () => {});

  xit('should display the country flag of each experience', () => {});

  xit('should open the details on a modal when an experience is clicked on devices', () => {});

  xit('should display animation when cuepoints are activated', () => {});

  xit('should translate all texts when the language is changed', () => {});
});
