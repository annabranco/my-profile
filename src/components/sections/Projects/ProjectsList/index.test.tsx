import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import ProjectsList from '.';
import { getMockState, setupMockProvider } from '../../../../../testing/mocks';

// TODO [07-May -21]: Define real test suits (Anna Branco)

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
});
