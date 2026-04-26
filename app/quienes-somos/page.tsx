import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import WhatsAppButton from "../../components/WhatsAppButton"
import { Handshake, ShieldCheck, Users, SlidersHorizontal } from "lucide-react"
import { Leaf, Factory, Settings2, MessageCircle } from "lucide-react"


export default function QuienesSomos() {
  return (
    <main className="bg-[var(--neova-white)] min-h-screen text-white">

      <Navbar />

      {/* IMAGEN FULL WIDTH */}
      <div className="w-full">
        <img
          src="/images/quienes-hero.jpg"
          className="w-full h-[50vh] md:h-[60vh] object-cover animate-fade-in"
        />
      </div>

      {/* CONTENIDO */}
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">

        {/* TITULO */}
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--neova-blue)] text-center mb-16">
          Quiénes Somos
        </h1>

        {/* HISTORIA */}
        <section className="mb-24">

          <h2 className="text-2xl font-semibold mb-6 text-[var(--neova-blue)]">
            Nuestra historia
          </h2>

          <p className="text-base leading-relaxed text-[var(--neova-blue)]/80 mb-4">
            Neova es una empresa mexicana con más de 4 años de experiencia enfocada en la
            fabricación y comercialización de rafia agrícola para el tutoreo de cultivos.
            Desde nuestros inicios, hemos trabajado directamente con productores para entender
            las necesidades reales del campo y ofrecer soluciones confiables.
          </p>

          <p className="text-base leading-relaxed text-[var(--neova-blue)]/80">
            Nos especializamos en desarrollar productos resistentes, consistentes y adaptables,
            que contribuyen a mejorar la productividad agrícola. Nuestra cercanía con el cliente
            y capacidad de fabricación nos permiten ofrecer tanto soluciones estándar como
            desarrollos a la medida.
          </p>

        </section>

        {/* MISION Y VISION */}
        <section className="mb-24 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[var(--neova-blue)]">
              Misión
            </h2>
            <p className="text-[var(--neova-blue)]/80">
              Proveer soluciones de tutoreo agrícola mediante la fabricación de rafia de alta
              calidad, ayudando a los productores a optimizar sus cultivos con productos
              confiables, resistentes y adaptados a sus necesidades.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-[var(--neova-blue)]">
              Visión
            </h2>
            <p className="text-[var(--neova-blue)]/80">
              Consolidarnos como una empresa referente en México y Latinoamérica en soluciones
              de tutoreo agrícola, destacando por nuestra calidad, innovación y cercanía con el
              sector productivo.
            </p>
          </div>

        </section>

        {/* VALORES */}
        <section className="mb-24">

          <h2 className="text-2xl font-semibold mb-6 text-[var(--neova-blue)]">
            Nuestros valores
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">

  {/* COMPROMISO */}
  <div className="flex gap-4 items-start">
    <Handshake className="w-8 h-8 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold text-[var(--neova-blue)] text-base leading-relaxed mb-1">
        Compromiso
      </h3>
      <p className="text-[var(--neova-blue)]/80">
        Cumplimos con la calidad y tiempos que nuestros clientes necesitan.
      </p>
    </div>
  </div>

  {/* CALIDAD */}
  <div className="flex gap-4 items-start">
    <ShieldCheck className="w-8 h-8 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold text-[var(--neova-blue)] text-base leading-relaxed mb-1">
        Calidad
      </h3>
      <p className="text-[var(--neova-blue)]/80">
        Fabricamos productos confiables que responden a las exigencias del campo.
      </p>
    </div>
  </div>

  {/* CERCANÍA */}
  <div className="flex gap-4 items-start">
    <Users className="w-8 h-8 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold text-[var(--neova-blue)] text-base leading-relaxed mb-1">
        Cercanía
      </h3>
      <p className="text-[var(--neova-blue)]/80">
        Entendemos las necesidades reales del productor agrícola.
      </p>
    </div>
  </div>

  {/* FLEXIBILIDAD */}
  <div className="flex gap-4 items-start">
    <SlidersHorizontal className="w-8 h-8 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold text-[var(--neova-blue)] text-base leading-relaxed mb-1">
        Flexibilidad
      </h3>
      <p className="text-[var(--neova-blue)]/80">
        Nos adaptamos a requerimientos específicos de cada cliente.
      </p>
    </div>
  </div>

</div>

        </section>

        {/* QUE OFRECEMOS */}
        <section className="mb-0">

  <h2 className="text-2xl font-semibold mb-6 text-[var(--neova-blue)]">
    ¿Qué ofrecemos?
  </h2>

  <p className="text-[var(--neova-blue)]/80 mb-10 max-w-2xl leading-relaxed">
    En Neova ofrecemos soluciones enfocadas en mejorar la productividad agrícola a través
    de rafia de alta calidad, adaptándonos a las necesidades específicas de cada productor.
    Nuestro enfoque combina fabricación, flexibilidad y cercanía con el cliente.
  </p>

  <div className="grid md:grid-cols-2 gap-8 text-[var(--neova-blue)]">

  {/* RAFIA */}
  <div className="flex gap-4 items-start">
    <Leaf className="w-6 h-6 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold mb-1">Rafia de alta resistencia</h3>
      <p className="text-[var(--neova-blue)]/80">
        Diseñada para soportar condiciones exigentes en campo.
      </p>
    </div>
  </div>

  {/* FABRICACION */}
  <div className="flex gap-4 items-start">
    <Factory className="w-6 h-6 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold mb-1">Fabricación especializada</h3>
      <p className="text-[var(--neova-blue)]/80">
        Producción en diferentes calibres y colores según requerimientos.
      </p>
    </div>
  </div>

  {/* PERSONALIZACION */}
  <div className="flex gap-4 items-start">
    <Settings2 className="w-6 h-6 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold mb-1">Soluciones personalizadas</h3>
      <p className="text-[var(--neova-blue)]/80">
        Adaptamos el producto a las necesidades específicas de cada cliente.
      </p>
    </div>
  </div>

  {/* ATENCION */}
  <div className="flex gap-4 items-start">
    <MessageCircle className="w-6 h-6 text-[var(--neova-blue)] mt-1" />
    <div>
      <h3 className="font-semibold mb-1">Atención directa</h3>
      <p className="text-[var(--neova-blue)]/80">
        Comunicación cercana para brindar asesoría y seguimiento.
      </p>
    </div>
  </div>

</div>

</section>

      </div>

      <Footer />
      <WhatsAppButton />

    </main>
  )
}