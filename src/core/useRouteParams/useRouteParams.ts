import { useEffect, useState } from 'react';
import pathToRegexp, { Key } from 'path-to-regexp';

function getParams(pattern: string) {
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
  }, {});
}

export function useRouteParams(pattern: string) {
  const [params, setParams] = useState(getParams(pattern));

  useEffect(() => {
    const handleStateChange = () => setParams(getParams(pattern));

    window.addEventListener('popstate', handleStateChange);
    return () => window.removeEventListener('popstate', handleStateChange);
  }, [pattern]);

  return params;
}
