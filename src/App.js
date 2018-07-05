import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList.js';
import Search from './search.js';


class App extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      movies: [
          {title: 'Mean Girls'},
          {title: 'Hackers'},
          {title: 'The Grey'},
          {title: 'Sunshine'},
          {title: 'Ex Machina'},
        ],
        display: undefined
    }
  }
  
  searchMovie(input) {
    var searchedMovies = [];
    //console.log(input)
    this.state.movies.forEach(function(movie){
      //console.log(input)
      if(movie.title.toLowerCase().includes(input.toLowerCase())) {
        searchedMovies.push(movie);
      }
    })
    //console.log(searchedMovies)
  
    this.setState({display:searchedMovies});
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie List</h1>
        </header>
          <Search display = {this.state.display} searchMovie={this.searchMovie.bind(this)}/>
        <div>
          <MovieList movies={this.state.display || this.state.movies}/>
        </div>
      </div>
    );
  }
}

export default App;
