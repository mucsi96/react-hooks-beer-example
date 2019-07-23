import React from 'react';
import { FavoriteBeerList } from './favorites/FavoriteBeers';
import { AllBeersList } from './allBeers/AllBeersList';

export const HomePage: React.FC = () => (
  <>
    <h1>Favorite beers</h1>
    <FavoriteBeerList />
    <h1>All beers</h1>
    <AllBeersList />
  </>
);
