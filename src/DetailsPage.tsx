import React from 'react';
import { useAllBeers } from './allBeers/AllBeersProvider';

type TDetailsPageProps = {
  id: number;
};

export const DetailsPage: React.FC<TDetailsPageProps> = ({ id }) => {
  const { beers } = useAllBeers();
  const beer = beers.find(({ id: beerId }) => beerId === id);

  console.log(beers);
  if (!beer) {
    return <h1>{`No beer found with id ${id}!`}</h1>;
  }

  const { imageUrl, name, firstBrewed, description } = beer;

  return (
    <article>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <span>First brewed: {new Intl.DateTimeFormat().format(firstBrewed)}</span>
      <main>{description}</main>
    </article>
  );
};
