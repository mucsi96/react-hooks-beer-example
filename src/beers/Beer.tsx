import React from 'react';
import style from './Beer.module.css';

type TBeerProps = {
  name: string;
  imageUrl: string;
  description: string;
  firstBrewed: Date;
};

export const Beer: React.FC<TBeerProps> = ({ name, imageUrl, description, firstBrewed }) => (
  <article className={style.container}>
    <img src={imageUrl} alt={name} className={style.image} />
    <header>
      <h2 className={style.title}>{name}</h2>
      <span className={style.firstBrewed}>
        First brewed: {new Intl.DateTimeFormat().format(firstBrewed)}
      </span>
    </header>
    <main>{description}</main>
  </article>
);
