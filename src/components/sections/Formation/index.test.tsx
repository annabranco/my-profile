import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import Formation from '.';
import {
  setupMockProvider,
  subSectionsStatus
} from '../../../../testing/mocks';

// TODO [07-May -21]: Define real test suites (Anna Branco)

describe('< Formation >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <Formation
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
