import React from 'react';
import { bool, func } from 'prop-types';
import ScrollArea from '../ScrollArea';

const MainArea = ({
  isSeabedElementOpened,
  langModalVisible,
  openSeabedElement
}) => (
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
