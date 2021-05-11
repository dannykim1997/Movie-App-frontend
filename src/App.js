import React from 'react';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import MovieContainer from "./Container/MovieContainer";
import ReviewContainer from "./Container/ReviewContainer"

class App extends React.Component {

  state = {
    movies: [],
    reviews: []
  }

  //Backend Requests
  getMovies = () => {
    fetch("http://localhost:3000/movies")
    .then(r => r.json())
    .then(data => {
      this.setState({movies: data})
    })
  }

  getReviews = () => {
    fetch("http://localhost:3000/reviews")
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({reviews: data})
    })
  }

  componentDidMount = () => {
    this.getMovies()
    this.getReviews()
  }

  render() {
    return (
      <div>
      <MovieContainer movies={this.state.movies} />
      <ReviewContainer reviews={this.state.reviews} />
      </div>
    )
  }
}



export default App;
