import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const links = [
  {
    id: 0,
    name: 'Главная',
    path: '/',
  },
  {
    id: 1,
    name: 'Портфолио',
    path: '/portfolio',
  },
];

const Navbar: React.FunctionComponent = () => (
  <nav className="navbar container">
    <div className="navbar__navigation">
      {links.map(({ id, name, path }) => (
        <NavLink
          key={id}
          className="navbar-link focus:outline-none"
          activeClassName="navbar-link--active"
          to={path}
          exact
        >
          {name}
          <span className="navbar-link__bar" />
        </NavLink>
      ))}
    </div>
  </nav>
);

export default Navbar;
