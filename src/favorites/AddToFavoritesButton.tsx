import React from 'react';
import { ReactComponent as StarIcon } from '../icons/star.svg';
import style from './AddToFavoritesButton.module.css';

type TAddToFavoritesButtonProps = {
  onClick: () => void;
};

export const AddToFavoritesButton: React.FC<TAddToFavoritesButtonProps> = ({ onClick }) => (
  <button type="button" onClick={onClick} className={style.container}>
    <StarIcon />
  </button>
);
