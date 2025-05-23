import { useState, useEffect } from 'react';
import FilmIcon from '@assets/icons/film.svg?react';
import SearchIcon from '@assets/icons/search.svg?react';
import UserIcon from '@assets/icons/user.svg?react';
import BurgerMenuIcon from "@assets/icons/burgerMenu.svg?react";
import XIcon from "@assets/icons/x.svg?react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    function handleScroll () {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsSearchOpen(false);
    }
  }

  function toggleSearch () {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 shadow-md' : 'bg-gradient-to-b from-black/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-1 text-white">
            <FilmIcon className="h-8 w-8 text-red-500" />
            <span className="font-bold text-xl hidden sm:inline-block">EfrexzMovies</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* SearchBar en desktop */}
            <form className="hidden md:flex items-center relative" role="search">
              <input 
                type="text" 
                placeholder="Search..." 
                className={`bg-black/50 border border-gray-700 text-white placeholder-gray-400 
                          rounded-full pl-9 pr-3 py-1 text-sm focus:outline-none focus:border-red-500 transition-all
                          ${isSearchOpen ? 'w-56 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
              />
              <SearchIcon
                className={`absolute left-3 w-4 h-4 ${isSearchOpen ? 'text-gray-400' : 'text-white'} cursor-pointer hover:scale-110 transition-transform duration-200`}
                onClick={toggleSearch}
              />
            </form>

            {/* searchIcon cuando estamos en mobile */}
            <button className="md:hidden text-white cursor-pointer " onClick={toggleSearch}>
              <SearchIcon className="w-5 h-5" />
            </button>

            <div className="relative flex items-center gap-3">
              <nav className="text-white hidden items-center space-x-4 md:flex" aria-label="Main navigation">
                <a className='hover:text-gray-200' href="#">Home</a>
                <a className='hover:text-gray-200' href="#">Browse</a>
              </nav>
                
              {isLogin ? (
              <div className="relative group">
                <button 
                  className="text-white flex items-center focus:outline-none"
                  aria-label="User menu"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-red-500 flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <UserIcon className="w-5 h-5" />
                  </div>
                </button>
              </div>
            ) : (
              <button 
                className="px-4 py-2 rounded-full bg-red-500 text-white font-medium text-sm hover:bg-red-600 hover:text-gray-200 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setIsLogin(!isLogin)}
              >
                Sign In
              </button>
            )}
            </div>

             
            
            <button 
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <BurgerMenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Barra de busqueda en mobile */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 px-2">
            <div className="relative">
              <input 
                type="text"
                placeholder="Search movies, shows..." 
                className="w-full bg-black/70 border border-gray-700 text-white py-2 pl-10 pr-4 rounded-md focus:outline-none focus:border-red-500"
              />
              <SearchIcon className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu desplegable*/}
      {isMobileMenuOpen && (
        <nav className="flex flex-col px-4 py-2" aria-label="Mobile navigation">
          <a href="#" className="text-gray-300 py-3 border-b border-gray-800">Home</a>
          <a href="#" className="text-gray-300 py-3 border-b border-gray-800">Browse</a>
        </nav>
      )}
    </header>
  );
};

export default Header;