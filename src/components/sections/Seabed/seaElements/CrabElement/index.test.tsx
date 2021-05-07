import { ShallowWrapper, shallow, HTMLAttributes } from 'enzyme';
import 'jest-styled-components';
import CrabComponent from '.';
import {
  CENTER,
  LEFT,
  ON_THE_LEFT,
  ON_THE_RIGHT
} from '../../../../../constants';

interface TheCrabProps extends HTMLAttributes {
  hidden: boolean;
  position: {
    frame: string;
    position: string;
  };
  runnaway: boolean;
}

describe('< Crab Component >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <CrabComponent
        hidden={false}
        position={{
          frame: LEFT,
          position: ON_THE_LEFT
        }}
      />
    );
    // console.log('$$$ wrapper', toJson(wrapper.children()));
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Crab image element', () => {
    expect(wrapper.find('TheCrab')).toHaveLength(1);
  });

  it('should trigger the Crab runnaway when diver moves in', () => {
    const wrapperWithDiverMovingIn = shallow(
      <CrabComponent
        hidden={false}
        position={{
          frame: CENTER,
          position: ON_THE_RIGHT
        }}
      />
    );
    const crabInitial = wrapper.find('TheCrab');
    const crabWithDiverMovingIn = wrapperWithDiverMovingIn.find('TheCrab');
    const crabInitialProps = crabInitial.props() as TheCrabProps;
    const crabWithDiverMovingInProps = crabWithDiverMovingIn.props() as TheCrabProps;

    expect(crabInitialProps.runnaway).toBe(false);
    expect(crabInitial).toHaveStyleRule('right', '50%');
    expect(crabWithDiverMovingInProps.runnaway).toBe(true);
    expect(crabWithDiverMovingIn).toHaveStyleRule('right', '-10vw');

    expect(wrapper.find('TheCrab')).toHaveLength(1);
  });
});
