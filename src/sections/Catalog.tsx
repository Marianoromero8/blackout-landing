import { Clock, Ruler, Wrench, Sparkles, Compass } from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Roller Blackout",
    badge: "Oscurecimiento Total",
    description:
      "Bloqueo solar total y máxima privacidad. Ideal para dormitorios, salas de TV y proyectos residenciales donde necesitás control absoluto de la luz.",
    image: "/roller.png",
  },
  {
    id: 2,
    name: "Sunscreen",
    badge: "Filtro UV",
    description:
      "Protección UV sin perder la vista al exterior ni la luz natural. Perfecta para oficinas, livings y ambientes con orientación al sol.",
    image: "/sunscreen.png",
  },
];

const SERVICES = [
  {
    icon: Clock,
    title: "Cumplimiento de plazos",
    description:
      "Trabajamos con los tiempos acordados y los respetamos en cada proyecto.",
  },
  {
    icon: Sparkles,
    title: "Terminaciones prolijas",
    description:
      "Cada detalle cuidado al máximo para un resultado impecable y duradero.",
  },
  {
    icon: Ruler,
    title: "Relevamiento de medidas",
    description:
      "Visitamos el espacio y tomamos las medidas exactas antes de fabricar.",
  },
  {
    icon: Wrench,
    title: "Fabricación e instalación",
    description:
      "Fabricación propia con instalación profesional incluida en cada trabajo.",
  },
  {
    icon: Compass,
    title: "Asesoramiento personalizado",
    description:
      "Recomendamos el sistema ideal según la orientación y el uso de cada ambiente.",
  },
];

export function Catalog() {
  return (
    <section id="catalog" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2 text-zinc-500">
              Qué ofrecemos
            </h2>
            <h3 className="text-4xl font-black tracking-tighter uppercase">
              Nuestros <span className="text-zinc-700">Servicios</span>
            </h3>
          </div>
          <p className="max-w-md text-zinc-500 text-sm leading-relaxed">
            Nos dedicamos a la fabricación e instalación de cortinas roller
            combinando funcionalidad, diseño y durabilidad para proyectos
            residenciales e inmobiliarios.
          </p>
        </div>

        {/* Productos principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/2] overflow-hidden bg-zinc-900 rounded-2xl mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-2xl font-black tracking-tight uppercase">
                  {product.name}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {product.description}
                </p>
                <button className="pt-1 text-sm font-bold uppercase tracking-widest border-b-2 border-white hover:text-zinc-400 hover:border-zinc-400 transition-colors">
                  <a href="#contact">Consultar ahora →</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Separador */}
        <div className="border-t border-zinc-800 mb-14" />

        {/* Servicios */}
        <div className="mb-10">
          <h4 className="text-sm font-bold tracking-widest uppercase text-zinc-500 mb-8">
            Por qué elegirnos
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group flex flex-col gap-4 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 group-hover:bg-zinc-800 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-tight mb-1">
                      {service.title}
                    </h5>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
