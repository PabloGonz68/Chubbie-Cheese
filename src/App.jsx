import React from 'react'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gray-800 '>
      <Header />
      <img src="/portada.jpg" alt="Portada Chubbie Cheddar" />
      <section class="flex flex-col md:flex-row bg-gray-700 p-10 shadow-lg">
        <div class="flex flex-col w-full md:w-1/2 gap-5 justify-center items-center">
          <h1 class="text-4xl font-bold text-center mt-10 mb-5 text-white">
            ¡Bienvenido a Chubbie Cheddar!
          </h1>
          <h2 class="text-3xl font-bold text-center mt-10 mb-5 text-orange-600">
            Este es Chubbie
          </h2>
        </div>
        <div class="w-full md:w-1/2 flex justify-center items-center">
          <div class="w-96 h-96 rounded-full border-4 border-white p-10 hover:border-orange-600 hover:scale-105 duration-300 overflow-hidden flex justify-center items-center">
            <img class="w-full h-full object-cover" src="/raton.png" alt="Ratón" />
          </div>
        </div>
      </section>
      <VideoPlayer />
      <Footer />
    </div>
  )
}

export default App
