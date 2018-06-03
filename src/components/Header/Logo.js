import React from 'react';
import Link from 'gatsby-link';

import LogoImage from '../../assets/favicon.png';

const Logo = () => (
  <Link className="logo-link" to="/">
    <img src={LogoImage} alt="Logo" />
  </Link>
);

export default Logo;
