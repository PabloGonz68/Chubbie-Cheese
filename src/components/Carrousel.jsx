import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Solo importa el CSS principal


const Carousel = () => {
    return (
        <section id="destacados" className="py-10 text-center">
            <div className='flex flex-col items-center gap-4'>
                <h2 className="text-4xl font-bold text-white">Recursos Utilizados</h2>
                <p className='text-orange-600 text-sm'>&laquo; Desliza para ver los recursos &raquo; </p>

            </div>

            <div className="py-12">
                <div className="container mx-auto px-8 md:px-12 relative">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/raton.webp"
                                    alt="Raton"
                                    className="h-64 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Protagonista</h3>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg ">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/raton-dormido.webp"
                                    alt="Raton Dormido"
                                    className="w-full h-32 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Protagonista dormido</h3>
                            </div>

                        </SwiperSlide>



                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/logo.webp"
                                    alt="Logo"
                                    className="h-56 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Logo</h3>
                            </div>

                        </SwiperSlide>


                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/fondo.webp"
                                    alt="Fondo"
                                    className="h-64 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Fondo</h3>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/manzana.webp"
                                    alt="Manzana"
                                    className="h-64 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Manzana</h3>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/lima.webp"
                                    alt="Lima"
                                    className="h-64 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Lima</h3>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/queso.webp"
                                    alt="Queso"
                                    className="h-64 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Queso</h3>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className='flex flex-col items-center justify-center h-74'>
                                <img
                                    src="/tijeras.webp"
                                    alt="Tijeras"
                                    className="h-64 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4 text-white">Tijeras</h3>
                            </div>

                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default Carousel;
