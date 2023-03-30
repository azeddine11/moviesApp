import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function MovieCard({ id, title, description, posterURL, rating, link , trailerLink}) {
// Define a function that handles clicking on a movie  
  const navigate = useNavigate();

// Define a function that handles clicking on a movie
  const handleMovieClick = (event) => {
    event.preventDefault();
    // Navigate to the movie's description page with its id, title, description, and trailerLink as state data
    navigate(`/description/${id}`, { state: { title, description, trailerLink } });
  };
  
  return (
    <div className='al'> 
      <div className="movie-card">
          <img src={posterURL} alt={`${title} poster`} />
          <div className="movie-info">
          <a href={link} > <FontAwesomeIcon icon={faCirclePlay} style={{color: "gray", height:"60px",display:"block", width: "100%", textAlign:"center"}} /> </a>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Rating: {rating} <FontAwesomeIcon icon={faStar}  style={{color: "yellow"}} /></p>
            <a  onClick={handleMovieClick} style={{borderRadius:"10px", backgroundColor:"red", padding:"8px", color:"white"}}> see trailer </a>
            
          </div>
      </div>
    </div>
  );
}

export default MovieCard;



