import React from 'react';
import style from './Beer.module.css';
import { ReactComponent as StarIcon } from '../icons/star.svg';
import { Link } from './Link';

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
      <Link href={`/beer/${id}`}>
        <h2 className={style.title}>
          {name}
          {isFavorite && <StarIcon className={style.favoriteMark} />}
        </h2>
      </Link>
      <span className={style.firstBrewed}>
        First brewed: {new Intl.DateTimeFormat().format(firstBrewed)}
      </span>
    </header>
    <main className={style.description}>{description}</main>
  </article>
);
