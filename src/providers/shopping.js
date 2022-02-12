import { createContext, useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import api from "../services/api";
import { useAuth } from "./auth";

const ShoppingContext = createContext();

export function ShoppingProvider({ children }) {
  const [shopping, setShopping] = useState(undefined);
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      const promise = api.getCart(user.user);

      promise.then((response) => {
        setShopping(response.data);
      });
    }
  }, [user]);

  function receiveShopping() {
    const promise = api.getCart(user.user);
    promise.then((response) => {
      setShopping(response.data);
    });
  }
  return (
    <ShoppingContext.Provider value={{ shopping, receiveShopping }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export const useShopping = () => useContext(ShoppingContext);
