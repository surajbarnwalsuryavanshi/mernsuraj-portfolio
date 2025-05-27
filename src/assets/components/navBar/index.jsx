// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT ME', to: '/about' },
  { label: 'RESUME', to: '/resume' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'PORTFOLIO', to: '/portfolio' },
  { label: 'CONTACT', to: '/contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <FaReact size={30} />
        </Link>

        <ul className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="navbar__item">
              <Link
                to={item.to}
                className="navbar__link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__icon" onClick={toggleMenu}>
          {menuOpen ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
