import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <h2><span className="coin">Coin</span><span className="switch">Switch</span></h2>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/wallet">Wallet</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
