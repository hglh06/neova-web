"use client"
import { useEffect, useState } from "react"

export default function HeroQuienes() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">

      {/* IMAGEN */}
      <img
        src="/images/quienes-hero.jpg"
        className={`absolute w-full h-full object-cover transition-all duration-1000 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[var(--neova-blue)]/60"></div>

      {/* CONTENIDO */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img src="/logo.png" className="mx-auto w-40 mb-6" />

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Quiénes Somos
        </h1>
      </div>

    </section>
  )
}