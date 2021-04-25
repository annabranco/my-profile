import React from 'react';
import { bool } from 'prop-types';
import { Crab } from '../../../../../assets/images';
import { positionPropType } from '../../../../../types/propTypes';
import { CENTER, ON_THE_RIGHT } from '../../../../../constants';
import { TheCrab } from './styles';

const CrabComponent = ({ hidden, position }) => (
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
