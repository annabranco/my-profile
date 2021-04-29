import { useState, useDebugValue, SetStateAction, Dispatch } from 'react';

export const useStateWithLabel = <T>(
  initialValue: T,
  displayName: string
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialValue);

  useDebugValue(displayName);
  return [value, setValue];
};
