import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../tests/mocks/matchMedia';
import OtherSkills from '.';
import { setupMockProvider, subSectionsStatus } from '../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

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

  xit('should render an event message on desktops', () => {});

  xit('should display a section title', () => {});

  xit('should display a notebook element', () => {});

  xit('should call prop onClickOpen when notebook is clicked', () => {});

  xit('should display a SectionOtherSkills component passing the visibility prop', () => {});

  xit('should render a Mac interface simulation on desktops when prop visible is true', () => {});

  xit('should translate all texts when the language is changed', () => {});
});
