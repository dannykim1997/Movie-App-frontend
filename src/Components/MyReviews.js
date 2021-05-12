import React from "react";
import { Form, Button, Segment } from "semantic-ui-react";

class MyReviews extends React.Component {
  state = {
    comment: "",
    movie_id: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = e => {
    e.preventDefault()
    console.log('hi')
  }

  

  componentDidMount() {
    fetch("http://localhost:3000/reviews", {
      method: "GET",
      headers: {
        token: this.props.token,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }




  render() {
    return (
      <Segment className={"form-container"}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <select required name="movie_id" onChange={this.handleChange}>
              <option value="">Choose Movie</option>
              {this.props.movies.map((movie) => {
                return (
                  <option key={movie.id} name="movie_id" value={movie.id}>
                    {movie.attributes.title}
                  </option>
                );
              })}
            </select>
          </Form.Field>
          <Form.Field>
            <label>
              Comment:
              <textarea
                onChange={this.handleChange}
                type="textarea"
                name="comment"
              />
            </label>
          </Form.Field>
          <Button type="submit" positive>
            Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default MyReviews;
