import React, { useMemo } from 'react';
import { useFavorites } from './FavoritesProvider';
import { useAllBeers } from '../allBeers/AllBeersProvider';
import { TBeer } from '../punkapi';
import { BeerList } from '../core/BeerList';

type TFavoriteBeerListProps = {
  className?: string;
};

export const FavoriteBeerList: React.FC<TFavoriteBeerListProps> = ({ className }) => {
  const { favorites } = useFavorites();
  const { beers, loading, error } = useAllBeers();
  const favoriteBeers = useMemo(
    () =>
      favorites
        .map((favoriteBeerId: number) => beers.find(({ id }: TBeer) => id === favoriteBeerId))
        .filter(Boolean) as TBeer[],
    [beers, favorites]
  );

  return (
    <BeerList
      className={className}
      loading={loading}
      error={error}
      beers={favoriteBeers}
      isFavorite={() => false}
    />
  );
};
