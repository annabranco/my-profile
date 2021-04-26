import styled from 'styled-components';
import { colorWhite } from '../../../styles/theme';

export const ArrowsImage = styled.img`
  position: absolute;
  bottom: 10vh;
  right: 5vw;
  width: 60%;
`;
ArrowsImage.displayName = 'ArrowsImage';

export const InstructionsText = styled.p`
  color: ${colorWhite};
  font-size: 1.5rem;
  text-align: center;
`;
InstructionsText.displayName = 'InstructionsText';

export const SwipeImage = styled.img`
  position: absolute;
  top: 10vh;
  /* margin: -10vh auto -30px; */
  width: 60%;
`;
SwipeImage.displayName = 'SwipeImage';
