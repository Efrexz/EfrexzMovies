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
    <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/Troya1.webp"
          alt="Troya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Movie Info */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">El ataque del mollejuo</h1>
            
            <div className="flex items-center space-x-5 mb-5">
              <div className="flex items-center gap-1">
                <StarIcon className="w-5 h-5" />
                <span className="text-white">5.2</span>
              </div>
              <span className="text-gray-300">1965</span>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5 text-white" />
                <span className="text-gray-300">45 min</span>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque voluptate ea dolores repellendus dolor libero, nostrum hic quidem quas itaque quasi distinctio illum vitae veritatis exercitationem dolorum! Cupiditate, excepturi!</p>
            
            <div className="flex flex-wrap gap-4">
              <button
                className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition duration-200 gap-2"
              >
                <PlayIcon className="w-5 h-5" />
                Watch Trailer
              </button>
              
              <button
                className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition duration-200 gap-2"
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
                  <HeartIcon className='w-5 h-5' />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;