import React from 'react';
import { useBeers } from './BeersProvider';
import { Beer } from './Beer';
import style from './BeerList.module.css';

export const BeerList: React.FC = () => {
  const { beers, loading, error } = useBeers();

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
          name={name}
          description={description}
          imageUrl={imageUrl}
          firstBrewed={firstBrewed}
        />
      ))}
    </section>
  );
};
