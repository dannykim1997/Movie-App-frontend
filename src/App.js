import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MovieContainer from "./Container/MovieContainer";
// import ReviewContainer from "./Container/ReviewContainer"

import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import MyReviews from "./Container/MyReviews";
// import MovieSpecs from "./Components/MovieSpecs";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  state = {
    logged_in: false,
    user: {},
    reviews: [],
    movies: [],
    currentMovie: {},
    view: false,
    newReview: false,
  };

  handleLogin = (user) => {
    this.setState({ logged_in: true, reviews: user.reviews });
  };

  getMovies = () => {
    fetch("http://localhost:3000/popularmovies")
      .then((r) => r.json())
      .then((json) => {
        this.setState({ movies: json.data });
      });
  };

  componentDidMount = () => {
    this.getMovies();

    // const authToken = localStorage.getItem("token");
    // if (authToken) {
    //   this.setState({ logged_in: true, token: authToken });
    // }
  };

  viewMovie = (e, movie) => {
    e.stopPropagation();
    this.setState({
      currentMovie: movie,
      view: true,
    });
  };

  goBack = () => {
    this.setState({
      currentMovie: {},
      view: false,
    });
  };

  addReview = () => {
    this.setState({
      newReview: !this.state.newReview,
    });
  };

  cancelReview = () => {
    this.setState({
      newReview: !this.state.newReview,
    });
  };


  handleEdit = (review) => {
    console.log(review.id)
  }

  handleDelete = (deleteReview) => {
    fetch('http://localhost:3000/reviews/' + deleteReview.id, {
      method: 'DELETE',
    })

    this.setState({reviews: this.state.reviews.filter(review=> review !== deleteReview)})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Nav logged_in={this.state.logged_in} />
          <Switch>
            <Route
              exact
              path="/movies"
              component={() => (
                <MovieContainer
                  movies={this.state.movies}
                  movieView={this.state.view}
                  view={this.viewMovie}
                  movie={this.state.currentMovie}
                  goBack={this.goBack}
                  newReview={this.state.newReview}
                  addReview={this.addReview}
                  cancelReview={this.cancelReview}
                />
              )}
            />

            {/* <Route>
              exact path="/movies/:id" 
              render={(routerProps) => {
                let movie = this.state.movies.find(
                  (movie) => Number(routerProps.match.params.id) === movie.id
                );
                return <MovieSpecs />;
              }}
            </Route> */}

            <Route
              path="/myreviews"
              component={() => {
                return this.state.logged_in ? (
                  <MyReviews reviews={this.state.reviews} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />

            <Route
              path="/login"
              component={() => <Login handleLogin={this.handleLogin} />}
            />

            <Route
              path="/signup"
              component={() => <Signup handleLogin={this.handleLogin} />}
            />

            <Route
              path="/logout"
              component={() => {
                localStorage.clear();
                this.setState({ logged_in: false, user_id: null });
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
