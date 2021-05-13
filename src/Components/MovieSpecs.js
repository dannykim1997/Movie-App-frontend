import React from "react";
import ReviewForm from "./ReviewForm";

const MovieSpecs = (props) => {
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="eight wide column">
            <img
              alt="oh no!"
              className="ui large rectangular image bordered"
              src={props.movie.attributes.image}
            />
          </div>
          <div className="four wide column">
            <h2>{props.movie.attributes.title}</h2>
            <p>
              <strong>Genre: {props.movie.genre}</strong>
              <br />
              <br />
              <strong>Overview: </strong>
              {props.movie.attributes.overview}
              <br />
            </p>
            <div>
              <strong>Reviews</strong>
              {props.movie.attributes.reviews.map((review) => (
                <li key={review.id}>{review.comment}</li>
              ))}
              <br />
              {props.newReview ? (
                <ReviewForm
                  handleSubmit={props.handleSubmit}
                  cancelReview={props.cancelReview}
                />
              ) : null}
              <br />
              {!props.newReview ? (
                <button
                  className="ui button fluid"
                  onClick={() => props.addReview()}
                >
                  Leave a review
                </button>
              ) : null}
            </div>
            <br />
            <button className="ui button fluid" onClick={() => props.goBack()}>
              Go Back to Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSpecs;
