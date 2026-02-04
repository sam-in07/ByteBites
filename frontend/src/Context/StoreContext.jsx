import React, { createContext, useContext, useState } from 'react'

const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i._id === item._id)
      if (idx > -1) {
        const updated = [...prev]
        updated[idx] = {
          ...updated[idx],
          quantity: (updated[idx].quantity || 1) + 1,
        }
        return updated
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i._id !== id))
  }

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((i) => (i._id === id ? { ...i, quantity } : i))
    )
  }

  const clearCart = () => setCart([])

  const cartCount = cart.reduce((sum, it) => sum + (it.quantity || 1), 0)

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)

export default StoreContext
