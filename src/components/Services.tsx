import { Home, Paintbrush, Wrench, Ruler } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Remodelación Integral",
      description: "Desde pequeñas instalaciones hasta grandes reformas, en Reformas Castillo ofrecemos un servicio completo y confiable."
    },
    {
      icon: Paintbrush,
      title: "Acabados",
      description: "En Reformas Castillo, nos enorgullecemos de ofrecer acabados impecables y duraderos que reflejen la mas alta calidad."
    },
    {
      icon: Wrench,
      title: "Instalaciones",
      description: "En Reformas Castillo nos aseguramos que cada proceso sea fluido y sin complicaciones, permitiendote disfrutar de tu espacio renovado."
    },
    {
      icon: Ruler,
      title: "Diseño",
      description: "En Reformas Castillo ofrecemos diseños que se adaptan perfectamente a la vision y estilo que buscas en tu reforma, siguiendo de cerca tus preferencias."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para transformar cualquier espacio
            según tus necesidades y preferencias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm border border-gray-100
                         hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;