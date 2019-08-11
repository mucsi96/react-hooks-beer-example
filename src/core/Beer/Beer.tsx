import React from 'react';
import style from './Beer.module.css';
import { ReactComponent as StarIcon } from 'icons/star.svg';
import { Link } from 'core/Link';

type TBeerProps = {
  id: number;
  name: string;
  imageUrl: string;
  tagline: string;
  isFavorite?: boolean;
};

export const Beer: React.FC<TBeerProps> = ({ id, name, imageUrl, tagline, isFavorite }) => (
  <Link href={`/beer/${id}`} className={style.container}>
    <img src={imageUrl} alt={name} className={style.image} />
    <div>
      <h2 className={style.title}>
        {name}
        {isFavorite && <StarIcon className={style.favoriteMark} data-testid="favorite" />}
      </h2>
      <p>{tagline}</p>
    </div>
  </Link>
);
