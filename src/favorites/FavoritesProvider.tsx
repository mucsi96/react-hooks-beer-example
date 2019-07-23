import React, { createContext, useState, useContext } from 'react';

type TFavoritesContext = {
  favorites: string[];
  addFavorite: (favorite: string) => void;
  removeFavorite: (favorite: string) => void;
};

const FavoritesContext = createContext<TFavoritesContext>({} as TFavoritesContext);

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite: (favorite: string) => setFavorites([...favorites, favorite]),
        removeFavorite: (favorite: string) =>
          setFavorites(
            favorites.filter((favoriteToRemove: string) => favoriteToRemove === favorite)
          )
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
