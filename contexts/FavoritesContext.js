import { createContext, useState } from 'react';

export const FavoritesContext = createContext([]);

export function FavoritesProvider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [favorites, setFavorites] = useState([]);

  function isFavorito(content) {
    
    const { id } = content;
    if (!favorites.some((content) => (content.id -1) == id)) {
      setQuantity(quantity + 1);
      let newList = favorites;
      newList.push(content);
      setFavorites(newList);
    } else {
      setQuantity(quantity - 1);
      let newList = favorites.filter((content) => content.id !== id);
      setFavorites(newList);
    }
  }

  return <FavoritesContext.Provider value={{ quantity, isFavorito, favorites }}>{children}</FavoritesContext.Provider>;
}
