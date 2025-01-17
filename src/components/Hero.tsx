import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative h-screen">
      <div className="carousel h-full absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item absolute inset-0 ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-3xl slide-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforma tu Espacio
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Convertimos tus ideas en realidad con diseños innovadores y acabados de primera calidad. 
            Más de 10 años de experiencia transformando espacios en hogares extraordinarios.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-primary text-black px-8 py-3 rounded-md font-medium 
                     hover:bg-primary/90 transition-colors duration-300"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;