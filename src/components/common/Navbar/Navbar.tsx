import React from 'react';

import Button from '~/components/common/Button';

import './Navbar.scss';

const Navbar: React.FunctionComponent = () => (
  <nav className="navbar">
    <Button>Home</Button>
    <Button>Portfolio</Button>
  </nav>
);

export default Navbar;
