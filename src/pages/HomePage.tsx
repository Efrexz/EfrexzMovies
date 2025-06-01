import FeaturedMovie from "@components/movie/FeaturedMovie";
import MovieCarousel from "@components/movie/MovieCarousel";
import { getPopularMovies, getRecommendedForYou } from "@models/movie";

function HomePage  ()  {
  const popularMovies = getPopularMovies();
  const recommendedForYou = getRecommendedForYou();
  return (
    <div className="pt-0">
      {/* Hero Section y peliculas destacadas */}
      <FeaturedMovie />
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <MovieCarousel title="Recommended For You" movies={recommendedForYou} />
        <MovieCarousel title="Popular Movies" movies={popularMovies} />
        <MovieCarousel title="Recently Added Movies" movies={recommendedForYou} />
      </div>
    </div>
  );
};

export default HomePage;