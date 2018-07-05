import React, { Component } from 'react';

var MovieList = (props) => {
  //console.log(props.movies)
  return (
  <div className = 'movieList'>
    {props.movies.map(movie => (<Movie movie = {movie}/>))}
  </div>
);
}



var Movie = (props) => {
  return (
     <div className = 'movie'> {props.movie.title} </div>
  )
}
export default MovieList;
