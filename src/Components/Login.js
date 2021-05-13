import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { withRouter } from "react-router";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = () => {
    fetch('http://localhost:3000/login',{
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({ user: {...this.state} })
    }).then(res => res.json())
    .then(userObj => {
      if(userObj){
        // localStorage.setItem('token',tokenObj.token)
        console.log(userObj)
        this.props.handleLogin(userObj.data.attributes)
        this.props.history.push('/movies')
      }else{
        alert('Login failed..')
      }
    })

  }
  render() {
    return (
      <Segment className="form-container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input
              name="username"
              placeholder="Username"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleInputChange}
            />
          </Form.Field>

          <Button type="submit" positive>
            Login
          </Button>

        </Form>
      </Segment>
    );
  }
}

export default withRouter(Login);
