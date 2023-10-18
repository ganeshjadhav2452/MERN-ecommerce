
import { useState, useContext, createContext } from "react";

const CartContext = createContext()



const CartProvider = ({ children }) => {
    const [cart, cartSearch] = useState([])


    return (
        <CartContext.Provider value={[cart, cartSearch]}>{children}</CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider }