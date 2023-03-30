import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MovieDescription from './components/MovieDescription';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/description/:id" element={<MovieDescription />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

