import React from 'react';
import LOGO from "../images/logo.png"
import USER from "../images/icons/user.png"
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/Auth';

function NavBar() {
    const location = useLocation();

    const [showUserMenu, setShowUserMenu] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);

    const { logout } = useAuth();

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 sm:h-24 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setShowMenu(!showMenu)}>
                            {showMenu ?
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            :
                            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            }     
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-11" src={LOGO} alt="LISTO"/>
                        </div>
                        <div className="hidden sm:ml-6 sm:block sm:ml-16">
                            <div className="flex space-x-4">
                                <a href="/" className={`${location.pathname === "/" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} rounded-md px-3 py-2 text-lg font-medium`}>Accueil</a>
                                <a href="/listes" className={`${location.pathname === "/listes" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} rounded-md px-3 py-2 text-lg font-medium`}>Mes Listes</a>
                                <a href="/liste/new" className={`${location.pathname === "/liste/new" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} rounded-md px-3 py-2 text-lg font-medium`}>Nouvelle Liste</a>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <div className="relative ml-3">
                            <div>
                                <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => setShowUserMenu(!showUserMenu)}>
                                    <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full" src={USER} alt="profil"/>
                                </button>
                            </div>
                            {showUserMenu &&
                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                <a href="/profil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" id="user-menu-item-0">Votre Profile</a>
                                <button className="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full" role="menuitem" id="user-menu-item-2" onClick={() => logout()}>Déconnexion</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
      
            {/* Mobile menu */
            !showMenu &&
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="/" className={`${location.pathname === "/" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block rounded-md px-3 py-2 text-base font-medium`}>Accueil</a>
                        <a href="/listes" className={`${location.pathname === "/listes" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block rounded-md px-3 py-2 text-base font-medium`}>Mes Listes</a>
                        <a href="/liste/new" className={`${location.pathname === "/liste/new" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} block rounded-md px-3 py-2 text-base font-medium`}>Nouvelle Liste</a>
                    </div>
                </div>}
      </nav>      
    );
  }
  
  export default NavBar;