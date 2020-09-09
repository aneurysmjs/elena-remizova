import React from 'react';

import './Home.scss';

import Gallery from '~/components/common/Gallery';

const Home: React.FunctionComponent = () => {
  return (
    <div className="home-container mb-2">
      <Gallery />
    </div>
  );
};

export default Home;
