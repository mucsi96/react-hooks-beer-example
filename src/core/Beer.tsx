import React from 'react';
import style from './Beer.module.css';
import { FavoriteMark } from '../favorites/FavoriteMark';

type TBeerProps = {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  firstBrewed: Date;
  isFavorite: boolean;
};

export const Beer: React.FC<TBeerProps> = ({
  id,
  name,
  imageUrl,
  description,
  firstBrewed,
  isFavorite
}) => (
  <article className={style.container}>
    <img src={imageUrl} alt={name} className={style.image} />
    <header>
      <a className={style.title} href={`/beer/${id}`}>
        <h2>
          {name}
          {isFavorite && <FavoriteMark />}
        </h2>
      </a>
      <span className={style.firstBrewed}>
        First brewed: {new Intl.DateTimeFormat().format(firstBrewed)}
      </span>
    </header>
    <main className={style.description}>{description}</main>
  </article>
);
