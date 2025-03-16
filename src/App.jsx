import React from 'react'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Footer from './components/Footer'
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Carrousel from './components/Carrousel';



function App() {
  return (
    <div className='bg-gray-800 '>
      <Header />

      <img src="/portada.webp" alt="Portada Chubbie Cheddar" />
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
            <div className="w-80 md:w-96 h-80 md:h-96 rounded-full border-4 border-white p-10 hover:border-orange-600 hover:scale-105 duration-300 overflow-hidden flex justify-center items-center">

              <Parallax speed={-10}>
                <img className="w-full h-full object-cover" src="/raton.webp" alt="Ratón" />
              </Parallax>;
            </div>
          </div>

        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }} id='items' className="flex flex-col md:flex-col bg-gray-700 p-10 shadow-lg">
          <div className='w-full flex flex-col items-center'>
            <h1 className="text-4xl font-bold text-center mt-10 pb-10 text-white">
              Items comsumibles
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center group gap-4   pt-2 border-2 border-gray-600 rounded-xl shadow-2xl">
              <div className="w-48 h-48 rounded-full border-4 border-white p-10 hover:border-orange-600 hover:scale-105 duration-300 overflow-hidden flex justify-center items-center">
                <img className="w-full h-full object-cover" src="/manzana.webp" alt="Manzana" />
              </div>
              <div className="flex flex-col justify-center items-center text-center p-2 rounded-lg  bg-white text-black group-hover:bg-orange-500 duration-300 group-hover:text-white">
                <span className='text-md font-semibold'>Manzana</span>
                <p>Las manzanas sirven para comprar artículos en la tienda.</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center group gap-4 pt-2 border-2 border-gray-600 rounded-xl shadow-2xl">
              <div className="w-48 h-48 rounded-full border-4 border-white p-10 hover:border-orange-600 hover:scale-105 duration-300 overflow-hidden flex justify-center items-center">
                <img className="w-full object-cover" src="/lima.webp" alt="Lima" />
              </div>
              <div className="flex flex-col justify-center items-center text-center p-2 rounded-lg  bg-white text-black group-hover:bg-orange-500 duration-300 group-hover:text-white">
                <span className='text-md font-semibold'>Lima</span>
                <p>La acidez de la lima produce que Chubbie obtenga energía.</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center group gap-4  pt-2 border-2 border-gray-600 rounded-xl shadow-2xl">
              <div className="w-48 h-48 rounded-full border-4 border-white p-10 hover:border-orange-600 hover:scale-105 duration-300 overflow-hidden flex justify-center items-center">
                <img className="w-full h-full object-cover" src="/queso.webp" alt="Queso" />
              </div>
              <div className="flex flex-col justify-center items-center text-center p-2 rounded-lg  bg-white text-black group-hover:bg-orange-500 duration-300 group-hover:text-white">
                <span className='text-md font-semibold'>Queso</span>
                <p>El queso restablece por completo la vida de Chubbie, curandola.</p>
              </div>
            </div>
          </div>


        </motion.section>

      </section>



      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id='trailer'>
        <h1 className='text-[3.5rem] font-bold text-center mt-10 mb-5 text-white'>Trailer Oficial</h1>
        <VideoPlayer />
      </motion.section>
      <section id='recursos'>
        <Carrousel />
      </section>

      <footer id='footer'>
        <Footer />
      </footer>

    </div>
  )
}

export default App
