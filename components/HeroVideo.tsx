export default function HeroVideo() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/video-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[var(--neova-blue)]/40"></div>

      <div className="relative z-10 flex items-center justify-center">
        <img src="/logo-footer.png" className="w-60 md:w-80 lg:w-120" />
      </div>

    </section>
  )
}