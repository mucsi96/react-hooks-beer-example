import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import { AllBeersList } from './AllBeersList';
import { mockBeers } from 'test/mockBeers';

let mockLoading: boolean;
let mockError: string | null;
let mockFavorites: number[];

jest.mock('allBeers/AllBeersProvider', () => ({
  useAllBeers: () => ({
    beers: mockBeers,
    loading: mockLoading,
    error: mockError
  })
}));
jest.mock('favorites/FavoritesProvider', () => ({
  useFavorites: () => ({
    favorites: mockFavorites
  })
}));

beforeEach(() => {
  mockLoading = false;
  mockError = null;
  mockFavorites = [2];
});

const renderWithProps = (props: Partial<React.ComponentProps<typeof AllBeersList>> = {}) =>
  render(<AllBeersList {...props} />);

describe('AllBeersList', () => {
  it('renders all beers', async () => {
    const { findAllByText } = renderWithProps();
    const beers = (await findAllByText(/^(alpha|bravo) beer$/)).map(element =>
      getNodeText(element)
    );
    expect(beers).toEqual(['alpha beer', 'bravo beer']);
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

  it('renders favorites', async () => {
    const { findAllByTestId } = renderWithProps();
    expect(await findAllByTestId('favorite')).toHaveLength(1);
  });
});
