import images from '../utils/images'

export default function Carousel({ onCarouselPhotoClick }) {
  return (
    <div className="flex justify-center mx-auto gap-3 pt-8 md:pt-16 h-32 w-32">
      {images.fullImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagen ${index + 1}`}
          onClick={() => onCarouselPhotoClick(index)}
        />
      ))}
    </div>
  );
}
