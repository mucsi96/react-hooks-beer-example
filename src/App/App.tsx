import React from 'react';
import style from './App.module.css';
import { Footer } from 'core/Footer';
import { HomePage } from 'HomePage';
import { DetailsPage } from 'DetailsPage';
import { useRouteParams } from 'core/useRouteParams';

export const App: React.FC = () => {
  const detailsPageParams = useRouteParams<{ id: string }>('/beer/:id');
  const renderView = () => {
    if (detailsPageParams) {
      return <DetailsPage id={parseInt(detailsPageParams.id)} />;
    }

    return <HomePage />;
  };

  return (
    <>
      <main className={style.container}>{renderView()}</main>
      <Footer />
    </>
  );
};
