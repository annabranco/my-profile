/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement, ReactNode } from 'react';

import * as React from 'react';
import { func, node } from 'prop-types';
import { ModalOverlay } from './styles';

interface Props {
  children: ReactNode | ReactNode[];
  closeAction?: (event: React.MouseEvent) => void;
}

const AppModal = ({ children, closeAction }: Props): ReactElement => {
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
