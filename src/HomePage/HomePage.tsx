import React from 'react';
import { FavoriteBeerList } from 'favorites/FavoriteBeerList';
import { AllBeersList } from 'allBeers/AllBeersList';
import { useFavorites } from 'favorites/FavoritesProvider';
import style from './HomePage.module.css';

export const HomePage: React.FC = () => {
  const { favorites } = useFavorites();
  const hasFavorites = !!favorites.length;

  return (
    <>
      {hasFavorites && (
        <>
          <h1>Favorite beers</h1>
          <FavoriteBeerList className={style.favoriteList} />
          <h1>All beers</h1>
        </>
      )}
      <AllBeersList />
    </>
  );
};
