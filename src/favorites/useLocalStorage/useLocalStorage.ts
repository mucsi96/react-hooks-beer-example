import { useState, useEffect, useMemo } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const initialPersistedValue = useMemo(() => {
    try {
      const item = window.localStorage.getItem(key);

      if (item === null) {
        return initialValue;
      }

      return JSON.parse(item);
    } catch (error) {
      /* istanbul ignore next */
      if (process.env.NODE_ENV !== 'test') {
        console.log(error);
      }
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState(initialPersistedValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
