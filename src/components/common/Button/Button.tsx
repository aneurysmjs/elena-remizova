import React from 'react';

import './Button.scss';

interface PropsType {
  children?: React.ReactNode;
}

const Home: React.FunctionComponent = ({ children }: PropsType) => {
  return <button className="btn">{children}</button>;
};

export default Home;
