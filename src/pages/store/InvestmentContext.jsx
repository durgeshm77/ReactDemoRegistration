import React, { useState, createContext } from "react";

export const InvestmentContext = createContext({
    items: [],
    itemCount: 0,
    addItemToCart: () => { }
});

export default function InvestmentContextProvider({ children }) {
    const [investmentObj, setInvestmentObj] = useState({
        items: [],
    });

    function handleAddItemToCart(id, title, price) {
        setInvestmentObj((prevInvestmentObj) => {
            const updatedItems = [...prevInvestmentObj.items];
            updatedItems.push({
                id: id,
                name: title,
                price: price,
                quantity: 1,
            });

            return {
                items: updatedItems,
            };
        });
    }
    const cartValue = {
        items: investmentObj.items,
        itemCount: investmentObj.items.length,
        addItemToCart: handleAddItemToCart,
    };
    console.log(cartValue);
    return (
        <InvestmentContext.Provider value={cartValue}>
            {children}
        </InvestmentContext.Provider>
    )
}