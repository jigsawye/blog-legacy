import React from 'react';
import Link from 'gatsby-link';

const NavLink = ({ to, children }) => (
  <li className="nav-list-item">
    {to.startsWith('http') ? (
      <a href={to} className="nav-list-link" target="_blank">
        {children}
      </a>
    ) : (
      <Link to={to} activeClassName="active" className="nav-list-link" exact>
        {children}
      </Link>
    )}
  </li>
);

const menu = [
  {
    title: 'HOME',
    path: '/',
  },
  {
    title: 'ARCHIVE',
    path: '/archives',
  },
  {
    title: 'ABOUT',
    path: '/about',
  },
  {
    title: 'GitHub',
    path: 'https://github.com/jigsawye',
    icon: 'fa fa-github',
  },
  {
    title: 'Facebook',
    path: 'https://facebook.com/jigsaw.ye',
    icon: 'fa fa-facebook',
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/jigsawye',
    icon: 'fa fa-linkedin',
  },
  {
    title: 'RSS',
    path: '/atom.xml',
    icon: 'fa fa-rss',
  },
];

const Nav = () => (
  <ul className="nav nav-list">
    {menu.map(({ title, path, icon }) => (
      <NavLink to={path} key={title}>
        {icon ? <i className={icon} alt={title} title={title} /> : title}
      </NavLink>
    ))}
  </ul>
);

export default Nav;
