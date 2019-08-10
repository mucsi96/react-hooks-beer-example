import React from 'react';
import { Link as RouterLink } from 'wouter';
import style from './Link.module.css';
import classNames from 'classnames';

export const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  href,
  className,
  ...props
}) => {
  const isExternal = href && href.includes('://');

  if (isExternal) {
    return (
      <a {...props} href={href} className={classNames(style.container, className)}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink href={href}>
      <a {...props} className={classNames(style.container, className)}>
        {children}
      </a>
    </RouterLink>
  );
};
