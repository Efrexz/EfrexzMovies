import NavigationColumn from '@components/NavigationColumn';
import FilmIcon from '@assets/icons/film.svg?react';
import InstagramIcon from '@assets/icons/socialMediaIcons/instagram.svg?react';
import FacebookIcon from '@assets/icons/socialMediaIcons/facebook.svg?react';
import GitHubIcon from '@assets/icons/socialMediaIcons/github.svg?react';

function Footer () {

  const navigationLinkData = [
  { to: "/", label: "Home" },
  { to: "/browse", label: "Browse Movies" },
  { to: "/search", label: "Search" },
];

const accountLinkData = [
  { to: "/login", label: "Sign In" },
  { to: "/signup", label: "Sign Up" },
  { to: "/profile", label: "Profile" },
];

const legalLinkData = [
  { to: "#", label: "Terms of Service" },
  { to: "#", label: "Privacy Policy" },
  { to: "#", label: "Cookie Policy" },
];


  return (
    <footer className="bg-gray-950 text-gray-400 py-12 ">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <section className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <div >
                <div className="flex items-center space-x-2 justify-center md:justify-start">
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

          <NavigationColumn title="Navigation" links={navigationLinkData} />
          <NavigationColumn title="Account" links={accountLinkData} />
          <NavigationColumn title="Legal" links={legalLinkData} />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2025 EfrexzMovies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;