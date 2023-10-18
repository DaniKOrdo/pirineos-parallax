import images from "../utils/images";

export default function Carousel({ onCarouselPhotoClick, actualImage }) {
  return (
    <section className="flex items-center w-11/12 gap-4 p-3 mx-auto mt-8 overflow-x-visible overflow-y-hidden xl:justify-center md:mt-8 2xl:w-9/12">
      {images.fullImages.map((image, index) => {
        const opacity = actualImage !== index ? "opacity-50 hover:opacity-90" : "ring ring-slate-400";
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
