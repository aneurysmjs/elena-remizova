import React from 'react';

import pics from './pics';

import './Gallery.scss';

const Gallery: React.FunctionComponent = () => {
  return (
    <div className="gallery">
      {pics.map(({ id, img, title }) => (
        <div key={id} className="gallery__item">
          <div className="gallery__mask">
            <div>
              <h3 className="mb-2 text-center">{title}</h3>
            </div>
          </div>
          <img className="gallery__image" src={img} alt={img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
