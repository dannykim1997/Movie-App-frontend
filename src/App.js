import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MovieContainer from "./Container/MovieContainer";
// import ReviewContainer from "./Container/ReviewContainer"

import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  state = {
    logged_in: false,
    token: null,
    movies: [],
  };

  handleLogin = (token) => {
    this.setState({ logged_in: true, token });
  };

  getMovies = () => {
    fetch("http://localhost:3000/movies")
      .then((r) => r.json())
      .then((json) => {
        // console.log(data.results)
        this.setState({ movies: json.data });
      });

    const authToken = localStorage.getItem("token");
    if (authToken) {
      this.setState({ logged_in: true, token: authToken });
    }
  };

  componentDidMount = () => {
    this.getMovies();
    // this.getReviews()
  };

  render() {
    return (
      <div className="App">
        {/* <MovieContainer movies={this.state.movies} /> */}
        {/* //   <ReviewContainer reviews={this.state.reviews} /> */}

        <Router>
          <Nav logged_in={this.state.logged_in} />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route
              exact
              path="/movies"
              component={() => <MovieContainer movies={this.state.movies} />}
            />

            <Route
              path="/profile"
              component={() => {
                return this.state.logged_in ? (
                  <Profile {...this.state} />
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
                this.setState({ logged_in: false, token: null });
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