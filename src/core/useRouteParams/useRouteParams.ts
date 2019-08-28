import { useEffect, useState } from 'react';
import pathToRegexp, { Key } from 'path-to-regexp';

function getParams<T>(pattern: string): T | null {
  const keys: Key[] = [];
  const regexp = pathToRegexp(pattern, keys);
  const match = regexp.exec(window.location.pathname);

  if (!match) {
    return null;
  }

  return keys.reduce((params, key, index) => {
    return {
      ...params,
      [key.name]: decodeURIComponent(match[index + 1])
    };
  }, {}) as T;
}

export function useRouteParams<T>(pattern: string) {
  const [params, setParams] = useState(getParams<T>(pattern));

  useEffect(() => {
    const handleStateChange = () => setParams(getParams(pattern));

    window.addEventListener('popstate', handleStateChange);
    return () => window.removeEventListener('popstate', handleStateChange);
  }, [pattern]);

  return params;
}
