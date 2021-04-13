import React, { useEffect } from 'react';
import { useStateWithLabel } from '../../../utils/hooks';
import { LEFT, RIGHT } from '../../../constants';
import { FISHES } from '../../../assets/images';
import { Fish } from './styles';

const randomSpeed = num => `${num + 5}s`;
const randomSide = num => (num === 0 ? RIGHT : LEFT);
const randomDelay = num => `${num.toFixed(1)}s`;
const randomHeight = num => {
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
const randomMovement = num => {
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

const Fishes = () => {
  const [fishes, updateFishes] = useStateWithLabel([], 'fishes');

  useEffect(() => {
    let currentFishes = [];
    const deployFish = (type, order) => {
      currentFishes.push(
        <Fish
          key={`fish${type}-${order}`}
          src={FISHES[type].img}
          facing={FISHES[type].facing}
          speed={randomSpeed(Math.ceil(Math.random() * 5))}
          alt="Swimming Fish" // TODO language
          bottom={randomHeight(Math.ceil(Math.random() * 4))}
          side={randomSide(Math.floor(Math.random() * 2))}
          delay={randomDelay(Math.random() * 3)}
          movementType={randomMovement(Math.floor(Math.random() * 4))}
          waving={FISHES[type].waving}
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
  }, []);

  return <>{fishes.map(fish => fish)}</>;
};

export default Fishes;
