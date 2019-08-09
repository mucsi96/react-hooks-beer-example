import React, { createContext, useState, useContext } from 'react';

type TFavoritesContext = {
  favorites: number[];
  toogleFavorite: (favorite: number) => void;
  isFavorite: (favorite: number) => boolean;
};

const FavoritesContext = createContext<TFavoritesContext>({} as TFavoritesContext);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

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

export const useFavorites = () => useContext(FavoritesContext);
