import { useLocalStorage } from 'favorites/useLocalStorage';

type TFavorites = {
  favorites: number[];
  toogleFavorite: (favorite: number) => void;
  isFavorite: (favorite: number) => boolean;
};

export const useFavorites = (): TFavorites => {
  const [favorites, setFavorites] = useLocalStorage<number[]>('favorites', []);

  const isFavorite = (favorite: number) => {
    return favorites.includes(favorite);
  };

  const toogleFavorite = (favorite: number) => {
    if (isFavorite(favorite)) {
      setFavorites(favorites.filter((favoriteToRemove: number) => favoriteToRemove !== favorite));
    } else {
      setFavorites([...favorites, favorite]);
    }
  };

  return {
    favorites,
    toogleFavorite,
    isFavorite
  };
};
