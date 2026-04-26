import Navbar from "../components/Navbar"
import HeroVideo from "../components/HeroVideo"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import Features from "../components/Features"
import Intro from "../components/Intro"
import Testimonials from "../components/Testimonials"

export default function Home() {
  return (
    <main className="bg-white min-h-screen">

      <Navbar />

      <HeroVideo />

      <Intro />      

      <Features />

      <Testimonials /> 

      <Footer />

      <WhatsAppButton />

    </main>
  )
}
