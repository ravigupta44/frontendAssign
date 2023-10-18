import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../style/Navbar.css';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">MyApp</div>
            <div 
                className="menu-icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                ☰
            </div>
            <ul className={`navbar-list ${mobileMenuOpen ? 'active' : ''}`}>
                <li> <Link to="/">Section A</Link></li>
                <li><Link to="/sectionb">Section B</Link></li>
                <li><Link to="/sectionc">Section C</Link></li>
                <li><Link to="/about">About</Link></li>

            </ul>
        </nav>
    );
}

export default Navbar;
