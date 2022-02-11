import { createContext, useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "../services/api";
import { useAuth } from "./auth";

const ShoppingContext = createContext();

export function ShoppingProvider({ children }) {
  const [shopping, setShopping] = useState(undefined);
  const { user } = useAuth();
  useEffect(() => {
    const promise = api.getCart('kaway.rocha@gmail.com')

    promise.then((response => {
      setShopping(response.data);
    }))
  }, [])

  console.log(shopping);

  return (
    <ShoppingContext.Provider value={(shopping, setShopping)}>
      {children}
    </ShoppingContext.Provider>
  );
}

export const useFavorites = () => useContext(ShoppingContext);