import React from 'react';

import './Portfolio.scss';

import Gallery from '~/components/common/Gallery';

const Portfolio: React.FunctionComponent = () => {
  return (
    <section className="portfolio container">
      <p className="portfolio__title">Вот несколько образцов моих работ</p>
      <div className="portfolio__gallery">
        <Gallery />
      </div>
    </section>
  );
};

export default Portfolio;
