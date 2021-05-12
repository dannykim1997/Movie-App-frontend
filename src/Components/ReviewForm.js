import React from 'react'
import { Form, Segment } from 'semantic-ui-react';


export default function ReviewForm(props) {
    return (
        <div>
        <Segment className={"form-container"}>
        <Form onSubmit={props.handleSubmit}>
            <Form.TextArea label='Review' name="review" placeholder="Write your review here..."/>
            <Form.Group inline>
            <Form.Button positive>Submit</Form.Button>
            <Form.Button negative onClick={props.cancelReview}>Cancel</Form.Button>
            </Form.Group>
        </Form>
      </Segment>
        </div>
    )
}
