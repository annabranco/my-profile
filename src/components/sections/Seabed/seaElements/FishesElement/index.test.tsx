import React, { Component, ReactElement } from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import FishesElement from '.';
import { Fish } from './styles';
import { LEFT } from '../../../../../constants';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

const MockFish = () => (
  <Fish
    alt="Mocked Fish"
    bottom="20%"
    delay="0s"
    facing={LEFT}
    key="fish"
    movementType="ease-in"
    side={LEFT}
    speed="1s"
    src="fish"
    waving={false}
  />
);

describe('< FishesElement >', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<FishesElement />);
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  xit('matches the snapshot', () => {
    // As Fishes elements are created randomly on init, snapshots will never match
    expect(wrapper).toMatchSnapshot();
  });

  it('should render at least one Fish on screen', () => {
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());

    expect(wrapper.find('Fish').length).toBeGreaterThanOrEqual(1);
  });
});
