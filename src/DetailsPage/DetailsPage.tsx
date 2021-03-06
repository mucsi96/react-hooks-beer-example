import React from 'react';
import { useAllBeers } from 'allBeers/AllBeersProvider';
import style from './DetailsPage.module.css';
import { AddToFavoritesButton } from 'favorites/AddToFavoritesButton';
import { useFavorites } from 'favorites/FavoritesProvider';
import { ReactComponent as BackIcon } from 'icons/left-arrow.svg';
import { IconLink } from 'core/IconLink';

type TDetailsPageProps = {
  id: number;
};

export const DetailsPage: React.FC<TDetailsPageProps> = ({ id }) => {
  const { getBeerById } = useAllBeers();
  const { isFavorite, toogleFavorite } = useFavorites();
  const beer = getBeerById(id);

  if (!beer) {
    return <h1>{`No beer found with id ${id}!`}</h1>;
  }

  const { imageUrl, name, tagline, firstBrewed, description, brewersTips } = beer;

  return (
    <article>
      <header className={style.header}>
        <IconLink href="/">
          <BackIcon />
        </IconLink>
        <h2 className={style.headerTitle}>{name}</h2>
        <AddToFavoritesButton
          active={isFavorite(id)}
          onClick={() => toogleFavorite(id)}
          data-testid="favorite-button"
        />
      </header>
      <main className={style.mainContent}>
        <img src={imageUrl} alt={name} className={style.image} />
        <div className={style.details}>
          <p className={style.tagline}>{tagline}</p>
          <p>First brewed: {new Intl.DateTimeFormat().format(firstBrewed)}</p>
          <p>{description}</p>
          <p>{brewersTips}</p>
        </div>
      </main>
    </article>
  );
};
