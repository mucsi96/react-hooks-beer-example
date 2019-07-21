import React from 'react';
import { BeersProvider } from './beers/BeersProvider';
import { BeerList } from './beers/BeerList';

const App: React.FC = () => {
  return <BeersProvider>
    <BeerList />
  </BeersProvider>
}

export default App;
