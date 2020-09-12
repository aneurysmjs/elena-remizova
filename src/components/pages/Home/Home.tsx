import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Home.scss';

const Home: React.FunctionComponent = () => {
  return (
    <section className="home">
      <article className="home__content">
        <h1 className="home__title">Елена Ремизова</h1>
        <p className="home__description">
          Я художник, вы можете посмотреть все мои работы{' '}
          <NavLink to="/portfolio" className="no-underline hover:underline text-teal-500">
            здесь
          </NavLink>
        </p>
      </article>
    </section>
  );
};

export default Home;
