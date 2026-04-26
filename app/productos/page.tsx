import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import WhatsAppButton from "../../components/WhatsAppButton"
import { CheckCircle } from "lucide-react"

export default function Productos() {
  return (
    <main className="bg-white min-h-screen">

      <Navbar />

      <div className="pt-24 max-w-6xl mx-auto px-6">

        {/* TITULO */}
        <h1 className="text-4xl font-bold text-[var(--neova-blue)] mb-6 text-center">
          Rafia Agrícola
        </h1>

        <div className="mb-16">
  <img
    src="/images/productos/rafia-general.jpg"
    className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
  />
</div>

        {/* DESCRIPCION */}
        <p className="text-center text-[var(--neova-blue)] max-w-3xl mx-auto mb-16">
          Fabricamos rafia agrícola de alta resistencia para el tutoreo de cultivos,
          diseñada para ofrecer durabilidad, consistencia y adaptabilidad en campo.
        </p>

        {/* BENEFICIOS CLAVE */}
        <section className="mb-20 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <CheckCircle className="mx-auto mb-3 text-[var(--neova-green)]" />
            <h3 className="font-semibold text-[var(--neova-blue)]">Alta resistencia</h3>
            <p className="text-[var(--neova-blue)]/80">
              Diseñada a base de polipropileno virgen.
            </p>
          </div>

          <div>
            <CheckCircle className="mx-auto mb-3 text-[var(--neova-green)]" />
            <h3 className="font-semibold text-[var(--neova-blue)]">Protección UV</h3>
            <p className="text-[var(--neova-blue)]/80">
              Todos nuestros productos incluyen 2% de protección UV.
            </p>
          </div>

          <div>
            <CheckCircle className="mx-auto mb-3 text-[var(--neova-green)]" />
            <h3 className="font-semibold text-[var(--neova-blue)]">Personalizable</h3>
            <p className="text-[var(--neova-blue)]/80">
              Disponible en color natural, negro y otros bajo pedido.
            </p>
          </div>

        </section>

        {/* CALIBRES */}
        <section className="mb-20">

          <h2 className="text-2xl font-semibold text-[var(--neova-blue)] mb-6">
            Calibres disponibles (m/kg)
          </h2>

          <p className="text-[var(--neova-blue)]/80 mb-8 max-w-2xl">
            Contamos con una amplia variedad de calibres estándar y capacidad de
            fabricación dentro de estos rangos:
          </p>

          <div className="flex flex-wrap gap-4">

            {["390","560","720","1000","1060","1200","1500"].map((calibre) => (
              <div
                key={calibre}
                className="px-6 py-3 rounded-full border border-[var(--neova-blue)] text-[var(--neova-blue)] font-semibold mb-6"
              >
                {calibre} m/kg
              </div>
            ))}

            <div className="mt-12 flex justify-center">



</div>

 <div className="bg-[var(--neova-white)] rounded-xl px-8 py-6 text-center max-w-xl w-full mx-auto shadow-sm">

    <p className="text-[var(--neova-blue)] font-semibold mb-2">
      ¿No encuentras el calibre que necesitas?
    </p>

    <p className="text-[var(--neova-blue)]/80 mb-6">
      Podemos fabricarlo dentro de estos rangos.
    </p>

    <a
      href="https://wa.me/5216123489328?text=Hola%20quiero%20cotizar%20rafia%20agrícola"
      className="inline-block bg-[var(--neova-green)] text-[var(--neova-blue)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
    >
      Cotizar por WhatsApp
    </a>

  </div>

          </div>

        </section>

        <section className="mb-20">

  <h2 className="text-2xl font-semibold text-[var(--neova-blue)] mb-8">
    Aplicaciones por cultivo
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* FORRAJE */}
    <div className="bg-[var(--neova-white)] rounded-xl overflow-hidden">

      <img
        src="/images/productos/forraje.jpg"
        className="w-full h-40 object-cover"
      />

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-[var(--neova-blue)]">
          Forraje / Ganado
        </h3>

        <p className="text-[var(--neova-blue)]/80 mb-3">
          Ideal para aplicaciones de alta resistencia.
        </p>

        <p className="text-sm font-semibold text-[var(--neova-blue)]">
          Calibres: 390, 560 m/kg
        </p>
      </div>

    </div>

    {/* HORTALIZAS PESADAS */}
    <div className="bg-[var(--neova-white)] rounded-xl overflow-hidden">

      <img
        src="/images/productos/hortalizas.jpg"
        className="w-full h-40 object-cover"
      />

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-[var(--neova-blue)]">
          Hortalizas pesadas
        </h3>

        <p className="text-[var(--neova-blue)]/80 mb-3">
          Soporte firme para cultivos de mayor peso.
        </p>

        <p className="text-sm font-semibold text-[var(--neova-blue)]">
          Tomate, plátano, calabaza, chiles
        </p>

        <p className="text-sm font-semibold text-[var(--neova-blue)] mt-1">
          Calibres: 720, 1000, 1060 m/kg
        </p>
      </div>

    </div>

    {/* CULTIVOS LIGEROS */}
    <div className="bg-[var(--neova-white)] rounded-xl overflow-hidden">

      <img
        src="/images/productos/berries.jpg"
        className="w-full h-40 object-cover"
      />

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-[var(--neova-blue)]">
          Cultivos ligeros
        </h3>

        <p className="text-[var(--neova-blue)]/80 mb-3">
          Ideal para cultivos más delicados.
        </p>

        <p className="text-sm font-semibold text-[var(--neova-blue)]">
          Berries, chiles, ejote
        </p>

        <p className="text-sm font-semibold text-[var(--neova-blue)] mt-1">
          Calibres: 1200, 1410, 1500 m/kg
        </p>
      </div>

    </div>

  </div>

</section>


        {/* FABRICACION */}
        <section className="mb-24 bg-[var(--neova-white)] p-10 rounded-xl text-center">

          <h2 className="text-3xl font-bold text-[var(--neova-blue)] mb-6">
            Fabricación a la medida
          </h2>

          <p className="text-[var(--neova-blue)]/80 mb-8 max-w-2xl mx-auto">
            Somos fabricantes, lo que nos permite adaptar el producto a tus necesidades
            específicas en calibre, presentación y volumen.
          </p>

          <a
            href="https://wa.me/5216123489328?text=Hola%20quiero%20cotizar%20rafia%20agrícola"
            className="bg-[var(--neova-green)] text-[var(--neova-blue)] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Solicitar cotización
          </a>

        </section>

      </div>

      <Footer />
      <WhatsAppButton />

    </main>
  )
}