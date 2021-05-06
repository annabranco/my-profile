import { ReactElement } from 'react';
import { bool } from 'prop-types';
import { IPosition } from '../../../../../types/interfaces';
import { Crab } from '../../../../../assets/images';
import { positionPropType } from '../../../../../types/propTypes';
import { CENTER, ON_THE_RIGHT } from '../../../../../constants';
import { TheCrab } from './styles';

interface Props {
  hidden: boolean;
  position: IPosition;
}

const CrabComponent = ({ hidden, position }: Props): ReactElement => (
  <TheCrab
    alt="A crab on the bottom of the sea" // TODO language
    hidden={hidden}
    runnaway={
      position.position === CENTER || position.position === ON_THE_RIGHT
    }
    src={Crab}
  />
);

CrabComponent.propTypes = {
  hidden: bool.isRequired,
  position: positionPropType.isRequired
};

export default CrabComponent;
