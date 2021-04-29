import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import {
  colorWhite,
  colorBlueLight,
  colorBlack,
  fontTitle
} from '../../../styles/theme';

interface StyledButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  buttonStyle: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid ${colorBlack};
  border-radius: 15px 0;
  margin: 5px auto;
  background-image: linear-gradient(
    ${rgba(colorWhite, 0.2)},
    ${rgba(colorBlueLight, 0.6)}
  );
  width: 100px;
  padding: 5px 0;
  text-decoration: none;
  font-family: ${fontTitle};
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 4px 0 rgba($black, 0.4),
    inset 0 1px 5px 1px rgba($white, 0.7);

  &:hover {
    transform: translate(0, 1px);
    text-decoration: none;
    box-shadow: inset 0 2px 5px 1px rgba($black, 0.4);
  }

  ${({ buttonStyle }) => {
    return (
      buttonStyle &&
      css`
        color: ${buttonStyle};
      `
    );
  }}
`;
StyledButton.displayName = 'App Button';
