"use client"
import { useEffect, useRef, useState } from "react"
import {
  ShieldCheck,
  Factory,
  SlidersHorizontal,
  Clock
} from "lucide-react"

const items = [
  {
    title: "Calidad",
    text: "Trabajamos con materiales de alta resistencia que cumplen con las exigencias del campo.",
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-[var(--neova-blue)]" />,
  },
  {
    title: "Fabricación directa",
    text: "Somos fabricantes, lo que nos permite ofrecer control total en cada producto.",
    icon: <Factory className="w-10 h-10 mb-4 text-[var(--neova-blue)]" />,
  },
  {
    title: "Producto personalizable",
    text: "Adaptamos calibres, colores y presentaciones según las necesidades del cliente.",
    icon: <SlidersHorizontal className="w-10 h-10 mb-4 text-[var(--neova-blue)]" />,
  },
  {
    title: "Experiencia",
    text: "Contamos con experiencia en el sector agrícola entendiendo las necesidades reales del productor.",
    icon: <Clock className="w-10 h-10 mb-4 text-[var(--neova-blue)]" />,
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-0 py-0 md:py-12 mt-0">

      <div className="grid md:grid-cols-4 gap-12 text-center">

        {items.map((item, i) => (
          <div
            key={i}
            className={`transition-all duration-1500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >

            {/* ICONO */}
            <div className="flex justify-center">
              {item.icon}
            </div>

            {/* TITULO */}
            <h3 className="text-xl font-semibold mb-3 text-[var(--neova-blue)]">
              {item.title}
            </h3>

            {/* TEXTO */}
            <p className="text-[var(--neova-blue)]/80">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}