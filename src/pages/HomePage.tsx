import FeaturedMovie from "@components/movie/FeaturedMovie";

function HomePage  ()  {
  return (
    <div className="pt-0">
      {/* Hero Section y peliculas destacadas */}
      <FeaturedMovie />
    </div>
  );
};

export default HomePage;