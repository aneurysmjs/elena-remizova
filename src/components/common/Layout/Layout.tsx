import React from 'react';

import Navbar from '~/components/common/Navbar';

interface PropsType {
  children: Array<React.ReactElement> | React.ReactElement;
}

const Layout = (props: PropsType): React.ReactElement => (
  <main className="container mx-auto pt-4">
    <Navbar />
    {props.children}
  </main>
);

export default Layout;
