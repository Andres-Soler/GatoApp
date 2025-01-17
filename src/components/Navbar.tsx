import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-14 w-auto"
              src="/icon.png"
              alt="Logo de la empresa"
            />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-black hover:text-primary transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-black hover:text-primary transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('trabajos')} className="text-black hover:text-primary transition-colors">
              Trabajos Realizados
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-black hover:text-primary transition-colors">
              Contáctanos
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-black hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-3 py-2 text-black hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('trabajos')}
              className="block w-full text-left px-3 py-2 text-black hover:text-primary transition-colors"
            >
              Trabajos Realizados
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-3 py-2 text-black hover:text-primary transition-colors"
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;