import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { ClosedShell, OpenedShell } from '../../../../../assets/images';
import FoundPearl from '../../../../../assets/sounds/found.mp3';
import Bong from '../../../../../assets/sounds/bong.mp3';

import { TheShell, ShellContainer, Pearl, PearlShine } from './styles';

const FindingSound = new Audio(FoundPearl);
const GettingSound = new Audio(Bong);

const ShellElement = ({ toggleHasPearl, hidden }) => {
  const [opened, open] = useState(false);
  const [hasPearl, getPearl] = useState(false);

  const onClickShell = () => {
    if (!opened) {
      open(true);
      FindingSound.currentTime = 0;
      FindingSound.volume = 0.5;
      FindingSound.play();
    }
  };

  const onClickPearl = () => {
    getPearl(true);
    GettingSound.currentTime = 0;
    GettingSound.volume = 0.1;
    GettingSound.play();
    toggleHasPearl(true);
  };

  return (
    <ShellContainer hidden={hidden}>
      <TheShell
        onClick={onClickShell}
        src={opened ? OpenedShell : ClosedShell}
      />
      {opened && !hasPearl && (
        <Pearl onClick={onClickPearl}>
          <PearlShine />
        </Pearl>
      )}
    </ShellContainer>
  );
};

ShellElement.propTypes = {
  toggleHasPearl: func.isRequired,
  hidden: bool.isRequired
};

export default ShellElement;
