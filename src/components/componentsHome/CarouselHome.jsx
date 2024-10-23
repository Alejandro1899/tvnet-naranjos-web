import { useState } from "react";

const CarouselHome = () => {
  const slides = [
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+1',
      title: 'TecnlogiaFTTH',
      description: ' Slide 1',
    },
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+2',
      title: 'Título ',
      description: 'Descripción Slide 2',
    },
    {
      image: 'https://via.placeholder.com/800x400.png?text=Slide+3',
      title: 'Título Slide 3',
      description: 'Descripción Slide 3',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full relative">
            <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            {/* Contenedor Superpuesto */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Botones de Navegación */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
        onClick={prevSlide}>
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
        onClick={nextSlide} >
        &#10095;
      </button>
    </div>
  );
};
export default CarouselHome;