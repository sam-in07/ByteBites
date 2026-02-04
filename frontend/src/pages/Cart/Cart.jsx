import React from 'react'
import "./Cart.css"
import { useStore } from '../../Context/StoreContext'

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useStore()

  const total = cart.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 1), 0)

  if (!cart || cart.length === 0) {
    return <div className="cart-empty">Your cart is empty</div>
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price}</div>
              <div className="cart-item-qty">
                <button onClick={() => updateQuantity(item._id, Math.max(1, (item.quantity || 1) - 1))}>-</button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => updateQuantity(item._id, (item.quantity || 1) + 1)}>+</button>
              </div>
            </div>
            <button className="cart-item-remove" onClick={() => removeFromCart(item._id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="cart-footer">
        <div className="cart-total">Total: ${total.toFixed(2)}</div>
        <div className="cart-actions">
          <button onClick={clearCart}>Clear Cart</button>
          <button>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
