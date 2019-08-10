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

export const Beer: React.FC<TBeerProps> = ({ id, name, imageUrl, firstBrewed, isFavorite }) => (
  <Link href={`/beer/${id}`} className={style.container}>
    <img src={imageUrl} alt={name} className={style.image} />
    <h2 className={style.title}>
      {name}
      {isFavorite && <StarIcon className={style.favoriteMark} />}
    </h2>
  </Link>
);
