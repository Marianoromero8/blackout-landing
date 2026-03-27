export function FindUs() {
  return (
    <section id="find-us" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* INFO DE UBICACIÓN */}
        <div>
          <h2 className="text-xs font-bold tracking-[0.4em] text-zinc-600 uppercase mb-4">
            Ubicación
          </h2>
          <h3 className="text-5xl font-black tracking-tighter text-white uppercase mb-8">
            Nuestro{" "}
            <span className="text-zinc-600 italic font-light">Showroom</span>
          </h3>

          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-1">
                Dirección
              </span>
              <p className="text-xl text-white">
                Florida 784, Bahia Blanca, Buenos Aires
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-1">
                Horarios
              </span>
              <p className="text-xl text-white">
                Lunes a Viernes: 09:00 a 18:00 hs
              </p>
              <p className="text-xl text-white">Sábados: 09:00 a 13:00 hs</p>
            </div>
          </div>
        </div>

        {/* MAPA (Placeholder elegante) */}
        <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden border border-zinc-900 group">
          {/* Overlay sutil para oscurecer los bordes */}
          <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.5032489289089!2d-62.27544323033278!3d-38.69454575151667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbb4619506b99%3A0x4ace5e492105255e!2sFlorida%20784%2C%20B8003JSJ%20Bah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1774495656152!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
