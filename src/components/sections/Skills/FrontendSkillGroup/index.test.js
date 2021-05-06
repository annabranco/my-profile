import { mount } from 'enzyme';
import 'jest-styled-components';
import FrontendSkillGroup from '.';
import { getMockState, setupMockProvider } from '../../../testing/mocks';
// import { getMockState } from '../../../testing/mocks/mockState';

describe('< FrontendSkillGroup >', () => {
  const mockSkillObject = getMockState({
    language: 'en'
  }).skills[0];
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    // eslint-disable-next-line prefer-destructuring

    component = mount(
      <MockProvider>
        <FrontendSkillGroup details={mockSkillObject} visible />
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
