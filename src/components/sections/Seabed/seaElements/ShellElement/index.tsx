import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { bool, func } from 'prop-types';
import { useStateWithLabel } from '../../../../../utils/hooks';
import { ClosedShell, OpenedShell } from '../../../../../assets/images';
import FoundPearl from '../../../../../assets/sounds/found.mp3';
import Bong from '../../../../../assets/sounds/bong.mp3';
import { TheShell, ShellContainer, Pearl, PearlShine } from './styles';

const FindingSound = new Audio(FoundPearl);
const GettingSound = new Audio(Bong);

interface Props {
  hidden: boolean;
  toggleHasPearl: Dispatch<SetStateAction<boolean>>;
}

const ShellElement = ({ toggleHasPearl, hidden }: Props): ReactElement => {
  const [opened, open] = useStateWithLabel<boolean>(false, 'pearlOpened');
  const [hasPearl, getPearl] = useStateWithLabel<boolean>(false, 'hasPearl');

  const onClickShell = (): void => {
    if (!opened) {
      open(true);
      FindingSound.currentTime = 0;
      FindingSound.volume = 0.5;
      FindingSound.play();
    }
  };

  const onClickPearl = (): void => {
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
  hidden: bool.isRequired,
  toggleHasPearl: func.isRequired
};

export default ShellElement;
