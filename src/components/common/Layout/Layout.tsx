import React from 'react';

import Navbar from '~/components/common/Navbar';
import Footer from '~/components/common/Footer';

interface PropsType {
  children: Array<React.ReactElement> | React.ReactElement;
}

const Layout = (props: PropsType): React.ReactElement => (
  <React.Fragment>
    <Navbar />
    <main className="bg-white pt-4 min-h-screen z-10 relative px-4">{props.children}</main>
    <Footer />
  </React.Fragment>
);

export default Layout;
