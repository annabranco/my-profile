import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import ProjectsList from '.';
import { getMockState, setupMockProvider } from '../../../../tests/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< ProjectsList >', () => {
  const mockProjects = getMockState({
    language: 'en'
  }).projects;
  const pagedMockProjects = chunk(sortBy(mockProjects), 4);
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <ProjectsList
          actualPage={1}
          onClickChangePage={() => jest.fn()}
          projects={pagedMockProjects}
          totalPages={4}
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

  xit('should only render Projects List when visible prop is true or on devices', () => {});

  xit('should render grid with all projects received from props', () => {});

  xit('should render a button to advance a page of projects', () => {});

  xit('should not render a button to advance if there are only two projects', () => {});

  xit('should render a button to go back a page of projects when not on the first page', () => {});
});
