import React from 'react';
import classNames from 'classnames';
import style from './IconLink.module.css';
import { Link } from 'core/Link';

export const IconLink: React.FC<React.ComponentProps<typeof Link>> = ({
  className,
  children,
  ...props
}) => (
  <Link {...props} className={classNames(style.container, className)}>
    {children}
  </Link>
);
