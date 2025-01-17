import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    {
      image: '/works/work1.jpg',
      title: 'Renovación Cocina Moderna',
      description: 'Transformación completa con acabados premium'
    },
    {
      image: '/works/work2.jpg',
      title: 'Baño de Lujo',
      description: 'Diseño contemporáneo con materiales de alta calidad'
    },
    {
      image: '/works/work3.jpg',
      title: 'Sala Contemporánea',
      description: 'Espacio abierto con diseño minimalista'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="trabajos" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Trabajos Realizados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre cómo hemos transformado espacios para nuestros clientes
            con diseños únicos y acabados excepcionales.
          </p>
        </div>

        <div className="relative">
          <div className="carousel aspect-video rounded-lg overflow-hidden">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                     hover:bg-white transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full
                     hover:bg-white transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;