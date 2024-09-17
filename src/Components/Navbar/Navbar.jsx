import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu, setPage] = useState("false");


  return (
    <nav className='navbar'>
        <ul className="nav-list">
            <li>
                <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li>
                <Link to="/about" className="nav-link">About Me</Link>
            </li>
            <li>
                <Link to="/projects" className="nav-link">My Projects</Link>
            </li>
        </ul>
    </nav>
  )
};

export default Navbar;