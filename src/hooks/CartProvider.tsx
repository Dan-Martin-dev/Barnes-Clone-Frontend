import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the type for the context
interface CartContextType {
  isCarritoOpen: boolean;
  toggleCarrito: () => void;
  isMounted: boolean;
}

// Create the Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);


// CartProvider component
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Toggle cart open/close
  const toggleCarrito = () => {
    setIsCarritoOpen((prev) => !prev);
  };

  // Prevent the component from animating before user interaction
  useEffect(() => {
    setIsMounted(true); // When component mounts, allow transitions
  }, []);

  return (
    <CartContext.Provider value={{ isCarritoOpen, toggleCarrito, isMounted }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
