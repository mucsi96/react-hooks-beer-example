import React, { useState, useEffect, createContext, useContext } from 'react';
import { fetchBeers, TBeer } from '../punkapi';

export type TAllBeersContext = {
  beers: TBeer[];
  loading: boolean;
  error: string;
};

const AllBeersContext = createContext<TAllBeersContext>({} as TAllBeersContext);

export const AllBeersProvider: React.FC = ({ children }) => {
  const [beers, setBeers] = useState<TBeer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setBeers(await fetchBeers());
      } catch {
        setError('Unable to fetch the beers');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <AllBeersContext.Provider value={{ beers, error, loading }}>
      {children}
    </AllBeersContext.Provider>
  );
};

export const useAllBeers = () => {
  return useContext(AllBeersContext);
};
