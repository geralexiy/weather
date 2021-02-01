import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { Search } from './Search'

export const Navbar = (props) => {

    const sendCity = (value) => {
        props.enterCity(value)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    Weather
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-menu__item">
                        <NavLink className="navbar-menu__link" to="/" exact>Home</NavLink>
                    </li>
                    <li className="navbar-menu__item">
                        <NavLink className="navbar-menu__link" to="/favorite" exact>Favorite</NavLink>
                    </li>
                </ul>
                <Search handleCity={sendCity}/>
            </div>
        </nav>    
    )
}