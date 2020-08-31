import React from 'react';

import './Home.scss';

import img1 from '~/assets/img/1.jpg';
import img2 from '~/assets/img/2.jpg';
import img3 from '~/assets/img/3.jpg';
import img4 from '~/assets/img/4.jpg';
import img5 from '~/assets/img/5.jpg';
import img6 from '~/assets/img/6.jpg';
import img7 from '~/assets/img/7.jpg';

const cells = [
  {
    id: 0,
    img: img1,
    title: 'Some Creative Title',
    description: 'Using responsive utility variants to build adaptive user interfaces.',
  },
  {
    id: 1,
    img: img2,
    title: 'Some Creative Title',
    description: 'This works for every utility class in the framework',
  },
  {
    id: 2,
    img: img3,
    title: 'Some Creative Title',
    description: 'By default, Tailwind uses a mobile first breakpoint system',
  },
  {
    id: 3,
    img: img4,
    title: 'Some Creative Title',
    description: 'Examples like this intentionally do not react to changing your browser size',
  },
  {
    id: 4,
    img: img5,
    title: 'Some Creative Title',
    description: 'Targeting mobile screens',
  },
  {
    id: 5,
    img: img6,
    title: 'Some Creative Title',
    description: 'Tailwind\'s breakpoints only include a min-width and don\'t include a max-width',
  },
  {
    id: 6,
    img: img7,
    title: 'Some Creative Title',
    description: 'Customizing breakpoints',
  },
];

const Home: React.FunctionComponent = () => {
  return (
    <div className="home__container">
      <div className="home-grid">
        {cells.map(({ id, img, description, title }) => (
          <div key={id} className="home-grid__item">
            <div className="home-grid__mask">
              <div>
                <h3 className="mb-2 text-center">{title}</h3>
                <p>{description}</p>
              </div>
            </div>
            <img src={img} alt={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
