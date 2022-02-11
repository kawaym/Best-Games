import { createContext, useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "../services/api";
import { useAuth } from "./auth";

const ShoppingContext = createContext();

export function ShoppingProvider({ children }) {
  const [shopping, setShopping] = useState(undefined);
  const { user } = useAuth();
  useEffect(() => {
    const promise = api.getCart("kaway.rocha@gmail.com");

    promise.then((response) => {
      setShopping(response.data);
    });
  }, []);

  function receiveShopping(){
    const promise =  api.getCart('kaway.rocha@gmail.com');
    promise.then(response => {
      setShopping(response.data)
    })
  }
  return (
    <ShoppingContext.Provider value={{shopping, receiveShopping}}>
      {children}
    </ShoppingContext.Provider>
  );
}

export const useShopping = () => useContext(ShoppingContext);
