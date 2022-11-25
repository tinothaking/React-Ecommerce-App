import React from "react";
import { NavLink } from "react-router-dom";
import './assets/css/header.css'
import './assets/css/index.css'
import './assets/css/style.css'
import './assets/css/product-grid.css'
import './assets/css/shop.css'
import BrandJSON from './assets/json/brand-details.json';

let user = JSON.parse(localStorage.getItem("user"))

const closeMenu = () => {
    document.querySelector("header details").removeAttribute("open")
}

export const Header = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <div className="logo">
            <img src={`${BrandJSON.brandLogo}`} alt={`${BrandJSON.brandName} logo`} />
          </div>
        </NavLink>
        <nav className="reg">
          <ul>
            <li>
              <NavLink to="/">+HOME</NavLink>
            </li>
            <li>
              <NavLink to="/shop">+SHOP</NavLink>
            </li>
            <li>
              <NavLink to="/lookbook">+LOOKBOOK</NavLink>
            </li>
            <li>
              <NavLink to="/about">+ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">+CONTACT</NavLink>
            </li>
          </ul>
        </nav>
        <details>
        <summary><img src="../resources/hamburger.png"/></summary>
          <nav className="reg mobile">
            <ul>
              <li>
                <NavLink to="/" onClick={closeMenu}>+HOME</NavLink>
              </li>
              <li>
                <NavLink to="/shop" onClick={closeMenu}>+SHOP</NavLink>
              </li>
              <li>
                <NavLink to="/lookbook" onClick={closeMenu}>+LOOKBOOK</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>+ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={closeMenu}>+CONTACT</NavLink>
              </li>
            </ul>
          </nav>
        </details>
        <div className="icons">
          <NavLink to="/cart">
            {/* <i className="fa fa-shopping-cart"></i> */}
            <div className="cart--icon">
              <img src="../resources/cart-icon.png" />
              <div className="cart--size-container"><span>{user.pids.length}</span></div>
            </div>
          </NavLink>
        </div>
      </header>
    </>
  )
}

export default Header;