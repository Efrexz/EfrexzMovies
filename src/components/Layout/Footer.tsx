import { Link } from 'react-router-dom';
import FilmIcon from '@assets/icons/film.svg?react';
import InstagramIcon from '@assets/icons/socialMediaIcons/instagram.svg?react';
import FacebookIcon from '@assets/icons/socialMediaIcons/facebook.svg?react';
import GitHubIcon from '@assets/icons/socialMediaIcons/github.svg?react';

function Footer () {

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 ">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <section className="space-y-4 flex flex-col items-center text-center sm:items-start sm:text-left">
            <div >
                <div className="flex items-center space-x-2 justify-center sm:justify-start">
                    <FilmIcon className="text-red-600 h-8 w-8" aria-hidden="true" />
                    <span className="text-xl font-bold text-white">EfrexzMovies</span>
                </div>
                <p className="text-sm mt-4">
                  Your ultimate destination for discovering and exploring movies.
                </p>
            </div>

            <div className='pt-2'>
                <h4 className="sr-only">Síguenos en redes sociales</h4>
                <ul className="flex space-x-4 items-center">
                    <li>
                        <a
                        href="#"
                        aria-label="Facebook"
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                        >
                            <FacebookIcon className='w-8 h-7' aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        aria-label="GitHub"
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                        >
                            <GitHubIcon className='w-9 h-9' aria-hidden="true" />
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        aria-label="Instagram"
                        className="text-gray-500 hover:text-gray-300 transition-colors"
                        >
                            <InstagramIcon className='w-8 h-8' aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
          </section>

          <nav className="space-y-4 text-center sm:text-left">
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="flex sm:block gap-6 space-y-2 justify-center">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/browse" className="hover:text-white transition-colors">Browse Movies</Link></li>
              <li><Link to="/search" className="hover:text-white transition-colors">Search</Link></li>
            </ul>
          </nav>

          <nav className="space-y-4 text-center sm:text-left">
            <h3 className="text-white font-medium mb-4">Account</h3>
            <ul className="flex sm:block gap-6 space-y-2 justify-center">
              <li><Link to="/login" className="hover:text-white transition-colors">Sign In</Link></li>
              <li><Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link></li>
              <li><Link to="/profile" className="hover:text-white transition-colors">Profile</Link></li>
            </ul>
          </nav>

          <nav className="space-y-4 text-center sm:text-left">
            <h3 className="text-white font-medium mb-4">Legal</h3>
            <ul className="flex sm:block gap-6 space-y-2 justify-center">
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 EfrexzMovies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;