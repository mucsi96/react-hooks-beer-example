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
      console.log(error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [value, setValue] = useState(initialPersistedValue);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key, value]);

  return [value, setValue];
}
