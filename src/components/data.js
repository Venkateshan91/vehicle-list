import { useState } from "react";
import useRows from "../hooks/useRows";

function useFavoriteData() {
  const { items } = useRows;

  const [allItems, setAllItems] = useState(items);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const addToFavorites = (item) => {
    setAllItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    item.isFavorite = true;
    setFavoriteItems((prevItems) => [...prevItems, item]);
  };

  const removeFromFavorites = (item) => {
    item.isFavorite = false;
    setFavoriteItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    setAllItems((prevItems) => [...prevItems, item]);
  };

  return { allItems, favoriteItems, addToFavorites, removeFromFavorites };
}

export default useFavoriteData;
