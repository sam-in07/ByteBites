import React from "react"
import "./Navbar.css"
import { assets } from "../../assets/assets"
import { NavLink } from "react-router-dom"
import { useStore } from "../../Context/StoreContext"

const Navbar = () => {
  const { cartCount } = useStore()

  return (
    <div className="navbar">
      <img src={assets.logo} alt="ByteBites Logo" />
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={({ isActive }) => (isActive ? "active" : "")}>Menu</NavLink>
        </li>
        <li>
          <NavLink to="/app" className={({ isActive }) => (isActive ? "active" : "")}>Mobile App</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <NavLink to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
            {/* { cartCount > 0 &&  */
            <div className="dot"></div>
            }
          </NavLink>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
