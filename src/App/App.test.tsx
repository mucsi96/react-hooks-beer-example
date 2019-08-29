import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import { mockBeers } from 'test/mockBeers';
import { App } from './App';

let mockPath: string;
delete window.location;
window.location = {
  get pathname() {
    return mockPath;
  }
} as Location;

beforeEach(() => {
  mockPath = '/';
});

jest.mock('allBeers/AllBeersProvider', () => {
  const originalModule = jest.requireActual('allBeers/AllBeersProvider');

  return {
    ...originalModule,
    useAllBeers: () => ({
      beers: mockBeers,
      getBeerById: (id: number) => mockBeers[id]
    })
  };
});

jest.mock('favorites/FavoritesProvider', () => {
  const originalModule = jest.requireActual('favorites/FavoritesProvider');

  return {
    ...originalModule,
    useFavorites: () => ({
      favorites: [],
      isFavorite: () => false
    })
  };
});

const renderWithProps = (props: Partial<React.ComponentProps<typeof App>> = {}) =>
  render(<App {...props} />);

describe('App', () => {
  it('renders the homepage', async () => {
    const { findAllByText } = renderWithProps();
    const beers = (await findAllByText(/^(alpha beer|bravo beer|bravo beer description)$/)).map(
      element => getNodeText(element)
    );
    expect(beers).toEqual(['alpha beer', 'bravo beer']);
  });

  it('renders the beer details page', async () => {
    mockPath = '/beer/1';
    const { findAllByText } = renderWithProps();
    const beers = (await findAllByText(/^(alpha beer|bravo beer|bravo beer description)$/)).map(
      element => getNodeText(element)
    );
    expect(beers).toEqual(['bravo beer', 'bravo beer description']);
  });
});
