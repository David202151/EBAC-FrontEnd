/*
JAVASCRIPT
// import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const Header = ({ appName }) => {
    return (
        <header>
            <h1>{appName}</h1>
            <nav>
                <Link to="/">Login</Link> | <Link to="/movies">Movies</Link>
            </nav>
        </header>
    );
};

export default Header;
*/
/* TYPESCRIPT */

import { Link } from 'react-router-dom';
import './Header.css';
interface HeaderProps{
    appName : string;
}
const Header = ({ appName } : HeaderProps) => {
    return (
        <header className="header">
            <h1 className="header__title">{appName}</h1>
            <nav className="header__nav">
                <Link className="header__link" to="/">Login</Link> | <Link className="header__link" to="/movies">Movies</Link>
            </nav>
        </header>
    );
};

export default Header;