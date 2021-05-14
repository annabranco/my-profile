import { ReactElement } from 'react';
import * as React from 'react';
import { func, string } from 'prop-types';
import { StyledButton } from './styles';

interface Props {
  buttonStyle: string;
  datae2eid: string;
  onClick: (event: React.MouseEvent) => void;
  text: string;
}

const AppButton = ({
  buttonStyle,
  datae2eid,
  onClick,
  text
}: Props): ReactElement => (
  <StyledButton
    buttonStyle={buttonStyle}
    data-e2e-id={datae2eid}
    onClick={onClick}
    type="button"
  >
    {text}
  </StyledButton>
);

AppButton.propTypes = {
  buttonStyle: string,
  datae2eid: string,
  onClick: func,
  text: string.isRequired
};

AppButton.defaultProps = {
  buttonStyle: 'default',
  datae2eid: null,
  onClick: () => null
};

export default AppButton;
