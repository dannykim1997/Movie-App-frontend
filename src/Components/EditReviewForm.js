import React, { Component } from "react";
import { Form, Segment } from 'semantic-ui-react';

export default class EditReviewForm extends Component {
    state = {
        comment: ''
    }

    handleEditFormOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
          });
    }
    
  render() {
    return (
      <div>
        <Segment className={"form-container"}>
          <Form onSubmit={(e) => this.props.handleEdit(e, this.props.review, this.state.comment)}>
            <Form.TextArea
              required
              onChange={this.handleEditFormOnChange}
              label="Review"
              name="comment"
              placeholder="Write your review here..."
            />
            <Form.Group inline>
              <Form.Button positive>Submit</Form.Button>
              <Form.Button negative onClick={this.props.cancelEditReview}>
                Cancel
              </Form.Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}
