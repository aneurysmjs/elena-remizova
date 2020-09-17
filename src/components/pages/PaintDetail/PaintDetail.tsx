import React from 'react';
import { useParams } from 'react-router-dom';

import imageZoom from '~/utils/imageZoom';
import getImageDimensions, { ImageDimensions } from '~/utils/getImageDimensions';
import isMobileBrowser from '~/utils/isMobileBrowser';

import details from './details';

import './PaintDetail.scss';

interface ParamsType {
  paintPath: string;
}

const PaintDetail: React.FunctionComponent = () => {
  const { paintPath } = useParams<ParamsType>();
  const [position, setPosition] = React.useState<string>();
  const [dimensions, setDimensions] = React.useState<ImageDimensions>();
  const handleZoom = React.useCallback((e) => setPosition(imageZoom(e)), []);

  const content = details.find(({ name }) => paintPath.includes(name));

  React.useEffect(() => {
    getImageDimensions(paintPath).then(setDimensions);
  }, [paintPath]);

  return (
    <section className="paint-detail container">
      <article className="paint-detail__content">
        <header>
          <h2 className="paint-detail__title">{content?.title}</h2>
        </header>

        <figure
          className="paint-detail__image"
          style={{
            backgroundPosition: position || '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '220%',
            backgroundImage: `url(${paintPath})`,
            paddingBottom: `calc(${dimensions && dimensions.height / dimensions.width} * 100%)`,
          }}
          {...(isMobileBrowser() ? { onTouchMove: handleZoom } : { onMouseMove: handleZoom })}
        >
          <img src={paintPath} alt="detail" />
        </figure>
        <p className="paint-detail__zoom-info--touch">
          коснитесь изображения и переместите палец, чтобы увеличить.
        </p>
        <p className="paint-detail__zoom-info--hover">
          наведите указатель мыши на изображение, чтобы увеличить.
        </p>
      </article>
    </section>
  );
};

export default PaintDetail;
