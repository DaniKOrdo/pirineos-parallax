import Atropos from "atropos/react";

export default function Parallax({ images }) {
  return (
    <picture className="w-11/12 2xl:w-8/12 mx-auto px-1">
      <Atropos
        className="atropos atropos-header atropos-rotate-touch-scroll-y"
        activeOffset={40}
        shadowScale={1.1}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Imagen ${index + 1}`}
            data-atropos-offset={image.offset}
          />
        ))}
      </Atropos>
    </picture>
  );
}
