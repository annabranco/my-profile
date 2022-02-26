import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import OtherSkillsInfo from '.';
import { setupMockProvider } from '../../../../tests/mocks';
import { MacInterface } from './macElements';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

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

  xit('should display a Languages section', () => {});

  xit('should display a Languages table rendering languages data received by props', () => {});

  xit('should display an Other Info section', () => {});

  xit('should display an Other Info table rendering data received by props', () => {});

  xit('should display a Design section on desktops', () => {});

  xit('should display a Design table rendering 6 samples with the corresponding URLs', () => {});

  xit('should translate all texts when the language is changed', () => {});
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
