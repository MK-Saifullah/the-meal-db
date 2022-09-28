import React from 'react';
import './Header.css';
import logo from '../../Lime-Small.png'

const Header = () => {
    return (
        <nav className='nav'>
            <a href="/home"><img width="60px" src={logo} alt=""/></a>
            <div className='navigation'>
                <a href="/about">About</a>
                <a href="/home">Home</a>
                <a href="/meals">Meals</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;