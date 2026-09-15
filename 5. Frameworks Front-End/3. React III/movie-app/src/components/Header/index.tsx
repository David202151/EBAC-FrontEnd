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
interface HeaderProps{
    appName : string; 
}
const Header = ({ appName } : HeaderProps) => {
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