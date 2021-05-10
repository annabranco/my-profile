import { Dispatch, ReactElement, SetStateAction } from 'react';
import { bool, func } from 'prop-types';
import ScrollArea from '../ScrollArea';

// TODO [10-May -21]: Check if this component is still necessary (Anna Branco)

interface Props {
  isSeabedElementOpened: boolean;
  langModalVisible: boolean;
  openSeabedElement: Dispatch<SetStateAction<boolean>>;
}

const MainArea = ({
  isSeabedElementOpened,
  langModalVisible,
  openSeabedElement
}: Props): ReactElement => (
  <ScrollArea
    isSeabedElementOpened={isSeabedElementOpened}
    langModalVisible={langModalVisible}
    openSeabedElement={openSeabedElement}
  />
);

MainArea.propTypes = {
  langModalVisible: bool.isRequired,
  isSeabedElementOpened: bool.isRequired,
  openSeabedElement: func.isRequired
};

export default MainArea;
