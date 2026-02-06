import React, { createContext, useContext, useState } from 'react'

const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)

  const value = {
    cartCount,
    setCartCount,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}

export default StoreContext
