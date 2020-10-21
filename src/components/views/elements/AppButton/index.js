import React from 'react';
import { string, func } from 'prop-types';
import { StyledButton } from './styles';

const AppButton = ({ text, buttonStyle, onClick }) => (
  <StyledButton buttonStyle={buttonStyle} onClick={onClick} type="button">
    {text}
  </StyledButton>
);

AppButton.propTypes = {
  text: string.isRequired,
  buttonStyle: string,
  onClick: func
};

AppButton.defaultProps = {
  buttonStyle: 'default',
  onClick: () => null
};

export default AppButton;
