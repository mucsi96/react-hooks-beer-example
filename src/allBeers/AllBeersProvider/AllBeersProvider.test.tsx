import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { AllBeersProvider, useAllBeers } from './AllBeersProvider';
import { TBeer } from 'punkapi';
import { createMockPromise, TMockPromise } from 'test/mockPromise';
import { mockBeers } from 'test/mockBeers';

let mockFetchBeersPromise: TMockPromise<TBeer[]>;

jest.mock('punkapi', () => ({
  fetchBeers: () => mockFetchBeersPromise
}));

beforeEach(() => {
  mockFetchBeersPromise = createMockPromise<TBeer[]>();
});

const wrapper: React.FC = ({ children }) => <AllBeersProvider>{children}</AllBeersProvider>;
const render = () => renderHook(() => useAllBeers(), { wrapper });

describe('AllBeersProvider', () => {
  it('provides beers', async () => {
    const { result } = render();

    expect(result.current.beers).toEqual([]);

    await mockFetchBeersPromise.resolve(mockBeers);

    expect(result.current.beers).toEqual(mockBeers);
  });

  it('provides beers loading state', async () => {
    const { result } = render();

    expect(result.current.loading).toEqual(true);

    await mockFetchBeersPromise.resolve(mockBeers);

    expect(result.current.loading).toEqual(false);
  });

  it('provides beers loading error state', async () => {
    const { result } = render();

    expect(result.current.error).toEqual('');

    try {
      await mockFetchBeersPromise.reject(new Error());
    } catch {}

    expect(result.current.error).toEqual('Unable to fetch the beers');
  });

  it('provides beer by id', async () => {
    const { result } = render();

    await mockFetchBeersPromise.resolve(mockBeers);

    const beer = result.current.getBeerById(2);

    expect(beer && beer.name).toEqual('bravo beer');
  });

  it('useAllBeers throws error outside provider', () => {
    const { result } = renderHook(() => useAllBeers());

    expect(() => result.current.beers).toThrowError(
      'seAllBeers must be used within a AllBeersProvider'
    );
  });
});
