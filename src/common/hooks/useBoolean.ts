import { useState, useCallback } from 'react';

export default function(initial: boolean) {
  const [value, setValue] = useState(initial);

  return {
    value,
    setValue,
    toggleValue: useCallback(() => setValue(v => !v), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), []),
  };
}
