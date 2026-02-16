import { createContext, useState } from "react";

import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

  const url = "http://localhost:4000"
  const [cartItems, setCartItems] = useState({});



// **Short explanation:**

// * `useState({})` → creates state with an empty object (cart starts empty).
// * `cartItems` → current cart data.
// * `setCartItems` → function to update the cart.
// * You must use `setCartItems()` to change the cart so React re-renders.






  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    url
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider;