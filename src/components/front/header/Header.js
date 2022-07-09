import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to='/' className=''> web app
                </Link>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/Orders">Orders</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header