/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { node, func } from 'prop-types';
import { ModalOverlay } from './styles';

const AppModal = ({ children, closeAction }) => {
  return <ModalOverlay onClick={closeAction}>{children}</ModalOverlay>;
};

AppModal.propTypes = {
  children: node,
  closeAction: func
};

AppModal.defaultProps = {
  children: undefined,
  closeAction: () => null
};

export default AppModal;
