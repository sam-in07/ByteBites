import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useStore } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useStore()
  
  const itemInCart = cart.find((item) => item._id === id)
  const quantity = itemInCart ? itemInCart.quantity : 0

  const handleDecrement = () => {
    if (quantity === 1) {
      removeFromCart(id)
    } else {
      updateQuantity(id, quantity - 1)
    }
  }

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-img' src={image} alt={name} />
        {!itemInCart ? (
          <img
            className='add'
            src={assets.add_icon_white}
            onClick={() => addToCart({ _id: id, name, price, image })}
            alt='add'
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={handleDecrement}
              src={assets.remove_icon_red}
              alt='remove'
            />
            <p>{quantity}</p>
            <img
              onClick={() => updateQuantity(id, quantity + 1)}
              src={assets.add_icon_green}
              alt='add'
            />
          </div>
        )}
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt='rating' />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
