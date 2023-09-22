import images from "../utils/images";

export default function Carousel({ onCarouselPhotoClick, actualImage }) {
  return (
    <section className="flex items-center xl:justify-center mx-auto p-3 gap-4 mt-8 md:mt-8 w-11/12 2xl:w-8/12 overflow-y-hidden overflow-x-visible">
      {images.fullImages.map((image, index) => {
        const opacity = actualImage !== index ? "opacity-50 hover:opacity-90" : "";
        return (
          <img
            key={index}
            src={image}
            className={`h-24 md:h-full object-cover aspect-video cursor-pointer rounded shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 ${opacity}`}
            alt={`Imagen ${index + 1}`}
            onClick={() => onCarouselPhotoClick(index)}
          />
        );
      })}
    </section>
  );
}
