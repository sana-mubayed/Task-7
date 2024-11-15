import React, { useState } from 'react';
import logo from './../../assets/images/logo.svg';
import './Navbar.css';
import { FaShoppingCart, FaBars, FaCaretDown } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from 'react-icons/fa6';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link ><img src={logo} alt="logo" /></Link>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li className='dropdown-li'><Link to={'/'}>Home <FaCaretDown /></Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li className='dropdown-li'>
            <Link >
              Services <FaCaretDown />
            </Link>
          </li>
          <li className='dropdown-li'><Link >Pages <FaCaretDown /></Link></li>
          <li className='dropdown-li'><Link >Blog <FaCaretDown /></Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>

        </ul>
        <div className="navbar-icons d-flex justify-content-end align-items-center">
          <CiSearch className="icon black" />
          <FaShoppingCart className="icon blue" />
          <FaBars className="icon menu-icon blue" onClick={toggleMenu} />
          <button className='right'>GET A QUOTE <FaArrowRightLong /></button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
