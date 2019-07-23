import React, { useMemo } from 'react';
import { useFavorites } from './FavoritesProvider';
import { useAllBeers } from '../allBeers/AllBeersProvider';
import { TBeer } from '../punkapi';
import { BeerList } from '../core/BeerList';

export const FavoriteBeerList: React.FC = () => {
  const { favorites } = useFavorites();
  const { beers, loading, error } = useAllBeers();
  const favoriteBeers = useMemo(
    () =>
      favorites
        .map((favoriteBeerId: string) => beers.find(({ id }: TBeer) => id === favoriteBeerId))
        .filter(Boolean) as TBeer[],
    [beers, favorites]
  );

  return (
    <BeerList loading={loading} error={error} beers={favoriteBeers} isFavorite={() => false} />
  );
};
