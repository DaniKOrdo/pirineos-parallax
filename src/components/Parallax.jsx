import Atropos from "atropos/react";

export default function Parallax({ images }) {
  return (
    <div className="pt-12 w-3/4 mx-auto">
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
    </div>
  );
}
