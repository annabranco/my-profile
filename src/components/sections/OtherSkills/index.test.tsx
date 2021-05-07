import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import OtherSkills from '.';
import {
  setupMockProvider,
  subSectionsStatus
} from '../../../../testing/mocks';

// TODO [07-May -21]: Define real test suits (Anna Branco)

describe('< OtherSkills >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <OtherSkills
          onClickClose={() => null}
          onClickOpen={() => null}
          status={subSectionsStatus}
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
