/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import React, { memo } from 'react';
import { useNavigate } from 'react-router';

import './Header.scss';

const Header = function () {
  const navigate = useNavigate();

  const handleClick = (
    (event) => {
      navigate(['', event.target.value].join('/'), { replace: true });
    }
  );

  console.log('Header.js', Math.random());

  return (
    <header>
      <h1 className="kasa-logo">
        Kasa - Location d'appartements entre particuliers
      </h1>
      <nav>
        <ul>
          <li onClick={handleClick}>
            <input type="radio" id="nav-home" name="header-nav" value="home"/>
          </li>
          <li onClick={handleClick}>
            <input type="radio" id="nav-contact" name="header-nav" value="contact"/>
          </li>
          <li onClick={handleClick}>
            <input type="radio" id="nav-about" name="header-nav" value="about"/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
