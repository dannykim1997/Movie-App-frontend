import React from "react";
import Review from "../Components/Review.js";
import "semantic-ui-css/semantic.min.css";

class MyReviews extends React.Component {
  state = {
    comment: "",
    movie_id: null,
    reviews: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hi");
  // };

  // componentDidMount() {
  //   fetch("http://localhost:3000/reviews", {
  //     method: "GET",
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify({ user: {...this.state} })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }

  render() {
    console.log(this.props.token);
    return (
      <div className="ui bulleted list">
        <h2>My Reviews</h2>
        {this.props.reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            handleEdit={this.props.handleEdit}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default MyReviews;
