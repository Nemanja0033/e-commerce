import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { firestore } from '../../firebaseConfig';
import { useAuth } from '../auth/AuthContext ';
import { CartItem } from '../../type/CartType';



type CartState = CartItem[];

type CartAction = 
  | { type: 'ADD_TO_CART', payload: CartItem }
  | { type: 'REMOVE_FROM_CART', payload: CartItem }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CART', payload: CartItem[] };

const initialState: CartState = [];

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.id);
    case 'CLEAR_CART':
      return [];
    case 'SET_CART':
      return action.payload;
    default:
      return state;
  }
};

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  cart: initialState,
  dispatch: () => null
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const { currentUser  } = useAuth();

  useEffect(() => {
    const fetchCart = async () => {
      if (currentUser ) {
        try {
          console.log("Fetching cart for user:", currentUser .uid);
          const cartRef = doc(collection(firestore, 'carts'), currentUser .uid);
          const cartSnap = await getDoc(cartRef);
          if (cartSnap.exists()) {
            const items = cartSnap.data().items || [];
            console.log("Fetched cart items from Firestore:", items);
            dispatch({ type: 'SET_CART', payload: items });
          } else {
            console.log("No cart found for user:", currentUser .uid);
            dispatch({ type: 'SET_CART', payload: [] });
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      } else {
        dispatch({ type: 'CLEAR_CART' }); 
      }
    };
    fetchCart();
  }, [currentUser ]);

  useEffect(() => {
    const saveCart = async () => {
      if (currentUser ) {
        try {
          console.log("Saving cart items to Firestore:", cart);
          const cartRef = doc(collection(firestore, 'carts'), currentUser .uid);
          await setDoc(cartRef, { items: cart });
        } catch (error) {
          console.error("Error saving cart:", error);
        }
      }
    };
    saveCart();
  }, [cart, currentUser ]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);