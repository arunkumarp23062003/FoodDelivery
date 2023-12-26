import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import axios from 'axios';

const cartItemContext = createContext();

export const CartContext = ({ children }) => {
  const { user } = useAuth();
  const [cartItem, setCartItem] = useState([]); // Initialize cartItem state

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/auth/cartItem?email=${user.email}`);
      let temp = [];
      const cartItemId = response.data;
      for (const [index, { cartItemObjectId, itemTotal }] of cartItemId.entries()) {
        try {
          // Fetch item details
          const response = await axios.get(`http://localhost:4000/food/menu?item=${cartItemObjectId}`);

          // Store fetched item details in temp array
          temp.push({
            itemTotal,
            fetchedItem: response.data.fetchItem,
          });
        } catch (err) {
          console.log(err);
        }
      }
      setCartItem(temp);
      console.log(cartItem);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch cart items when the user is available
    if (user) {
      fetchCartItems();
    }
  }, [user]);

  const setCartState = (newCartItem) => {
    setCartItem(newCartItem);
  };

  return (
    <cartItemContext.Provider value={{ cartItem, setCartState, fetchCartItems }}>
      {children}
    </cartItemContext.Provider>
  );
};

export const useCartDetail = () => {
  return useContext(cartItemContext);
};
