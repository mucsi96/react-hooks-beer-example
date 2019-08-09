import React from 'react';
import classNames from 'classnames';
import style from './IconLink.module.css';
import { Link } from 'wouter';

type TIconLinkProps = React.HTMLProps<HTMLAnchorElement>;

export const IconLink: React.FC<TIconLinkProps> = ({ className, children, href, ...props }) => (
  <Link href={href}>
    <a {...props} className={classNames(style.container, className)}>
      {children}
    </a>
  </Link>
);
