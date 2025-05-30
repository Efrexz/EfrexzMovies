export type Movie = {
  id: string;
  title: string;
  overview: string;
  releaseYear: number;
  genres: string[];
  director: string;
  cast: string[];
  runtime: number;
  rating: number;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
};


// Base de datos de peliculas de prueba
export const movies: Movie[] = [
  {
    id: "1",
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
    genres: ["Science Fiction", "Adventure", "Drama"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    runtime: 169,
    rating: 8.6,
    posterUrl: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    genres: ["Drama", "Crime"],
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    runtime: 142,
    rating: 9.3,
    posterUrl: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/6hB3S9bIaco"
  },
  {
    id: "3",
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    runtime: 152,
    rating: 9.0,
    posterUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/213861/pexels-photo-213861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: "4",
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
    genres: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    runtime: 154,
    rating: 8.9,
    posterUrl: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/3692779/pexels-photo-3692779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY"
  },
  {
    id: "5",
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseYear: 2010,
    genres: ["Action", "Science Fiction", "Adventure"],
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    runtime: 148,
    rating: 8.8,
    posterUrl: "https://images.pexels.com/photos/1557183/pexels-photo-1557183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: "6",
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: 1999,
    genres: ["Action", "Science Fiction"],
    director: "Lana Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    runtime: 136,
    rating: 8.7,
    posterUrl: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },
  {
    id: "7",
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    runtime: 142,
    rating: 8.8,
    posterUrl: "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/bLvqoHBptjg"
  },
  {
    id: "8",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    releaseYear: 2001,
    genres: ["Adventure", "Fantasy", "Action"],
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    runtime: 178,
    rating: 8.8,
    posterUrl: "https://images.pexels.com/photos/6447217/pexels-photo-6447217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1666882/pexels-photo-1666882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/V75dMMIW2B4"
  },
  {
    id: "9",
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
    genres: ["Crime", "Drama"],
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan"],
    runtime: 175,
    rating: 9.2,
    posterUrl: "https://images.pexels.com/photos/713959/pexels-photo-713959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/sY1S34973zA"
  },
  {
    id: "10",
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    releaseYear: 1999,
    genres: ["Drama"],
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
    runtime: 139,
    rating: 8.8,
    posterUrl: "https://images.pexels.com/photos/2682877/pexels-photo-2682877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/SUXWAEX2jlg"
  },
  {
    id: "11",
    title: "Avatar",
    overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    releaseYear: 2009,
    genres: ["Action", "Adventure", "Fantasy"],
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    runtime: 162,
    rating: 7.8,
    posterUrl: "https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    id: "12",
    title: "Gladiator",
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    releaseYear: 2000,
    genres: ["Action", "Adventure", "Drama"],
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
    runtime: 155,
    rating: 8.5,
    posterUrl: "https://images.pexels.com/photos/2191456/pexels-photo-2191456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    backdropUrl: "https://images.pexels.com/photos/6174582/pexels-photo-6174582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    trailerUrl: "https://www.youtube.com/embed/owK1qxDselE"
  }
];

export function getPopularMovies(): Movie[] {
  return [...movies].sort((a, b) => b.rating - a.rating).slice(0, 12);
};
