import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MovieDescription from './components/MovieDescription';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/description/:id" element={<MovieDescription />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

