import React, { createContext, useContext } from 'react';
import { useLocalStorage } from 'favorites/useLocalStorage';

type TFavoritesContext = {
  favorites: number[];
  toogleFavorite: (favorite: number) => void;
  isFavorite: (favorite: number) => boolean;
};

const FavoritesContext = createContext<TFavoritesContext | undefined>(undefined);

export const FavoritesProvider: React.FC = ({ children }) => {
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

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toogleFavorite,
        isFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): TFavoritesContext => {
  const context = useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};
