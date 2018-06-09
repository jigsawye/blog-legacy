import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';

const HeaderWrapper = styled.header`
  max-width: 650px;
  margin: auto;
  position: relative;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo />
    <Nav />
  </HeaderWrapper>
);

export default Header;
