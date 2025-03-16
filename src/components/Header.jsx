import React, { useState } from 'react';
import { motion } from "framer-motion";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 shadow-lg">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <a href="/" className="flex items-center">
                    <img src="/logo.webp" alt="Logo" className="h-20 w-auto" />
                </a>


                {/* Menú de navegación (desktop) */}
                <nav className="hidden md:flex space-x-6">
                    <motion.a
                        href="#personaje"
                        className="text-md font-bold text-white hover:text-orange-200 transition"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Personaje
                    </motion.a>;
                    <motion.a
                        href="#items"
                        className="text-md font-bold text-white hover:text-orange-200 transition"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Items
                    </motion.a>;
                    <motion.a
                        href="#trailer"
                        className="text-md font-bold text-white hover:text-orange-200 transition"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >Trailer</motion.a>
                    <motion.a
                        href="#recursos"
                        className="text-md font-bold text-white hover:text-orange-200 transition"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >Recursos</motion.a>
                    <motion.a
                        href="#footer"
                        className="text-md font-bold text-white hover:text-orange-200 transition"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >Contacto</motion.a>
                </nav>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} flex flex-col items-center bg-gray-800 text-white space-y-4 py-4`}>
                <a href="#personaje" className=" w-full flex justify-center  text-md font-bold text-white hover:bg-gray-700 transition">Personaje</a>
                <a href="#trailer" className="w-full flex justify-center text-md font-bold text-white hover:bg-gray-700 transition">Trailer</a>
                <a href="#footer" className="w-full flex justify-center text-md font-bold text-white hover:bg-gray-700 transition">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;
