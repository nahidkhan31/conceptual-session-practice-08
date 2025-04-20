import toast, { Toaster } from "react-hot-toast";
export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    return JSON.parse(favorites);
  } else {
    return [];
  }
};
export const addFavorite = (phone) => {
  console.log(phone);
  const favorites = getFavorites();
  const isExist = favorites.find((p) => p.id === phone.id);
  if (isExist) {
    return toast("Already added");
  }
  favorites.push(phone);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const removeFavorite = (id) => {
  const favorites = getFavorites();
  const remainingFavorites = favorites.filter((phone) => phone.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remainingFavorites));
};
