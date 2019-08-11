import React from 'react';
import classNames from 'classnames';
import { ReactComponent as StarIcon } from 'icons/star.svg';
import style from './AddToFavoritesButton.module.css';
import { IconButton } from 'core/IconButton';

type TAddToFavoritesButtonProps = React.ComponentProps<typeof IconButton> & {
  active?: boolean;
};

export const AddToFavoritesButton: React.FC<TAddToFavoritesButtonProps> = ({
  active,
  className,
  ...props
}) => (
  <IconButton
    {...props}
    className={classNames(className, style.container, { [style.active]: active })}
  >
    <StarIcon />
  </IconButton>
);
