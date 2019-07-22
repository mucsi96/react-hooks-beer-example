import React from 'react';
import { BeersProvider } from './beers/BeersProvider';
import { BeerList } from './beers/BeerList';
import style from './App.module.css';

const App: React.FC = () => {
  return (
    <main className={style.container}>
      <BeersProvider>
        <h1>All beers</h1>
        <BeerList />
      </BeersProvider>
    </main>
  );
};

export default App;
