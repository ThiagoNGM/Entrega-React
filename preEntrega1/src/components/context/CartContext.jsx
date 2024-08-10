import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    const totalProducts = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const sumProducts = () => {
        return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, totalProducts, sumProducts }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider