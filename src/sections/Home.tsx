export function Home() {
  // Reemplaza esta URL por la imagen de Unsplash/Pexels que más te guste
  const heroImageUrl = "/blackoutPhoto.jpg";

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-80px)] items-center">
        <div className="p-8 md:p-16 flex flex-col gap-6 z-10">
          <span className="inline-block bg-zinc-700 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase w-fit">
            Soluciones a Medida
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
            Transformá tus ambientes con{" "}
            <span className="text-zinc-700">privacidad total.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-lg leading-relaxed">
            Cortinas Blackout de alta calidad. Diseño moderno, aislación térmica
            y oscuridad garantizada para tu descanso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#catalog"
              className="px-8 py-3.5 bg-black font-bold rounded-lg text-center ring-1 ring-zinc-700 hover:bg-white hover:text-black transition duration-300"
            >
              Ver Catálogo
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-black font-bold rounded-lg text-center ring-1 ring-zinc-700 hover:bg-white hover:text-black transition duration-300"
            >
              Pedir Presupuesto
            </a>
          </div>
        </div>

        <div className="relative h-full w-full min-h-[300px] md:min-h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-transparent z-10 md:block hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 md:hidden block"></div>

          <img
            src={heroImageUrl}
            alt="Habitación moderna con cortinas Blackout instaladas"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
