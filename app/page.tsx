import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Shadow from '@/sections/Shadow'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Shadow />
      <About />
      <Footer />
    </div>
  )
}
