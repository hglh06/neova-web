"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHome = pathname === "/"
const isActive = (path: string) => {
  if (path === "/") return pathname === "/"
  return pathname === path
}

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isHome && !scrolled
          ? "bg-transparent"
          : "bg-[var(--neova-green)] shadow"
      }`}
    >
      <div className="w-full flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/">
          <img
            src="/logo.png"
            className={`h-8 transition-all ${
              isHome && !scrolled ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* MENU DESKTOP */}
        <div
  className={`hidden md:flex gap-8 font-semibold transition-all ${
    isHome && !scrolled
      ? "text-white"
      : "text-[var(--neova-blue)]"
  }`}
>

  <Link
    href="/"
    className={`hover:opacity-70 pb-1 ${
      isActive("/") ? "border-b-2 border-white md:border-[var(--neova-blue)]" : ""
    }`}
  >
    Inicio
  </Link>

  <Link
    href="/quienes-somos"
    className={`hover:opacity-70 pb-1 ${
      isActive("/quienes-somos")
        ? "border-b-2 border-white md:border-[var(--neova-blue)]"
        : ""
    }`}
  >
    Quienes Somos
  </Link>

  <Link
    href="/productos"
    className={`hover:opacity-70 pb-1 ${
      isActive("/productos")
        ? "border-b-2 border-white md:border-[var(--neova-blue)]"
        : ""
    }`}
  >
    Productos
  </Link>

  <Link
    href="/contacto"
    className={`hover:opacity-70 pb-1 ${
      isActive("/contacto")
        ? "border-b-2 border-white md:border-[var(--neova-blue)]"
        : ""
    }`}
  >
    Contacto
  </Link>

</div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition ${
            isHome && !scrolled
              ? "text-white"
              : "text-[var(--neova-blue)]"
          }`}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[var(--neova-green)] px-6 pb-6 flex flex-col gap-4 font-semibold text-[var(--neova-blue)]">

          <Link href="/" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <Link href="/quienes-somos" onClick={() => setOpen(false)}>
            Quienes Somos
          </Link>

          <Link href="/productos" onClick={() => setOpen(false)}>
            Productos
          </Link>

          <Link href="/contacto" onClick={() => setOpen(false)}>
            Contacto
          </Link>

        </div>
      )}

    </nav>
  )
}