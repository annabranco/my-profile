import { ShallowWrapper, shallow } from 'enzyme';
import 'jest-styled-components';
import ShellElement from '.';

const callbackMock = jest.fn();

describe('< Shell Component >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <ShellElement toggleHasPearl={callbackMock} hidden={false} />
    );
    window.HTMLMediaElement.prototype.load = () => null;
    window.HTMLMediaElement.prototype.play = () =>
      new Promise(resolve => resolve());
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Shell image element', () => {
    expect(wrapper.find('TheShell')).toHaveLength(1);
  });

  it('should have a Pearl image only displayed after Shell is clicked', () => {
    const shell = wrapper.find('TheShell');
    let pearl = wrapper.find('Pearl');
    expect(pearl).toHaveLength(0);

    shell.simulate('click');
    pearl = wrapper.find('Pearl');
    expect(pearl).toHaveLength(1);
  });

  it('should hide Pearl and trigger toggleHasPearl event when Pearl is clicked', () => {
    let pearl;
    wrapper.find('TheShell').simulate('click');
    pearl = wrapper.find('Pearl');
    expect(pearl).toHaveLength(1);

    pearl.simulate('click');
    pearl = wrapper.find('Pearl');
    expect(pearl).toHaveLength(0);
    expect(callbackMock).toHaveBeenCalledTimes(1);
  });
});
