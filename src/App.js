import React from 'react';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import MovieContainer from "./Container/MovieContainer";

class App extends React.Component {

  state = {
    movies: []
  }

  //Backend Requests
  getMovies = () => {
    fetch("http://localhost:3000/trendingmovies")
    .then(r => r.json())
    .then(data => {
      this.setState({movies: data.movies})
    })
  }

  componentDidMount = () => {
    this.getMovies()
  }

  render() {
    return (
      <div>
      <MovieContainer movies={this.state.movies} />
      </div>
    )
  }
}



export default App;
