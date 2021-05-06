import { ReactElement } from 'react';
import { MacCamera, Mark, MarkLight } from '../styles';

export const MacInterface = (): ReactElement => (
  <div>
    <MacCamera />
    <Mark>
      MacBook <MarkLight>Water</MarkLight>
    </Mark>
  </div>
);
