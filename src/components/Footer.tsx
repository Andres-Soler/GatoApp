import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              src="/placeholder.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <p className="text-gray-400">
              Transformando espacios, creando hogares extraordinarios desde hace más de una década.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#trabajos" className="text-gray-400 hover:text-primary transition-colors">
                  Trabajos Realizados
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-primary transition-colors">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Remodelación Integral</li>
              <li className="text-gray-400">Acabados</li>
              <li className="text-gray-400">Instalaciones</li>
              <li className="text-gray-400">Diseño</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Reformas Castillo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;