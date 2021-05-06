import { ReactElement } from 'react';
import * as React from 'react';
import { func, string } from 'prop-types';
import { StyledButton } from './styles';

interface Props {
  buttonStyle: string;
  onClick: (event: React.MouseEvent) => void;
  text: string;
}

const AppButton = ({ buttonStyle, onClick, text }: Props): ReactElement => (
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
