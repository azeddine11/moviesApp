import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css'
import Slider from './components/Slider';
import MovieDescription from './components/MovieDescription';
import Footer from './components/Footer';


// Define initialMovies array using localStorage or a default value
const initialMovies = JSON.parse(localStorage.getItem('movies')) || [
  {
    id: 1,
    title: 'The Wolf of Wall Street',
    description: 'The Wolf of Wall Street is a memoir by former stockbroker and trader Jordan Belfort, from poverty to the wealth',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg',
    rating:5,
    link:'https://ww7.soap2dayhd.co/film/the-wolf-of-wall-street-2777/',
    trailerLink: 'https://www.youtube.com/embed/iszwuX1AK6A'
  },
  {
    id: 2,
    title: 'The Godfather',
    description: 'The Godfather II .In this second season there will have two stories, two character lines, two different parallel time lines.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    rating:4.5,
    link:'https://ww7.soap2dayhd.co/film/the-godfather-part-ii-2076/',
    trailerLink: 'https://www.youtube.com/embed/UaVTIH8mujA'

  },

  {
    id: 3,
    title: 'The Dark Knight',
    description: 'The film promises to bring viewers many action situations revolving around the last fight of Batman',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg',
    rating:4.5,
    link:'https://ww7.soap2dayhd.co/film/batman-the-dark-knight-rises-8430/',
    trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY'

  },
  {
    id: 4,
    title: 'The Lord of the Rings',
    description: 'The final battle for Middle-earth begins. Frodo and Sam, led by Gollum, continue their dangerous mission toward the fires of Mount .',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    rating: 4,
    link:'https://ww7.soap2dayhd.co/film/the-lord-of-the-rings-the-return-of-the-king-1874/',
    trailerLink: 'https://www.youtube.com/embed/7lwJOxN_gXc',

  },
  {
    id: 5,
    title: 'Inception',
    description: 'The movie tells about Dom Cobb. He is not an ordinary thief. He is masterly on stolen, can penetrate into the unconscious of any person ',
    posterURL: 'https://resizing.flixster.com/8X8J8sNXmCWDBaxo3vueONLRj00=/206x305/v2/https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg',
    rating: 5,
    link:'https://ww7.soap2dayhd.co/film/inception-2756/',
    trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'

  },
  {
    id: 6,
    title: 'Forrest Gump',
    description: 'Forrest Gump is set in the war in Vietnam, boy Forrest Gump was born and grew up not normally like any other children.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
    rating: 4,
    link:'https://ww7.soap2dayhd.co/film/forrest-gump-8783/',
    trailerLink: 'https://www.youtube.com/embed/bLvqoHBptjg'

  },

  {
    id: 7,
    title: 'The Matrix',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role .',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg',
    rating: 4,
    link:'https://ww7.soap2dayhd.co/film/the-matrix-1967/',
    trailerLink: 'https://www.youtube.com/embed/vKQi3bBA1y8'

  },
  {
    id: 8,
    title: 'The Silence',
    description: 'A young F.B.I. cadet must confide in an incarcerated and manipulative killer.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg',
    rating: 3.5,
    link:'https://ww7.soap2dayhd.co/film/the-silence-of-the-lambs-10213/',
    trailerLink: 'https://www.youtube.com/embed/RuX2MQeb8UM'

  },
  {
    id: 9,
    title: 'Focus',
    description: 'Focus (Also Known As: Fokus ) is a Comedy, Crime, Drama film directed by John Requa and written by Glenn Ficarra.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/b/bf/2015_Focus_film_poster.png',
    rating: 4.5,
    link:'https://ww7.soap2dayhd.co/film/focus-2481/',
    trailerLink: 'https://www.youtube.com/embed/MxCRgtdAuBo'

  },
  {
    id: 10,
    title: 'John Wick',
    description: 'With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table.',
    posterURL: 'http://www.iralcine.com/img-peliculas/pelicula-john-wick-4.jpg',
    rating: 4.5,
    link:'https://ww7.soap2dayhd.co/film/john-wick-chapter-4-1630854998/',
    trailerLink: 'https://www.youtube.com/embed/qEVUtrk8_B4'

  },
  {
    id: 11,
    title: 'Boston Strangler',
    description: 'Reporters Loretta McLaughlin and Jean Cole bravely pursue the story of the Boston Strangler at great personal risk',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BN2FmYmM1ODctNjkzNC00MzcyLTkyOWYtZmZjNjY2ZmU3MmI3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
    rating: 3.5,
    link:'https://ww7.soap2dayhd.co/film/boston-strangler-1630854982/',
    trailerLink: 'https://www.youtube.com/embed/N_yfmHCkSB0'

  },
  {
    id: 12,
    title: 'Operation Fortune: Ruse de guerre',
    description: 'Five Eyes, the international intelligence agency, recruits MI6 agent Orson Fortune to prevent the sale of a deadly new weapons.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BNjcxOTJhZTEtMWFiYi00NTkwLTlkMzktZDQwMGQ0ZjM3YWU2XkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg',
    rating: 4,
    link:'https://ww7.soap2dayhd.co/film/operation-fortune-ruse-de-guerre-1630854685/',
    trailerLink: 'https://www.youtube.com/embed/W8Sqk1GcqxY'

  },
];

// console.log(initialMovies)


function App() {
// Define states for movies array, title filter, rating filter, and a new movie object
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null);
  const [newMovie, setNewMovie] = useState({
    id: initialMovies.length + 1,
    title: '',
    description: '',
    posterURL: '',
    link:'',
    trailerLink:'',
    rating: null,
  });

// Filter movies based on title and rating filters
  const filteredMovies = movies.filter((movie) => {
    // Filter by title
    if (titleFilter && !movie.title.toLowerCase().includes(titleFilter.toLowerCase())) {
      return false;
    }
    // Filter by rating
    if (ratingFilter && movie.rating !== ratingFilter) {
      return false;
    }
    return true;
  });

// Handlers for title and rating filter changes
  const handleTitleFilterChange = (value) => {
    setTitleFilter(value);
  };

  const handleRatingFilterChange = (value) => {
    setRatingFilter(value);
  };

// Handler for new movie form changes  
  const handleNewMovieChange = (event) => {
    const { id, value } = event.target;
    setNewMovie({ ...newMovie, [id]: value });
  };

// Handler for adding a new movie  
  const handleAddMovie = () => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setNewMovie({
      id: updatedMovies.length + 1,
      title: '',
      description: '',
      posterURL: '',
      link:'',
      trailerLink:'',
      rating: null,
    });
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
  };
return (
  <div>
 
  {/* Render component with Navbar, Slider, Filter, MovieList  */}
    <Navbar />
    <Slider />
    <Filter
      titleFilter={titleFilter}
      onTitleFilterChange={handleTitleFilterChange}
      ratingFilter={ratingFilter}
      onRatingFilterChange={handleRatingFilterChange}
    />
    <MovieList movies={filteredMovies} />


  {/* THE FORM : for adding a new movie */}
    <form id='Addnew'>
      <h2 className='form_title'>Add a new movie</h2>

      <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={newMovie.title}
          onChange={handleNewMovieChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={newMovie.description}
          onChange={handleNewMovieChange}
        ></textarea>

        <label htmlFor="posterURL">Poster URL</label>
        <input
          type="text"
          id="posterURL"
          value={newMovie.posterURL}
          onChange={handleNewMovieChange}
        />

       <label htmlFor="Link">Link</label>
        <input
          type="text"
          id="link"
          value={newMovie.link}
          onChange={handleNewMovieChange}
        />

       <label htmlFor="trailerLink">trailerLink</label>
        <input
          type="text"
          id="trailerLink"
          value={newMovie.trailerLink}
          onChange={handleNewMovieChange}
        />
      

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          min={1}
          max={5}
          value={newMovie.rating}
          onChange={handleNewMovieChange}
        />

        <button type="button" onClick={handleAddMovie}>
          Add Movie
        </button>
    </form>

<hr></hr>
    <Footer />

  </div>
);

}


export default App;
