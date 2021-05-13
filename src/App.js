import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MovieContainer from "./Container/MovieContainer";
// import ReviewContainer from "./Container/ReviewContainer"

import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import MyReviews from "./Container/MyReviews";

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
    comment: "",
    movies: [],
    currentMovie: {},
    view: false,
    newReview: false,
    viewEdit: false,
    currentReview: {},
  };

  handleLogin = (user) => {
    this.setState({ logged_in: true, reviews: user.reviews, user: user });
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
    // const lol = localStorage.getItem('lmao')
    // if (lol) {
    //   this.setState({logged_in: true})
    // }

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

  // handleFormOnChange = (e) => {
  //   console.log(e.target.value)
  //   this.setState({
  //     comment: e.target.value,
  //   });
  // }

  addNewReview = (newReviewObj) => {
    console.log(newReviewObj.data.attributes);
    // this.setState({
    //   reviews: [...this.state.reviews, newReviewObj]
    // });
    this.setState((prevState)=> {
      const newReviews = [...prevState.reviews]
      newReviews.push(newReviewObj.data.attributes)
      return {reviews: newReviews}
    })
  };

  handleEditForm = (review) => {
    console.log(review.id);
    this.setState({
      currentReview: review,
      viewEdit: !this.state.viewEdit
    })
  };

  cancelEditReview = () => {
    this.setState({
      viewEdit: !this.state.viewEdit,
    });
  };

  handleEditOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleEdit = (e, review, editedComment) => {
    e.preventDefault();

    const updateReview = {
      comment: editedComment,
      user_id: review.user_id,
      movie_id: review.movie_id,
    };

    fetch(`http://localhost:3000/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then(res => res.json())
      .then(updatedReview => {
        console.log(updatedReview.data.attributes)
        this.setState({
          reviews: this.state.reviews.map(review => Number(review.id) === Number(updatedReview.data.attributes.id) ? updatedReview.data.attributes : review),
          viewEdit: !this.state.viewEdit,
        });
      });
  }

  handleDelete = (deleteReview) => {
    fetch("http://localhost:3000/reviews/" + deleteReview.id, {
      method: "DELETE",
    });

    this.setState({
      reviews: this.state.reviews.filter((review) => review !== deleteReview),
    });
  };

  render() {
    console.log(this.state.logged_in)
    return (
      <div className="App">
        <Router>
          <Nav logged_in={this.state.logged_in}/>
          <Switch>
            <Route
              exact
              path="/movies"
              component={() => (
                <MovieContainer
                  addNewReview={this.addNewReview}
                  user={this.state.user}
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
                  <MyReviews
                    reviews={this.state.reviews}
                    handleEditForm={this.handleEditForm}
                    handleDelete={this.handleDelete}
                    viewEdit={this.state.viewEdit}
                    cancelEditReview={this.cancelEditReview}
                    handleEdit={this.handleEdit}
                    review={this.state.currentReview}
                  />
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
                return <Redirect to="/login" />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
