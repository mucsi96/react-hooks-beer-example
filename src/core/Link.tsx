import React from 'react';
import style from './Link.module.css';
import classNames from 'classnames';

export const Link: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  href,
  className,
  ...props
}) => {
  const isInternal = href && ['.', '/'].some(prefix => href.startsWith(prefix));
  const pushState = (event: React.MouseEvent) => {
    event.preventDefault();
    window.history.pushState(null, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <a
      {...props}
      href={href}
      className={classNames(style.container, className)}
      {...(isInternal && { onClick: pushState })}
    >
      {children}
    </a>
  );
};
