import React from 'react';
import { bool } from 'prop-types';
import { Crab } from '../../../assets/images';
import { TheCrab } from './styles';
import { positionPropType } from '../../../types';
import { CENTER, ON_THE_RIGHT } from '../../../constants';

const CrabComponent = ({ hidden, position }) => (
  <TheCrab
    src={Crab}
    alt="A crab on the bottom of the sea"
    runnaway={
      position.position === CENTER || position.position === ON_THE_RIGHT
    }
    hidden={hidden}
  />
);

CrabComponent.propTypes = {
  position: positionPropType.isRequired,
  hidden: bool.isRequired
};

export default CrabComponent;
