import React from 'react';
import style from './App.module.css';
import { Footer } from './core/Footer';
import { HomePage } from './HomePage';

const App: React.FC = () => {
  return (
    <>
      <main className={style.container}>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default App;
