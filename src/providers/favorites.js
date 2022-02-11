import { createContext, useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "../services/api";
import { useAuth } from "./auth";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(undefined);
  const { user } = useAuth();
  useEffect(() => {
    const promise = api.getFavorites('kaway.rocha@gmail.com')

    promise.then((response => {
      setFavorites(response.data);
    }))
  }, [])


  function receiveFavorites(){
    const promise =  api.getFavorites('kaway.rocha@gmail.com');
    promise.then(response => {
      setFavorites(response.data)
    })
  }

  return (
    <FavoriteContext.Provider value={{favorites, receiveFavorites}}>
      {children}
    </FavoriteContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoriteContext);