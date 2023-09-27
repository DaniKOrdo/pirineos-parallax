import Atropos from "atropos/react";
import ProgressiveImage from "react-progressive-graceful-image";

export default function Parallax({ images, placeHolder }) {
  return (
    <picture className="w-11/12 2xl:w-8/12 mx-auto px-1">
      <Atropos
        className="atropos atropos-header atropos-rotate-touch-scroll-y"
        activeOffset={40}
        shadowScale={1.1}
      >
        {images.map((image, index) => (
          <ProgressiveImage
            src={image.url}
            placeholder={placeHolder}
            key={index}
          >
            {(src, loading) => (
              <img
                src={src}
                alt={`Imagen ${index + 1}`}
                data-atropos-offset={image.offset}
                style={{ filter: loading ? 'blur(15px)' : 'blur(0)' }}
              />
            )}
          </ProgressiveImage>
        ))}
      </Atropos>
    </picture>
  );
}
