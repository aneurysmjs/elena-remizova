import React from 'react';

import './Home.scss';

import pics from './pics';

const Home: React.FunctionComponent = () => {
  return (
    <div className="home__container">
      <div className="home-grid">
        {pics.map(({ id, img, title }) => (
          <div key={id} className="home-grid__item">
            <div className="home-grid__mask">
              <div>
                <h3 className="mb-2 text-center">{title}</h3>
              </div>
            </div>
            <img className="home-grid__image" src={img} alt={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
