import { cookies } from 'next/headers';
import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();


export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

useEffect(()=> {
  const savedCart = Cookies.get('cart');
  if (savedCart) {

    setCart(JSON.parse(savedCart));
  }
} []

);
useEffect(() => {
Cookies.set('cart', JSON.stringify(cart), {expires:10});

}, [cart]
);
 const addToCart = (dog) => {
    setCart([...cart, dog]);
  };
  const removeFromCart = (dogId) => {
    setCart(cart.filter((dog) => dog.Id !== dogId));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
