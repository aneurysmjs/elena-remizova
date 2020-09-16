import React from 'react';
import { useHistory } from 'react-router-dom';

import './Portfolio.scss';

import Gallery from '~/components/common/Gallery';

const Portfolio: React.FunctionComponent = () => {
  const history = useHistory();
  const handleClick = React.useCallback(
    (imagePath: string) => {
      // history.replace(`paint/${imagePath}`);
      history.push({ pathname: `/paint/${imagePath}` });
    },
    [history],
  );
  return (
    <section className="portfolio container">
      <p className="portfolio__title">Вот несколько образцов моих работ</p>
      <div className="portfolio__gallery">
        <Gallery onClick={handleClick} />
      </div>
    </section>
  );
};

export default Portfolio;
