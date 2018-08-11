import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../assets/favicon.png';

const LogoWrapper = styled.aside`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: block;
  width: 28px;
  height: 24px;
  position: relative;
`;

const Logo = () => (
  <LogoWrapper>
    <LogoLink to="/">
      <img src={LogoImage} height="28px" width="28px" alt="Logo" />
    </LogoLink>
  </LogoWrapper>
);

export default Logo;
