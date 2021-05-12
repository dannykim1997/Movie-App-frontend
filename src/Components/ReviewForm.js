import React from 'react'

export default function ReviewForm(props) {
    return (
        <div>
            <Segment className={"form-container"}>
        <Form onSubmit={this.handleSubmit}>
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
        </div>
    )
}
