import React from 'react';
import { Link } from "react-router-dom";
import logopic from '../Assets/CryptoSwitch.png';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img src={logopic} className="logo-pic" alt="logo pic" />
                <h2><span className="crypto">Crypto</span><span className="switch">Switch</span></h2>
            </div>
            <ul>
                <li><Link to="/" className="noSelect">Home</Link></li>
                <li><Link to="/wallet" className="noSelect">Wallet</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
