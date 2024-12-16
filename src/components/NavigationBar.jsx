import { useState } from "react";
import { Link } from "react-router-dom";

const urlPage = [
    {
        title: 'Inicio',
        link: '/'
    },
    {
        title: 'Canales',
        link: '/Channels'
    },
    {
        title: 'Sobre Nosotros',
        link: '/AboutUs'
    },
    {
        title: 'Paquetes',
        link: '/PricePlans'
    },
    {
        title: 'Contáctanos',
        link: '/ContactUs'
    }
];

export const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="back-color border-gray-200  dark:border-gray-700 p-4 rounded relative">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto">
                {/* Logo */}
                <Link to='/' className="flex items-center space-x-3">
                    <img src='https://i.ibb.co/hX516HS/tvent.png' className="h-20 text-white" alt="Tvnet Logo" />
                </Link>

                {/* Botón del menú móvil */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Menú de navegación para pantallas grandes */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 font-medium">
                        {urlPage.map(({ title, link }, index) => (
                            <li key={index}>
                                <Link to={link} className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400">
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Menú lateral (deslizable) para pantallas pequeñas */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 z-40 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menú</h2>
                    <button
                        onClick={closeMenu}
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg focus:outline-none"
                    >
                        <span className="sr-only">Close menu</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="p-4 space-y-4">
                    {urlPage.map(({ title, link }, index) => (
                        <li key={index}>
                            <Link to={link} className="block py-2 px-3 text-gray-900 dark:text-white hover:bg-blue-700 hover:text-white">
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Overlay oscuro cuando el menú esté abierto en pantallas pequeñas */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={closeMenu}
                ></div>
            )}
        </nav>
    );
};
