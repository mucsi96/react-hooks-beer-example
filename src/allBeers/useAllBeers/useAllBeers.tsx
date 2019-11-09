import { fetchBeers, TBeer } from 'punkapi';
import { createSharedState } from 'react-create-shared-state';
import { useEffect } from 'react';

export type TAllBeers = {
  beers: TBeer[];
  getBeerById: (id: number) => TBeer | undefined;
  loading: boolean;
  error: string;
};

const useBeers = createSharedState<TBeer[]>([]);
const useLoading = createSharedState(false);
const useError = createSharedState('');
let instances = 0;

export const useAllBeers = (): TAllBeers => {
  const [beers, setBeers] = useBeers();
  const [loading, setLoading] = useLoading();
  const [error, setError] = useError();

  useEffect(() => {
    async function fetchBeersAndHandleErrors() {
      try {
        setLoading(true);
        setBeers(await fetchBeers());
      } catch {
        setError('Unable to fetch the beers');
      } finally {
        setLoading(false);
      }
    }
    if (!instances) {
      fetchBeersAndHandleErrors();
    }
  });

  useEffect(() => {
    instances++;
    return () => {
      instances--;
    };
  }, []);

  const getBeerById = (id: number) => beers.find(({ id: beerId }) => beerId === id);

  return { beers, getBeerById, error, loading };
};
