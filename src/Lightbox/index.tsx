import React, { useEffect } from 'react';

// https://github.com/davidecalignano/MediumLightbox/
import MediumLightbox from './medium-lightbox';
import './medium-lightbox.css';

export interface ILightboxProps {
  src: string;
  width: number;
  height: number;
  caption?: string;
}

const useLightbox = () => {
  useEffect(() => {
    MediumLightbox('figure.zoom-effect');
  }, []);
};

const Lightbox: React.FC<ILightboxProps> = ({
  src,
  width,
  height,
  caption = ''
}) => {
  useLightbox();

  return (
    <figure className="zoom-effect">
      {/* the aspect-ratio-fill class applies a padding-bottom
      that is the aspect ratio of the image. The aspect ratio percentage is
      found with [(height/width)*100] formula. */}
      <div className="aspectRatioPlaceholder">
        <div className="aspect-ratio-fill" style={{ paddingBottom: '50%' }} />
        <img
          className="img"
          // data-width: the real width of the image.
          data-width={width}
          // data-height: the real height of the image.
          data-height={height}
          src={src}
          alt=""
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default Lightbox;
