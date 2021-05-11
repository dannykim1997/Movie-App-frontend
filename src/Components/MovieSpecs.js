import React from "react";
// import Reviews from "../Components/Reviews";

const MovieSpecs = props => {
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
                <strong>
                Genre: {props.movie.genre}
                </strong>
                <br />
                <br />
                <strong>Overview: </strong>
                    {props.movie.attributes.overview}
                <br />
            </p>
            {/* <div> */}
            <strong>Reviews</strong>
            <li>
                {props.movie.attributes.reviews.map((review) => review.comment)}
            </li>
            {/* <button
              className="ui button fluid"
              onClick={() => props.createReview()}
            >
              Create Review
            </button>
            </div>
            <button
              className="ui button fluid"
              onClick={() => props.goBack()}
            >
              Go Back
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSpecs;
