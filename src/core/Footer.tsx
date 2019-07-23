import React from 'react';
import style from './Footer.module.css';

export const Footer: React.FC = () => (
  <footer className={style.container}>
    Icons made by{' '}
    <a
      href="https://www.freepik.com/?__hstc=57440181.66c09f51fc9b0b37db491c2f5585e3dc.1563827412634.1563827412634.1563827412634.1&__hssc=57440181.7.1563827412635&__hsfp=3232041946"
      title="Freepik"
    >
      Freepik{' '}
    </a>
    from{' '}
    <a href="https://www.flaticon.com/" title="Flaticon">
      www.flaticon.com{' '}
    </a>
    is licensed by{' '}
    <a
      href="http://creativecommons.org/licenses/by/3.0/"
      title="Creative Commons BY 3.0"
      target="_blank"
      rel="noopener noreferrer"
    >
      CC 3.0 BY
    </a>
  </footer>
);
