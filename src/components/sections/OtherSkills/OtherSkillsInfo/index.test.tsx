import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import OtherSkillsInfo from '.';
import { setupMockProvider } from '../../../../../testing/mocks';
import { MacInterface } from './macElements';

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< OtherSkillsInfo >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <OtherSkillsInfo
          onClickOpen={() => jest.fn()}
          onClickClose={() => jest.fn()}
          visible
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

describe('< MacElements >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<MacInterface />);
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
