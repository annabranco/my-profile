import React from 'react';
import { bool } from 'prop-types';
import ScrollArea from '../ScrollArea';

const MainArea = ({ langModalVisible }) => (
  <ScrollArea langModalVisible={langModalVisible} />
);

MainArea.propTypes = {
  langModalVisible: bool.isRequired
};

export default MainArea;
