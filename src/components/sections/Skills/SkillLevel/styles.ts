import styled from 'styled-components';
import {
  colorBlack,
  colorWhite,
  colorYellowPale
} from '../../../../styles/theme';

export const Star = styled.i`
  border-radius: 50%;
  background: ${colorBlack};
  height: 20px;
  width: 20px;
  padding-top: 5px;
  text-shadow: 0 0 5px ${colorBlack};
  font-size: 0.8rem;
  color: ${colorYellowPale};
  box-shadow: 0 0 5px 2px ${colorWhite};
  text-align: center;
`;
Star.displayName = 'Star';

export const StarsWrapper = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.9;
  }
`;
StarsWrapper.displayName = 'Stars Wrapper';
