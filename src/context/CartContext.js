import { createContext, useState } from "react";
export const CartContext = createContext ([])

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else{
            setCart(cart.map(prod => {
                return prod.id === item.id ? {...prod, quantity: prod.quantity + quantity} : prod;
            }));
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}

