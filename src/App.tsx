import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieForm from './components/MovieForm';
import DisplayMovies from './components/DisplayMovies';

function App() {
  return (
    <div className="App">
      
      <MovieForm/>
      <DisplayMovies/>
    </div>
  );
}

export default App;
