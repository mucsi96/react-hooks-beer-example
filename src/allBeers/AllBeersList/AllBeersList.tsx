import React from 'react';
import { useAllBeers } from 'allBeers/useAllBeers';
import { BeerList } from 'core/BeerList';
import { useFavorites } from 'favorites/useFavorites';

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
