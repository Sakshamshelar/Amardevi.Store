import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, ProductVariant } from '../types';
import GaneshMascot from '../components/GaneshMascot';

interface CartItem extends Product {
  quantity: number;
  selectedVariant?: ProductVariant;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product; selectedVariant?: ProductVariant }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'UPDATE_QUANTITY'; productId: number; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'SHOW_GANESH_BLESSING' }
  | { type: 'HIDE_GANESH_BLESSING' };

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  showGaneshBlessing: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface ExtendedCartState extends CartState {
  showGaneshBlessing: boolean;
}

const cartReducer = (state: ExtendedCartState, action: CartAction): ExtendedCartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => 
        item.id === action.product.id && 
        item.selectedVariant?.id === action.selectedVariant?.id
      );
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.product.id && item.selectedVariant?.id === action.selectedVariant?.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          showGaneshBlessing: true
        };
      } else {
        const updatedItems = [...state.items, { ...action.product, quantity: 1, selectedVariant: action.selectedVariant }];
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
          showGaneshBlessing: true
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(item => item.id !== action.productId);
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'UPDATE_QUANTITY': {
      if (action.quantity === 0) {
        const updatedItems = state.items.filter(item => item.id !== action.productId);
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        };
      }
      
      const updatedItems = state.items.map(item =>
        item.id === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [], total: 0 };
    
    case 'SHOW_GANESH_BLESSING':
      return { ...state, showGaneshBlessing: true };
    
    case 'HIDE_GANESH_BLESSING':
      return { ...state, showGaneshBlessing: false };
    
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { 
    items: [], 
    total: 0, 
    showGaneshBlessing: false 
  });

  const handleGaneshAnimationComplete = () => {
    dispatch({ type: 'HIDE_GANESH_BLESSING' });
  };

  return (
    <CartContext.Provider value={{ 
      state, 
      dispatch, 
      showGaneshBlessing: state.showGaneshBlessing 
    }}>
      {children}
      <GaneshMascot 
        showBlessing={state.showGaneshBlessing}
        onAnimationComplete={handleGaneshAnimationComplete}
      />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};