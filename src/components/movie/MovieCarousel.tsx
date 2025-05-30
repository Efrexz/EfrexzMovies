import { useRef } from 'react';
import MovieCard from './MovieCard';
import { Movie } from '@models/movie';
import ArrowLeft from '@assets/icons/arrowLeft.svg?react';
import ArrowRight from '@assets/icons/arrowRight.svg?react';

type MovieCarouselProps = {
  title: string;
  movies: Movie[];
};

function MovieCarousel({ title, movies }: MovieCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const { current } = carouselRef;
    const scrollAmount = current.clientWidth * 0.75;
    
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-8">
      <header className="mb-4 pl-4 md:pl-8">
        <h2  className="text-2xl font-bold">{title}</h2>
      </header>
      
      <div className="relative group">
        {/* boton de scroll izquierda */}
        <button 
          type='button'
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-1 bg-black/70 hover:bg-black/90 rounded-r-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:p-2"
          aria-label="Scroll left"
        >
          <ArrowLeft className="w-6 h-6" aria-hidden="true"/>
        </button>
        
        {/* Carousel de peliculas */}
        <div 
          ref={carouselRef}
          className="flex space-x-4 overflow-x-auto pb-4 pl-4 md:pl-8 pr-4 md:pr-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map(movie => (
            <div key={movie.id} className="flex-none w-[160px] md:w-[200px]">
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
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-1 bg-black/70 hover:bg-black/90 rounded-l-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:p-2"
          aria-label="Scroll right"
        >
          <ArrowRight className="w-6 h-6" aria-hidden="true"/>
        </button>
      </div>
    </section>
  );
};

export default MovieCarousel;