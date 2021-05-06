import { ReactElement, useEffect } from 'react';
import { useStateWithLabel } from '../../../../../utils/hooks';
import { LEFT, RIGHT } from '../../../../../constants';
import { FISHES } from '../../../../../assets/images';
import { Fish } from './styles';

const randomSpeed = (num: number): string => `${num + 5}s`;
const randomSide = (num: number): string => (num === 0 ? RIGHT : LEFT);
const randomDelay = (num: number): string => `${num.toFixed(1)}s`;
const randomHeight = (num: number): string => {
  switch (num) {
    case 0:
      return '20%';
    case 1:
      return '30%';
    case 2:
      return '60%';
    case 3:
    default:
      return '70%';
  }
};
const randomMovement = (num: number): string => {
  switch (num) {
    case 0:
      return 'ease-in';
    case 1:
      return 'ease-out';
    case 2:
      return 'ease-in-out';
    case 3:
    default:
      return 'linear';
  }
};

const FishesElement = (): ReactElement => {
  const [fishes, updateFishes] = useStateWithLabel<ReactElement[]>(
    [],
    'fishes'
  );

  useEffect(() => {
    let currentFishes: ReactElement[] = [];
    const deployFish = (type: number, order: number): void => {
      currentFishes.push(
        <Fish
          alt="Swimming Fish" // TODO language
          bottom={randomHeight(Math.ceil(Math.random() * 4))}
          delay={randomDelay(Math.random() * 3)}
          facing={FISHES[type].facing}
          key={`fish${type}-${order}`}
          movementType={randomMovement(Math.floor(Math.random() * 4))}
          side={randomSide(Math.floor(Math.random() * 2))}
          speed={randomSpeed(Math.ceil(Math.random() * 5))}
          src={FISHES[type].img}
          waving={FISHES[type].waving || false}
        />
      );
    };

    for (let i = 1; i <= Math.ceil(Math.random() * 4); i++) {
      deployFish(Math.floor(Math.random() * FISHES.length), i);
    }

    updateFishes(currentFishes);

    setInterval(() => {
      currentFishes = [];
      for (let i = 1; i <= Math.ceil(Math.random() * 3); i++) {
        deployFish(Math.floor(Math.random() * FISHES.length), i);
      }
      updateFishes(currentFishes);
    }, 12000);
  }, [updateFishes]);

  return <>{fishes.map(fish => fish)}</>;
};

export default FishesElement;
