import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import Shadow from '@/sections/Shadow'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen hero" style={{ backgroundImage: "url('ship_bg.jpg')" }} >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-transparent to-primary-black relative top-[-80px]  w-full h-20">
      </div>
      <div className="bg-gradient-to-t from-transparent to-primary-black relative top-[-80px]  w-full h-32">
      </div>
      <About />
      <Footer />
    </>
  )
}
