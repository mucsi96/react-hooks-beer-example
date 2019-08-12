import React from 'react';
import style from './App.module.css';
import { Footer } from 'core/Footer';
import { HomePage } from './HomePage';
import { AllBeersProvider } from 'allBeers/AllBeersProvider';
import { FavoritesProvider } from 'favorites/FavoritesProvider';
import { DetailsPage } from './DetailsPage';
import { useRouteParams } from 'core/useRouteParams';

const App: React.FC = () => {
  const detailsPageParams = useRouteParams('/beer/:id');
  const renderView = () => {
    if (detailsPageParams) {
      return <DetailsPage id={parseInt(detailsPageParams.id)} />;
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
