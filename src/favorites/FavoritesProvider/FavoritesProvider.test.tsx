import React from 'react';
import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { FavoritesProvider, useFavorites } from './FavoritesProvider';

let mockFavorites: number[];
let mockSetFavorites: (favorite: number) => void;

jest.mock('favorites/useLocalStorage', () => ({
  useLocalStorage: () => [mockFavorites, mockSetFavorites]
}));

beforeEach(() => {
  mockFavorites = [2];
  mockSetFavorites = jest.fn();
});

const wrapper: React.FC = ({ children }) => <FavoritesProvider>{children}</FavoritesProvider>;
const render = () => renderHook(() => useFavorites(), { wrapper });

describe('FavoritesProvider', () => {
  it('provides favorite beers', async () => {
    const { result } = render();

    expect(result.current.favorites).toEqual([2]);
  });

  describe('toogleFavorite', () => {
    it('adds favorite if it was not favorite before', () => {
      const { result } = render();

      act(() => {
        result.current.toogleFavorite(1);
      });

      expect(mockSetFavorites).toBeCalledWith([2, 1]);
    });

    it('removes favorite if it was favorite before', () => {
      const { result } = render();

      act(() => {
        result.current.toogleFavorite(2);
      });

      expect(mockSetFavorites).toBeCalledWith([]);
    });
  });

  describe('isFavorite', () => {
    it('return true if beer is favorite', () => {
      const { result } = render();
      expect(result.current.isFavorite(2)).toBe(true);
    });

    it('return false if beer is not favorite', () => {
      const { result } = render();
      expect(result.current.isFavorite(1)).toBe(false);
    });
  });

  it('useFavorites throws error outside provider', () => {
    const { result } = renderHook(() => useFavorites());

    expect(() => result.current.favorites).toThrowError(
      'useFavorites must be used within a FavoritesProvider'
    );
  });
});
