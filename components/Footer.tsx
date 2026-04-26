import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-[var(--neova-blue)] text-white mt-32 relative">

        {/* SEPARADOR VISUAL */}
<div className="border-t border-gray-200 mb-10"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">

        <div className="grid gap-12 md:grid-cols-4 text-center items-center">

          {/* LOGO */}
          <div className="flex flex-col items-center">
            <img src="/logo-footer.png" className="h-45 mb-4" />
          </div>

          {/* NOSOTROS */}
          <div className="flex flex-col items-center">
            <h3 className="text-[var(--neova-green)] font-semibold mb-4 text-sm tracking-wide uppercase">
              Nosotros
            </h3>

            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Neova es una empresa mexicana con más de 4 años de experiencia enfocada en la fabricación y comercialización de rafia agrícola para el tutoreo de cultivos. Desde nuestros inicios, hemos trabajado directamente con productores para entender las necesidades reales del campo y ofrecer soluciones confiables.
            </p>
          </div>

          {/* MENU */}
          <div className="flex flex-col items-center">
            <h3 className="text-[var(--neova-green)] font-semibold mb-4 text-sm tracking-wide uppercase">
              Menú
            </h3>

            <div className="flex flex-col gap-3 text-white/70 text-sm">

              <Link href="/" className="hover:text-white transition">
                Inicio
              </Link>

              <Link href="/quienes-somos" className="hover:text-white transition">
                Quienes Somos
              </Link>

              <Link href="/productos" className="hover:text-white transition">
                Productos
              </Link>

              <Link href="/contacto" className="hover:text-white transition">
                Contacto
              </Link>

            </div>
          </div>

          {/* CONTACTO */}
          <div className="flex flex-col items-center">
            <h3 className="text-[var(--neova-green)] font-semibold mb-4 text-sm tracking-wide uppercase">
              Contacto
            </h3>

            <div className="text-white/70 text-sm space-y-2 mb-4">
              <p>
                C. Violeta 135, Colonia agrícola<br/>
                CP 45236, Zapopan, Jalisco
              </p>

              <p>hola@neova.mx</p>
              <p>33 2828 9691 </p>
            </div>

            {/* REDES */}
            <div className="flex gap-5 justify-center">

  <a
    href="https://www.facebook.com/NeovaTecAgricola"
    target="_blank"
    className="p-2 rounded-full bg-white/10 hover:bg-[var(--neova-green)] transition"
  >
    <img src="/icons/facebook.svg" className="w-5 h-5 " />
  </a>

  <a
    href="https://www.instagram.com/neova.mx/"
    target="_blank"
    className="p-2 rounded-full bg-white/10 hover:bg-[var(--neova-green)] transition"
  >
    <img src="/icons/instagram.svg" className="w-5 h-5 " />
  </a>

  <a
    href="https://wa.me/5213328289691"
    target="_blank"
    className="p-2 rounded-full bg-white/10 hover:bg-[var(--neova-green)] transition"
  >
    <img src="/icons/whatsapp.svg" className="w-5 h-5" />
  </a>

</div>

          </div>

        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mx-6 md:mx-12"></div>

      {/* BOTTOM */}
      <div className="text-center text-white/50 text-sm py-6">
        © {new Date().getFullYear()} Neova. Todos los derechos reservados.
      </div>

    </footer>
  )
}