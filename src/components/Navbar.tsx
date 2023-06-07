import React from 'react';
import LOGO from "../images/icons/logoNav.png";
import AUCTION from "../images/icons/auction.png"
import USER from "../images/icons/user.png";
import SEARCH from "../images/icons/magnifier.png"
import SHOPBAG from "../images/icons/online-shopping.png"
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/Auth';

function NavBar() {
    const location = useLocation();

    const [showUserMenu, setShowUserMenu] = React.useState(false);
    const [showShopBagMenu, setShowShopBagMenu] = React.useState(false);

    const { logout } = useAuth();

    return (
        <nav className="bg-white">
            <div className="mx-auto pr-2 sm:pr-6 lg:pr-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/" className="flex flex-shrink-0">
                            <img className="block w-60" src={LOGO} alt="LISTO"/>
                        </a>
                        <div className="flex ml-16 items-center w-full">
                            <div className="flex space-x-4 w-full">
                                <a href="/enchères" className='px-3 py-2 mr-14'>
                                    <img className="block h-14" src={AUCTION} alt="AUCTION"/>
                                </a>
                                <div className='flex items-center w-5/12'>
                                    <div className='flex px-8 py-2 rounded-full w-full' style={{backgroundColor:'#EDEDED'}}>
                                        <input type="text" name="search" className='bg-transparent w-full' placeholder='Rechercher un livre'/>
                                        <img className="block h-7 ml-2 cursor-pointer" src={SEARCH} alt="SEARCH"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <div className="relative ml-3">
                            <div className='flex'>
                                <button type="button" className="flex text-sm mr-7" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => {(showShopBagMenu && !showUserMenu) && setShowShopBagMenu(false); setShowUserMenu(!showUserMenu);}}>
                                    <img className="h-12 w-12" src={USER} alt="profil"/>
                                </button>
                                <button type="button" className="flex text-sm" id="shopBag-menu-button" aria-expanded="false" aria-haspopup="true" onClick={() => {(!showShopBagMenu && showUserMenu) && setShowUserMenu(false); setShowShopBagMenu(!showShopBagMenu);}}>
                                    <img className="h-12 w-12" src={SHOPBAG} alt="shopBag"/>
                                </button>
                            </div>
                            {showUserMenu &&
                            <div className="absolute right-16 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                <a href="/profil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" id="user-menu-item-0">Votre Profile</a>
                                <button className="flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full" role="menuitem" id="user-menu-item-2" onClick={() => logout()}>Déconnexion</button>
                            </div>}
                            {showShopBagMenu &&
                            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                <h4 className='text-center text-xl font-medium'>Votre panier</h4>
                                <hr className=''/>
                                <div className='flex justify-center items-center' style={{minHeight:100}}>
                                    <p>vide</p>
                                </div>
                                <div className='flex justify-between px-2' style={{backgroundColor:'#D9D9D9'}}>
                                    <p>Total</p>
                                    <p>0.00 €</p>
                                </div>
                                <div className='mx-3 flex-col text-white'>
                                    <button className='rounded-lg w-full my-2 hover:opacity-90' style={{backgroundColor:'#33A3B2'}}>Finaliser l'achat</button>
                                    <button className='rounded-lg w-full mb-2 hover:opacity-90' style={{backgroundColor:'#33A3B2'}}>Afficher le panier</button>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>      
    );
  }
  
  export default NavBar;