/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import React from 'react';
import { NavLink } from 'react-router';

import './Header.scss';

const Header = function () {
  console.log('Header.js', Math.random());

  return (
    <header>
      <h1 className="kasa-logo">
        Kasa - Location d'appartements entre particuliers
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link-default'}
              to="/home">Accueil</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link-default'}
              to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link-default'}
              to="/about">À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
