import React from 'react';
import { Beer } from './Beer';
import style from './BeerList.module.css';
import { TBeer } from '../punkapi';

type TBeerList = {
  beers: TBeer[];
  loading: boolean;
  error: string;
  isFavorite: (id: number) => boolean;
};

export const BeerList: React.FC<TBeerList> = ({ beers, loading, error, isFavorite }) => {
  if (loading) {
    return <div>'Loading beers...'</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={style.container}>
      {beers.map(({ id, name, description, imageUrl, firstBrewed }) => (
        <Beer
          key={id}
          id={id}
          name={name}
          description={description}
          imageUrl={imageUrl}
          firstBrewed={firstBrewed}
          isFavorite={isFavorite(id)}
        />
      ))}
    </section>
  );
};
