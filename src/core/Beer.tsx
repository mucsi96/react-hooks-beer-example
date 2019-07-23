import React from 'react';
import style from './Beer.module.css';
import { FavoriteMark } from '../favorites/FavoriteMark';

type TBeerProps = {
  name: string;
  imageUrl: string;
  description: string;
  firstBrewed: Date;
  isFavorite: boolean;
};

export const Beer: React.FC<TBeerProps> = ({
  name,
  imageUrl,
  description,
  firstBrewed,
  isFavorite
}) => (
  <article className={style.container}>
    <img src={imageUrl} alt={name} className={style.image} />
    <header>
      <h2 className={style.title}>
        {name}
        {isFavorite && <FavoriteMark />}
      </h2>
      <span className={style.firstBrewed}>
        First brewed: {new Intl.DateTimeFormat().format(firstBrewed)}
      </span>
    </header>
    <main className={style.description}>{description}</main>
  </article>
);
