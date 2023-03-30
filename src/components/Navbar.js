import React from 'react';
import Movies from './Movielogoaz.png'
// import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import MovieDescription from './MovieDescription';

function Navbar() {
  return (

    <div>
    <nav className="navbar">
      <img
        className="navbar__logo"
        src={Movies}
        alt="Netflix Logo"
      />

      <ul className="navbar__links" style={{flexWrap:"wrap"}}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#List">Movies List</a>
        </li>
        <li>
          <a href="#Addnew">Add Movie</a>
        </li>
      </ul>
    </nav>
    </div>
    
  );
}

export default Navbar;
