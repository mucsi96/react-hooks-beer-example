import React from 'react';
import { AllBeersProvider } from './allBeers/AllBeersProvider';
import { FavoritesProvider } from './favorites/FavoritesProvider';
import { FavoriteBeerList } from './favorites/FavoriteBeers';
import { AllBeersList } from './allBeers/AllBeersList';

export const HomePage: React.FC = () => (
  <AllBeersProvider>
    <FavoritesProvider>
      <h1>Favorite beers</h1>
      <FavoriteBeerList />
      <h1>All beers</h1>
      <AllBeersList />
    </FavoritesProvider>
  </AllBeersProvider>
);
