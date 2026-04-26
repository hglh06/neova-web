"use client"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Juan Martínez",
    location: "Productor de tomate, Sinaloa",
    text: "La rafia de Neova nos ha dado muy buenos resultados. Es resistente y consistente.",
  },
  {
    name: "Luis Hernández",
    location: "Invernadero de berries, Jalisco",
    text: "La calidad es superior y los tiempos de entrega son excelentes.",
  },
  {
    name: "Carlos Gómez",
    location: "Productor agrícola, Michoacán",
    text: "Nos gusta que pueden adaptar el producto a nuestras necesidades.",
  },
  {
    name: "Ana Torres",
    location: "Productora de ejote, Guanajuato",
    text: "Muy buen rendimiento en campo, no se rompe fácilmente.",
  },
  {
    name: "Pedro Ramírez",
    location: "Productor de chile, Sonora",
    text: "La durabilidad es mejor que otras opciones que hemos usado.",
  },
  {
    name: "Miguel López",
    location: "Agricultor, Baja California",
    text: "Excelente relación calidad-precio y atención rápida.",
  },
  {
    name: "José Rivera",
    location: "Productor de calabaza, Sinaloa",
    text: "Muy resistente para cultivos pesados.",
  },
  {
    name: "Fernando Castillo",
    location: "Invernadero, Querétaro",
    text: "Nos ayudó a mejorar la eficiencia del tutoreo.",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[var(--neova-blue)] mb-12">
          Lo que dicen nuestros clientes
        </h2>

        {/* CARRUSEL */}
        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-full px-4"
              >
                <div className="bg-white p-8 rounded-xl shadow max-w-xl mx-auto">

                  <p className="text-[var(--neova-blue)]/80 mb-6 italic text-lg">
                    “{t.text}”
                  </p>

                  <p className="font-semibold text-[var(--neova-blue)]">
                    {t.name}
                  </p>

                  <p className="text-sm text-[var(--neova-blue)]/60">
                    {t.location}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* INDICADORES */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                i === index
                  ? "bg-[var(--neova-green)]"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>

    </section>
  )
}