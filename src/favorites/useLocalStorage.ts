import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const getPersistedValue = () => {
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
  };

  const setPersistedValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const [value, setValue] = useState(getPersistedValue());

  useEffect(() => setPersistedValue(value), [value]);

  return [value, setValue];
}
