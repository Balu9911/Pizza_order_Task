import React from 'react'
import { Form, Link } from 'react-router-dom'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className='logo'>
          <h2>Pizzeria  </h2>
          <Link to='/'><img src="./PizzeriaLogo.png" alt="Pizzera Logo" /></Link>
          {/* <img src="./PizzeriaLogo.png" alt="Pizzera Logo" /> */}
          <Link to='/Orderpizza'>Order Pizza </Link>
          <Link to='/BuildUrPizza'>BuildUrPizza</Link>

        </div>

        <button className='cart'><FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color: "#ffffff",}}  />Shopping Cart</button>
      </header>
    </div>

  )
}

export default Header

