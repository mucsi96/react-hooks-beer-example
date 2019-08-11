import React from 'react';
import classNames from 'classnames';
import style from './IconButton.module.css';

type TIconButtonProps = React.HTMLProps<HTMLButtonElement>;

export const IconButton: React.FC<TIconButtonProps> = ({ className, children, ...props }) => (
  <button {...props} type="button" className={classNames(style.container, className)}>
    {children}
  </button>
);
