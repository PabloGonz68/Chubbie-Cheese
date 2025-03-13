import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-orange-600 text-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Contenedor principal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Sección de Información */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Chubbie Cheddar</h3>
                        <p className="text-sm">Chubbie Cheddar ofrece una experiencia única para compartir productos de calidad entre particulares. Con nosotros, puedes alquilar lo que necesites sin complicaciones.</p>
                    </div>

                    {/* Sección de Enlaces */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-gray-200">Inicio</a></li>
                            <li><a href="#" className="hover:text-gray-200">Sobre nosotros</a></li>
                            <li><a href="#" className="hover:text-gray-200">Servicios</a></li>
                            <li><a href="#" className="hover:text-gray-200">Contacto</a></li>
                            <li><a href="#" className="hover:text-gray-200">Blog</a></li>
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                        <p className="text-sm mb-2">¿Tienes alguna pregunta? Contáctanos:</p>
                        <p className="text-sm">Email: <a href="mailto:info@chubbiecheddar.com" className="hover:text-gray-200">info@chubbiecheddar.com</a></p>
                        <p className="text-sm">Teléfono: +123 456 789</p>
                    </div>

                    {/* Sección de Redes Sociales */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-gray-200">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Pie de página con los derechos de autor */}
                <div className="mt-12 text-center text-sm">
                    <p>© 2025 Chubbie Cheddar. Todos los derechos reservados.</p>
                    <div className="mt-4 text-sm space-x-4">
                        <a href="#" className="hover:text-gray-200">Política de privacidad</a>
                        <a href="#" className="hover:text-gray-200">Términos de uso</a>
                        <a href="#" className="hover:text-gray-200">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
