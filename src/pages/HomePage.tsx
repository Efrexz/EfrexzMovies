import FeaturedMovie from "@components/movie/FeaturedMovie";
import MovieCarousel from "@components/movie/MovieCarousel";
import { getPopularMovies } from "@models/movie";

function HomePage  ()  {
  const popularMovies = getPopularMovies();
  return (
    <div className="pt-0">
      {/* Hero Section y peliculas destacadas */}
      <FeaturedMovie />

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <MovieCarousel title="Popular Movies" movies={popularMovies} />
      </div>
    </div>
  );
};

export default HomePage;