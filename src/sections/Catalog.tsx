const PRODUCTS = [
  {
    id: 1,
    name: "Roller Blackout",
    description:
      "Bloqueo solar total y máxima privacidad. Ideal para dormitorios y salas de TV.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
    features: ["100% Oscuridad", "Aislante Térmico"],
  },
  {
    id: 2,
    name: "Sunscreen 5%",
    description:
      "Protección UV sin perder la vista al exterior ni la luz natural.",
    image:
      "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=2070&auto=format&fit=crop",
    features: ["Luz Natural", "Filtro UV"],
  },
  {
    id: 3,
    name: "Sistema Dual",
    description:
      "La combinación perfecta: un paño Blackout y uno Sunscreen en la misma ventana.",
    image:
      "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?q=80&w=2070&auto=format&fit=crop",
    features: ["Versatilidad", "Control Total"],
  },
];

export function Catalog() {
  return (
    <section id="catalog" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2">
              Nuestros Productos
            </h2>
            <h3 className="text-4xl font-black tracking-tighter uppercase">
              Catálogo de <span className="text-zinc-700">Sistemas</span>
            </h3>
          </div>
          <p className="max-w-md text-zinc-700 text-sm">
            Ofrecemos soluciones modernas para el control de luz y temperatura
            en tus ambientes con materiales de alta durabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100 rounded-2xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="space-y-3">
                <div className="flex gap-2">
                  {product.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] font-bold uppercase tracking-tighter bg-zinc-100 px-2 py-1 rounded text-zinc-600"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-bold tracking-tight uppercase">
                  {product.name}
                </h4>

                <p className="text-zinc-500 text-sm leading-relaxed">
                  {product.description}
                </p>

                <button className="pt-2 text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-700 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                  Consultar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
