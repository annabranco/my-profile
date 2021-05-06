import { shallow } from 'enzyme';
import 'jest-styled-components';
import ScrollSection from '.';
import { setupMockProvider } from '../../../../../testing/mocks';
// import { getMockState } from '../../../testing/mocks/mockState';

const MockChildren = () => <p>Mock Text</p>;

describe('< ScrollSection >', () => {
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = shallow(
      <MockProvider>
        <ScrollSection title="Mock Section">
          <MockChildren />
        </ScrollSection>
      </MockProvider>
    );
  });

  it('should mount', () => {
    expect(component).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
