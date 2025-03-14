import React from 'react'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Footer from './components/Footer'
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

function App() {
  return (
    <div className='bg-gray-800 '>
      <Header />
      <img src="/portada.jpg" alt="Portada Chubbie Cheddar" />
      <section>
        <h1 className='text-[3.5rem] font-bold text-center mt-10 mb-5 text-white'>¡Bienvenido a Chubbie Cheddar!</h1>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} id='personaje' className="flex flex-col md:flex-row bg-gray-700 p-10 shadow-lg">

          <div className="flex flex-col w-full md:w-1/2 gap-2 justify-center items-center">
            <h1 className="text-4xl font-bold text-center mt-10 mb-5 text-white">
              Conoce a nuestro personaje
            </h1>
            <div className="flex flex-col w-full md:w-1/2 gap-2 justify-center items-center">
              <h2 className="text-3xl font-bold text-center mt-10 text-orange-600">
                Él es Chubbie
              </h2>
              <span className="text-md text-center font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(45deg, #b8860b, #ffdd44, #fff700, #b8860b)",
                  textShadow: "2px 2px 4px rgba(255, 215, 0, 0.5)"
                }}>
                El mayor catador de queso de la ratonera.
              </span>
              <p className="text-md text-center mb-5 text-white"> Le prometio a su maestro en su lecho de muerte que conseguiria probar el queso que ni el mismo pudo conseguir.</p>
            </div>

          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-96 h-96 rounded-full border-4 border-white p-10 hover:border-orange-600 hover:scale-105 duration-300 overflow-hidden flex justify-center items-center">

              <Parallax speed={-10}>
                <img className="w-full h-full object-cover" src="/raton.png" alt="Ratón" />
              </Parallax>;
            </div>
          </div>
        </motion.section>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id='trailer'>
        <VideoPlayer />
      </motion.section>
      <footer id='footer'>
        <Footer />
      </footer>

    </div>
  )
}

export default App
