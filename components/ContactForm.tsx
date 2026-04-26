"use client"
import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const res = await fetch("https://formspree.io/f/xvzddwrz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (res.ok) {
      setStatus("SUCCESS")
      e.target.reset()
    } else {
      setStatus("ERROR")
    }
  }

  return (
    <div className="bg-[var(--neova-blue)] p-6 md:p-8 rounded-xl shadow-lg border border-gray-200">

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="nombre"
          placeholder="Nombre"
          className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--neova-green)]"
          required
        />

        <input
          name="empresa"
          placeholder="Empresa"
          className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--neova-green)]"
        />

        <input
          name="telefono"
          placeholder="Teléfono"
          className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--neova-green)]"
        />

        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          className="w-full bg-white border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--neova-green)]"
          required
        />

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          className="w-full bg-white border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-[var(--neova-green)]"
          required
        />

        <button
          type="submit"
          className="bg-[var(--neova-green)] text-[var(--neova-blue)] w-full py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Enviar mensaje
        </button>

        {status === "SUCCESS" && (
          <p className="text-green-600 text-center">
            Mensaje enviado correctamente.
          </p>
        )}

        {status === "ERROR" && (
          <p className="text-red-600 text-center">
            Hubo un error. Intenta nuevamente.
          </p>
        )}

      </form>

      <p className="text-sm text-[var(--neova-gray)] text-center mt-4">
        También puedes contactarnos por WhatsApp para una respuesta inmediata.
      </p>

    </div>
  )
}