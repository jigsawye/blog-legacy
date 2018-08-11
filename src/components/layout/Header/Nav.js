import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import menu from './menu';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0 0 auto;

  a {
    border: 0;
    font-size: 12px;
    padding: 10px;
    color: #999;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s ease;

    &.active {
      color: #000;
    }

    :hover {
      background: none;
      color: #000;
    }
  }
`;

const NavLink = ({ to, children }) =>
  to.startsWith('http') ? (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link to={to} activeClassName="active" exact>
      {children}
    </Link>
  );

const Nav = () => (
  <NavWrapper>
    {menu.map(({ title, path }) => (
      <NavLink to={path} key={title}>
        {title}
      </NavLink>
    ))}
  </NavWrapper>
);

export default Nav;
