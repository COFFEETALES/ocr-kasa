/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import React, { memo } from 'react';

import './Footer.scss';

const Footer = function () {
  return (
    <footer>
      <div className="kasa-logo">
        Kasa - Location d'appartements entre particuliers
      </div>
      <p>
			© 2020 Kasa. All rights reserved
		</p>
    </footer>
  );
};

export default Footer;
