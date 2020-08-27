import React from 'react';

import './Home.scss';

const cells = Array(10)
  .fill({ id: '' })
  .map((o, i) => ({
    ...o,
    id: i,
  }));

function Home(): React.ReactElement {
  return (
    <div className="home__container">
      <div className="home-grid">
        {cells.map(({ id }) => (
          <div key={id} className="home-grid__item">
            <div>item {id + 1}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
