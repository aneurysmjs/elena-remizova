import React from 'react';

interface PropsType {
  children: Array<React.ReactElement> | React.ReactElement;
}

const Layout = (props: PropsType): React.ReactElement => (
  <main className="container mx-auto pt-4">{props.children}</main>
);

export default Layout;
