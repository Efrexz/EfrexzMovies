import { useRef } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '@models/movie';
import ArrowLeft from '@assets/icons/arrowLeft.svg?react';
import ArrowRight from '@assets/icons/arrowRight.svg?react';

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
};

function MovieCarousel({ title, movies }: MovieCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 'left' | 'right') {
        if (!carouselRef.current) return;
        const { clientWidth } = carouselRef.current;
        const distance = clientWidth * 0.75;
        if (direction === 'left') {
            carouselRef.current.scrollBy({left: -distance,behavior: 'smooth'});
        } else {
            carouselRef.current.scrollBy({ left: distance, behavior: 'smooth'});
        }
    };

  const buttonBaseClass = "absolute top-1/2 transform -translate-y-1/2 z-20 p-1 md:p-2 bg-black/70 hover:bg-black/90 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300";

  return (
    <section className="mb-8">
      <header className="mb-4 pl-4 md:pl-8">
        <h2  className="text-2xl font-bold">{title}</h2>
      </header>
      
      <div className="relative group">
        {/* boton de scroll izquierdo */}
        <button 
          type='button'
          onClick={() => scroll('left')} 
          className={`${buttonBaseClass} left-0 rounded-r-md`}
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-6 h-6" aria-hidden="true"/>
        </button>
        
        {/* Carousel de peliculas */}
        <div 
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto pb-4 pl-4 md:pl-8 pr-4 md:pr-8 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map(movie => (
            <div key={movie.id} className="flex-none w-[160px] md:w-[200px] snap-center">
              <MovieCard 
                movie={movie} 
                // isFavorite={checkFavorite(movie.id)}
                // onToggleFavorite={handleToggleFavorite}
              />
            </div>
          ))}
        </div>
        
        {/* boton de scroll derecha */}
        <button
          type='button'
          onClick={() => scroll('right')}
          className={`${buttonBaseClass} right-0 rounded-l-md`}
          aria-label="Scroll right"
        >
          <ArrowRight className="w-6 h-6" aria-hidden="true"/>
        </button>
      </div>
    </section>
  );
};

export default MovieCarousel;