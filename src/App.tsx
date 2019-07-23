import React from 'react';
import style from './App.module.css';
import { Footer } from './core/Footer';
import { HomePage } from './HomePage';
import { useRoute } from 'wouter';
import { AllBeersProvider } from './allBeers/AllBeersProvider';
import { FavoritesProvider } from './favorites/FavoritesProvider';
import { DetailsPage } from './DetailsPage';

const App: React.FC = () => {
  const [showDetailsPage, params] = useRoute('/beer/:id');
  const renderView = () => {
    if (showDetailsPage && params) {
      return <DetailsPage id={parseInt(params.id)} />;
    }

    return <HomePage />;
  };

  return (
    <AllBeersProvider>
      <FavoritesProvider>
        <main className={style.container}>{renderView()}</main>
        <Footer />
      </FavoritesProvider>
    </AllBeersProvider>
  );
};

export default App;
