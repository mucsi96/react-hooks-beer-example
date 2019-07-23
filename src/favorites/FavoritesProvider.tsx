import React, { createContext, useState, useContext } from 'react';

type TFavoritesContext = {
  favorites: number[];
  addFavorite: (favorite: number) => void;
  removeFavorite: (favorite: number) => void;
};

const FavoritesContext = createContext<TFavoritesContext>({} as TFavoritesContext);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite: (favorite: number) => setFavorites([...favorites, favorite]),
        removeFavorite: (favorite: number) =>
          setFavorites(
            favorites.filter((favoriteToRemove: number) => favoriteToRemove === favorite)
          )
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
