import { useState, useDebugValue, SetStateAction, Dispatch } from 'react';

export const useStateWithLabel = <T>(
  initialValue: T,
  displayName: string
): [T | null, Dispatch<SetStateAction<T | null>>] => {
  const [value, setValue] = useState<T | null>(initialValue);

  useDebugValue(displayName);
  return [value, setValue];
};
