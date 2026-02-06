import React, { createContext, useState } from 'react'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({})

  const value = {
    cartItems,
    setCartItems
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}