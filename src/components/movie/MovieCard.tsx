import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '@models/movie';
import StarIcon from "@assets/icons/star.svg?react";

type MovieCardProps = {
  movie: Movie;
  isFavorite?: boolean;
};


function MovieCard ({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <article 
      className="relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:z-10 shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Poster de pelicula */}
      <figure className="aspect-[2/3] relative">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = 'https://www.ucm.es/icae/file/no-image-available/?ver';
          }}
        />
        
        {/* Descripcion */}
        <figcaption className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}>
          <header className="mb-2">
            <h3 className="font-bold text-lg text-white leading-tight mb-1">{movie.title}</h3>
            <time
              className="text-gray-300 text-sm block"
              dateTime={movie.releaseYear?.toString()}
            >
              {movie.releaseYear}
            </time>
          </header>
          
          <div
          className="flex items-center space-x-2"
          aria-label='Movie rating'
          >
            <StarIcon className="w-4 h-4 text-yellow-400" aria-hidden="true" />
            <span className="text-white text-sm font-medium">{movie.rating.toFixed(1)}</span>
          </div>
        </figcaption>
      </figure>
    </article>
  );
};

export default MovieCard;