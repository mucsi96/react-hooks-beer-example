import React from 'react';
import { useAllBeers } from 'allBeers/AllBeersProvider';
import { BeerList } from 'core/BeerList';
import { useFavorites } from 'favorites/FavoritesProvider';

export const AllBeersList: React.FC = () => {
  const { beers, loading, error } = useAllBeers();
  const { favorites } = useFavorites();

  return (
    <BeerList
      beers={beers}
      loading={loading}
      error={error}
      isFavorite={(id: number) => favorites.includes(id)}
    />
  );
};
