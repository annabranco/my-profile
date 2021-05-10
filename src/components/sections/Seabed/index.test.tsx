import { shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';
import '../../../../testing/mocks/matchMedia';
import SeaBed from '.';
import { setupMockProvider } from '../../../../testing/mocks';

// TODO [10-May -21]: Implement defined testing suite (Anna Branco)

describe('< SeaBed >', () => {
  let MockProvider;
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    MockProvider = setupMockProvider({ language: 'en' }).MockProvider;
    wrapper = shallow(
      <MockProvider>
        <SeaBed
          cuePointsActivated={new Set()}
          openSeabedElement={() => jest.fn()}
          resetScrollPosition={() => jest.fn()}
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

  xit('should render a seabed ambience', () => {});

  xit('should render an animated diver image', () => {});

  xit('should render animated titles of Formation and Other Skills sections', () => {});

  xit('should render instructions on mount', () => {});

  xit('should hide instructions when any key is pressed', () => {});

  xit('should move the diver correctly when key right and left are pressed', () => {});

  xit('should change to Formation scenario when the right of the screen is crossed by the diver', () => {});

  xit('should render an event message on the first time the Formation acenario is accessed', () => {});

  xit('should render a Formation component minimized on the form of a sheet on the Formation scenario', () => {});

  xit('should trigger Formation component to be fully displayed owhen clicked', () => {});

  xit('should minimize Formation component when fully opened and the diver moves', () => {});

  xit('should render a seabed ambience', () => {});

  xit('should change to Other Skills scenario when the left of the screen is crossed by the diver', () => {});

  xit('should render an event message on the first time the Other Skills acenario is accessed', () => {});

  xit('should render a Other Skills component minimized on the form of a notebook on the Other Skills scenario', () => {});

  xit('should trigger Other Skills component to be fully displayed owhen clicked', () => {});

  xit('should minimize Other Skills component when fully opened and the diver moves', () => {});

  xit('should render a Fish, a Shell and a Crab components', () => {});

  xit('should change the diver image when peralFOund is triggered, and change it back when diver moves', () => {});

  xit('should display my name on the sand, only on the main scenario', () => {});

  xit('should render random diver thoughts when trying to leave the game area', () => {});

  xit('should trigger end game animation when both Formation and Other Skills contents were seen and diver reaches the center on the main scenario', () => {});

  xit('should translate all texts when the language is changed', () => {});
});
