import React, { Component } from "react";
import { Form, Segment } from 'semantic-ui-react';

export default class ReviewForm extends Component {

    state = {
        comment: ''
    }

    handleFormOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
          });
    }

    handleAddReview = (e) => {
        e.preventDefault()
        console.log(this.props.user)
        fetch('http://localhost:3000/reviews', {
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({comment: this.state.comment, user_id: this.props.user.id, movie_id: this.props.movie.id})
        })
        .then(res => res.json())
        .then(reviewObj => this.props.addNewReview(reviewObj))
      }


  render() {
    return (
      <div>
        <Segment className={"form-container"}>
          <Form onSubmit={this.handleAddReview}>
            <Form.TextArea
              required
              onChange={this.handleFormOnChange}
              label="Review"
              name="comment"
              placeholder="Write your review here..."
            />
            <Form.Group inline>
              <Form.Button positive>Submit</Form.Button>
              <Form.Button negative onClick={this.props.cancelReview}>
                Cancel
              </Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}
