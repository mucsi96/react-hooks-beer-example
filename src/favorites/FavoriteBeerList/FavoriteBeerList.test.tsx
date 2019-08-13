import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import { FavoriteBeerList } from './FavoriteBeerList';
import { mockBeers } from 'test/mockBeers';

let mockLoading: boolean;
let mockError: string | null;
let mockFavorites: number[];

jest.mock('favorites/FavoritesProvider', () => ({
  useFavorites: () => ({
    favorites: mockFavorites
  })
}));
jest.mock('allBeers/AllBeersProvider', () => ({
  useAllBeers: () => ({
    beers: mockBeers,
    loading: mockLoading,
    error: mockError
  })
}));

beforeEach(() => {
  mockLoading = false;
  mockError = null;
  mockFavorites = [2];
});

const renderWithProps = (props: Partial<React.ComponentProps<typeof FavoriteBeerList>> = {}) =>
  render(<FavoriteBeerList {...props} />);

describe('FavoriteBeerList', () => {
  it('renders favorite beers', async () => {
    const { findAllByText } = renderWithProps();
    const beers = (await findAllByText(/^(alpha|bravo) beer$/)).map(element =>
      getNodeText(element)
    );
    expect(beers).toEqual(['bravo beer']);
  });

  it('renders loading', async () => {
    mockLoading = true;
    const { findByText } = renderWithProps();
    expect(await findByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error', async () => {
    mockError = 'test error';
    const { findByText } = renderWithProps();
    expect(await findByText('test error')).toBeInTheDocument();
  });
});
