import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black pt-24 pb-12 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* BLOQUE DE CONTACTO (CTA) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-4">
              ¿Hablamos <span className="text-zinc-700 italic">hoy?</span>
            </h2>
            <p className="text-zinc-500 text-lg uppercase tracking-widest font-bold">
              Presupuestos sin cargo en el día.
            </p>
          </div>

          <a
            href="https://wa.me/tu-numero"
            className="group relative px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-tighter text-xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            WhatsApp
            <span className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-black animate-pulse"></span>
          </a>
        </div>

        <hr className="border-zinc-900 mb-12" />

        {/* INFO FINAL Y REDES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center md:text-left">
          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs">
              Redes
            </h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://www.instagram.com/tienda.blackout.bb/"
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors flex flex-row gap-2 items-center"
              >
                <FaInstagram />
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569508965909&locale=es_LA"
                className="text-zinc-500 hover:text-white transition-colors flex flex-row gap-2 items-center"
              >
                <FaFacebook />
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs">
              Contacto
            </h4>
            <div>
              <a
                href="mailto:tiendaBlackout@gmail.com"
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors flex flex-row gap-2 items-center"
              >
                <FaEnvelope /> hola@tiendablackout.com
              </a>
              <a
                href="https://wa.me/tu-numero"
                target="_blank"
                className="text-zinc-500 hover:text-white transition-colors flex flex-row gap-2 items-center"
              >
                {" "}
                <FaWhatsapp /> +54 291 123-4567
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs">
              Ubicación
            </h4>
            <a
              href="https://www.google.com/maps?cid=5390349472188671326&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=es&gl=AR&source=embed"
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors italic flex flex-row gap-2 items-center"
            >
              {" "}
              <FaLocationPin /> Bahía Blanca, Buenos Aires, Argentina
            </a>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-[10px] text-zinc-700 uppercase tracking-[0.5em]">
            © 2026 Tienda Blackout — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
