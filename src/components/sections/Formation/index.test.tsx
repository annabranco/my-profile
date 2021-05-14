import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../tests/mocks/matchMedia';
import Formation from '.';
import { setupMockProvider, subSectionsStatus } from '../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

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

  xit('should render an event message on desktops', () => {});

  xit('should display a section title', () => {});

  xit('should render a list with formation received from server', () => {});

  xit('should organize the list according the the config order', () => {});

  xit('should display date, formation title, university and country flag of each formation', () => {});

  xit('should render the grade of each formation, if it exists on the data', () => {});

  xit('should translate all texts when the language is changed', () => {});
});
