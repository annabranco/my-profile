import { mount } from 'enzyme';
import 'jest-styled-components';
import SkillLevel from '.';
import { setupMockProvider } from '../../../testing/mocks';
// import { getMockState } from '../../../testing/mocks/mockState';

describe('< SkillLevel >', () => {
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = mount(
      <MockProvider>
        <SkillLevel level={3} skill="mockSkill" />
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
