import { createContext, useContext, useState } from "react"


export const PurchaseContext = createContext({});

export const PurchaseProvider = (props) => {
    const [purchase, setPurchase] = useState({});

    return (
        <PurchaseContext.Provider value={{ purchase, setPurchase }}>
            {props.children}
        </PurchaseContext.Provider>
    );
}

export const usePurchase = () => useContext(PurchaseContext);