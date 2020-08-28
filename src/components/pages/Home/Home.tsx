import React from 'react';

import './Home.scss';

const cells: Array<{ id: number }> = Array(7)
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
            <div>
              <h4>item {id + 1}</h4>
              <p>make a bunch of columns but the grid will decide how many to make</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
