import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsPage } from './DetailsPage';
import { mockBeers } from 'test/mockBeers';

let mockToggleFavorite: () => {};

jest.mock('allBeers/AllBeersProvider', () => ({
  useAllBeers: () => ({
    getBeerById: (id: number) => mockBeers[id]
  })
}));
jest.mock('favorites/FavoritesProvider', () => ({
  useFavorites: () => ({
    isFavorite: (id: number) => id === 1,
    toogleFavorite: mockToggleFavorite
  })
}));

beforeEach(() => {
  mockToggleFavorite = jest.fn();
});

const renderWithProps = (props: Partial<React.ComponentProps<typeof DetailsPage>> = {}) =>
  render(<DetailsPage id={0} {...props} />);

describe('DetailsPage', () => {
  it('renders', () => {
    const { container } = renderWithProps();
    expect(container).toMatchSnapshot();
  });

  it('renders error message if beer not found by id', () => {
    const { container } = renderWithProps({ id: 3 });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <h1>
          No beer found with id 3!
        </h1>
      </div>
    `);
  });

  it('renders favorite beer', async () => {
    const { findByTestId } = renderWithProps({ id: 1 });
    expect(await findByTestId('favorite-button')).toHaveClass('active');
  });

  it('toggle the favorite state on clicking the favorite button', async () => {
    const { findByTestId } = renderWithProps({ id: 1 });
    fireEvent.click(await findByTestId('favorite-button'));
    expect(mockToggleFavorite).toBeCalledWith(1);
  });
});
