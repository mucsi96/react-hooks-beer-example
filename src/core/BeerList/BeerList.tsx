import classNames from 'classnames';
import React from 'react';
import { Beer } from 'core/Beer';
import style from './BeerList.module.css';
import { TBeer } from 'punkapi';

type TBeerList = {
  className?: string;
  beers: TBeer[];
  loading?: boolean;
  error?: string;
  isFavorite: (id: number) => boolean;
};

export const BeerList: React.FC<TBeerList> = ({ className, beers, loading, error, isFavorite }) => {
  if (loading) {
    return <div>'Loading beers...'</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={classNames(style.container, className)}>
      {beers.map(({ id, name, tagline, imageUrl }) => (
        <Beer
          key={id}
          id={id}
          name={name}
          tagline={tagline}
          imageUrl={imageUrl}
          isFavorite={isFavorite(id)}
        />
      ))}
    </section>
  );
};
