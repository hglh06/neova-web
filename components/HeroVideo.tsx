export default function HeroVideo() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* VIDEO YOUTUBE */}
      <iframe
        src="https://www.youtube.com/embed/VAnTlSchBpE?autoplay=1&mute=1&controls=0&loop=1&playlist=VAnTlSchBpE&modestbranding=1&showinfo=0"
        className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        allow="autoplay; fullscreen"
      ></iframe>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[var(--neova-blue)]/40"></div>

      {/* LOGO */}
      <div className="relative z-10 flex items-center justify-center">
        <img
          src="/logo-footer.png"
          className="w-60 md:w-80 lg:w-120"
        />
      </div>

    </section>
  )
}