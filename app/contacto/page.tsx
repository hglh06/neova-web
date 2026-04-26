import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import WhatsAppButton from "../../components/WhatsAppButton"
import ContactForm from "../../components/ContactForm"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contacto() {
  return (
    <main className="bg-[var(--neova-white)] min-h-screen">

      <Navbar />

      <div className="pt-24 max-w-6xl mx-auto px-6 text-[var(--neova-blue)]">

        <h1 className="text-4xl font-bold text-[var(--neova-blue)] mb-10 text-center">
          Contacto
        </h1>

        {/* CONTENIDO */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* FORMULARIO */}
          <ContactForm />
          {/* INFO + MAPA */}
          <div className="space-y-8">

  <h2 className="text-xl font-semibold">
    Información de contacto
  </h2>

  {/* CONTACTO */}
  <div className="space-y-4 text-[var(--neova-blue)]/80">

    <div className="flex items-start gap-3">
      <Phone className="w-5 h-5 text-[var(--neova-blue)] mt-1" />
      <p>33 2828 9691 </p>
    </div>

    <div className="flex items-start gap-3">
      <Mail className="w-5 h-5 text-[var(--neova-blue)] mt-1" />
      <p>hola@neova.mx</p>
    </div>

    <div className="flex items-start gap-3">
      <MapPin className="w-5 h-5 text-[var(--neova-blue)] mt-1" />
      <p>
        C. Violeta 135, Colonia agrícola<br/>
        CP 45236, Zapopan, Jalisco
      </p>
    </div>

  </div>

  {/* MAPA */}
  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
    <iframe
      src="https://maps.google.com/maps?q=C.%20Violeta%20135%20Agrícola%20Zapopan&t=&z=15&ie=UTF8&iwloc=&output=embed"
      className="w-full h-[300px]"
      loading="lazy"
    ></iframe>
  </div>

</div>

        </div>

      </div>

      <Footer />
      <WhatsAppButton />

    </main>
  )
}