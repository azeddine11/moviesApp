import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function MovieDescription() { 
  const location = useLocation(); // location variable used useLocation hook to get current URL location
  const { title, description, trailerLink} = location.state; // destructuring the state object received from the previous component

  return (
    <div className="movie-description">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <iframe width="560" height="315" src={trailerLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Link className="back-btn" to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDescription;
