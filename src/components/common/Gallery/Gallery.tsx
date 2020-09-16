/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import pics from './pics';

import './Gallery.scss';

interface PropsType {
  onClick: (imagePath: string) => void;
}

const Gallery: React.FunctionComponent<PropsType> = ({ onClick }: PropsType) => {
  const handleClick = React.useCallback(
    (evt: React.SyntheticEvent<HTMLDivElement>) => {
      const target = evt.target as HTMLDivElement;
      const { src } = target.nextElementSibling as HTMLImageElement;

      const imagePath = src.replace(/^.*\/\/[^\/]+./, '');

      onClick(imagePath);
    },
    [onClick],
  );
  return (
    <div className="gallery" onClick={handleClick}>
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
