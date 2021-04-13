import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import chunk from 'lodash/chunk';
import sortBy from 'lodash/sortBy';
import ProjectsList from '.';
import { getMockState, setupMockProvider } from '../../../testing/mocks';
import { SHOW_THUMBNAILS_ACTION } from '../../constants';
// import { getMockState } from '../../../testing/mocks/mockState';

describe('< ProjectsList >', () => {
  const mockProjects = getMockState({
    language: 'en'
  }).projects;
  const pagedMockProjects = chunk(sortBy(mockProjects), 4);
  let MockProvider;
  // let MOCK_STATE;
  let component;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    // MOCK_STATE = getMockState({ language: 'en' });

    component = mount(
      <MockProvider>
        <ProjectsList
          actualPage={1}
          displayThumbnails={false}
          onClickChangePage={() => null}
          projects={pagedMockProjects}
          thumbnailsStyle={SHOW_THUMBNAILS_ACTION}
          toggleProjectsThumbNails={() => null}
          totalPages={4}
        />
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
