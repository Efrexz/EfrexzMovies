import { useState} from 'react';
import PlayIcon from '@assets/icons/play.svg?react';
import StarIcon from '@assets/icons/star.svg?react';
import ClockIcon from '@assets/icons/clock.svg?react';
import HeartIcon from '@assets/icons/heart.svg?react';


function FeaturedMovie (){
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    function handleToggleFavorite() {
        setIsFavorite((prev) => !prev);
    }


  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden" role="banner">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/Troya1.webp"
          alt="Imagen de pelicula"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Movie Info */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <article className="max-w-2xl">
            <header>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                El ataque del mollejuo
              </h1>

              <div className="flex items-center space-x-5 mb-5" aria-label="Movie Information">
                <div className="flex items-center gap-1" aria-label="Qualification">
                  <StarIcon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <span className="text-white font-medium">5.2</span>
                </div>

                <time className="text-gray-300" aria-label="Release Date" dateTime='2002'> 2002</time>

                <div className="flex items-center gap-2" aria-label="Duration">
                  <ClockIcon className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="text-gray-300">45 min</span>
                </div>
              </div>
            </header>
            

            <p className="text-gray-300 text-lg mb-8 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque voluptate ea dolores repellendus dolor libero, nostrum hic quidem quas itaque quasi distinctio illum vitae veritatis exercitationem dolorum! Cupiditate, excepturi! LORE</p>
            
            <nav className="flex flex-wrap gap-4">
              <button
                type='button'
                className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200 gap-2"
                aria-label="Watch the movie trailer"
              >
                <PlayIcon className="w-5 h-5" aria-hidden="true" />
                Watch Trailer
              </button>
              
              <button
                type='button'
                className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition duration-200 gap-2"
                aria-label="See more information about the movie"
              >
                More Info
              </button>
              
              {isAuthenticated && (
                <button
                  onClick={handleToggleFavorite}
                  className={`p-3 rounded-full ${
                    isFavorite ? 'bg-red-600' : 'bg-gray-800 hover:bg-gray-700'
                  } transition duration-200 text-white`}
                  aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                  <HeartIcon className='w-5 h-5' aria-hidden="true" />
                </button>
              )}
            </nav>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;