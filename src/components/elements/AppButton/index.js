import React from 'react';
import { func, string } from 'prop-types';
import { StyledButton } from './styles';

const AppButton = ({ buttonStyle, onClick, text }) => (
  <StyledButton buttonStyle={buttonStyle} onClick={onClick} type="button">
    {text}
  </StyledButton>
);

AppButton.propTypes = {
  buttonStyle: string,
  onClick: func,
  text: string.isRequired
};

AppButton.defaultProps = {
  buttonStyle: 'default',
  onClick: () => null
};

export default AppButton;
