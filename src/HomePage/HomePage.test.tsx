import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import { HomePage } from 'HomePage';
import { mockBeers } from 'test/mockBeers';

let mockFavorites: number[];

jest.mock('allBeers/AllBeersProvider', () => ({
  useAllBeers: () => ({
    beers: mockBeers
  })
}));
jest.mock('favorites/FavoritesProvider', () => ({
  useFavorites: () => ({
    favorites: mockFavorites
  })
}));

beforeEach(() => {
  mockFavorites = [];
});

const renderWithProps = (props: Partial<React.ComponentProps<typeof HomePage>> = {}) =>
  render(<HomePage {...props} />);

describe('HomePage', () => {
  it('renders all beers', async () => {
    const { findAllByText } = renderWithProps();
    const beers = (await findAllByText(/^(Favorite beers|All beers|alpha beer|bravo beer)$/)).map(
      element => getNodeText(element)
    );
    expect(beers).toEqual(['alpha beer', 'bravo beer']);
  });

  it('renders favorite beers', async () => {
    mockFavorites = [1];
    const { findAllByText } = renderWithProps();
    const beers = (await findAllByText(/^(Favorite beers|All beers|alpha beer|bravo beer)$/)).map(
      element => getNodeText(element)
    );
    expect(beers).toEqual([
      'Favorite beers',
      'alpha beer',
      'All beers',
      'alpha beer',
      'bravo beer'
    ]);
  });
});
