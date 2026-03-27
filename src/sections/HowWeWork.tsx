import { MessageCircle, Ruler, Truck } from "lucide-react"; // O usa SVGs si no tenés la librería

const STEPS = [
  {
    id: "01",
    title: "Asesoramiento",
    description:
      "Nos enviás las medidas aproximadas por WhatsApp y te asesoramos sobre la mejor tela para tu ambiente.",
    icon: <MessageCircle size={32} strokeWidth={1.5} />,
    color: "from-zinc-900 to-zinc-800",
  },
  {
    id: "02",
    title: "Presupuesto",
    description:
      "Recibís una cotización detallada. Si avanzamos, coordinamos una visita para rectificar medidas finales.",
    icon: <Ruler size={32} strokeWidth={1.5} />,
    color: "from-zinc-800 to-zinc-700",
  },
  {
    id: "03",
    title: "Instalación",
    description:
      "Fabricamos tus cortinas a medida y las dejamos instaladas en tiempo récord. Listas para disfrutar.",
    icon: <Truck size={32} strokeWidth={1.5} />,
    color: "from-zinc-700 to-zinc-600",
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs font-bold tracking-[0.4em] text-zinc-600 uppercase mb-4">
            Proceso
          </h2>
          <h3 className="text-5xl font-black tracking-tighter text-white uppercase">
            Cómo{" "}
            <span className="text-zinc-600 italic font-light">trabajamos</span>
          </h3>
          <div className="h-1 w-24 bg-white mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="group relative p-10 bg-black rounded-[2.5rem] border border-zinc-900 hover:border-zinc-700 transition-all duration-500 ease-in-out"
            >
              <span className="absolute top-6 right-10 text-8xl font-black text-zinc-900 group-hover:text-zinc-800 transition-colors duration-500 select-none">
                {step.id}
              </span>

              <div className="w-16 h-16 rounded-2xl bg-zinc-900 text-zinc-400 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                {step.icon}
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-base leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 h-[1px] w-full bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-4 bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all active:scale-95">
            <a href="#contact">Solicitar Asesoramiento</a>
            <span className="group-hover:translate-x-1 transition-transform font-bold">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
