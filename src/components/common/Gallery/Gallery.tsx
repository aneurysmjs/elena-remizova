/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import isImageElement from '~/utils/isImageElement';

import pics from './pics';

import './Gallery.scss';

interface PropsType {
  onClick: (imagePath: string) => void;
}

const Gallery: React.FunctionComponent<PropsType> = ({ onClick }: PropsType) => {
  const handleClick = React.useCallback(
    (evt: React.MouseEvent) => {
      /**
       * when in a mobile browser, the `mask` on hovering doesn't exist, so the click
       * goes right away on the <img /> element, that's why we check the type of the
       * element being clicked
       */
      const { src } = isImageElement(evt.target)
        ? evt.target
        : ((evt.target as HTMLDivElement).nextElementSibling as HTMLImageElement);

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
            <h3 className="gallery__mask-title">{title}</h3>
          </div>
          <img className="gallery__image" src={img} alt={img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
