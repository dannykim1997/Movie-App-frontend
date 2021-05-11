import React from 'react';

class Profile extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/reviews',{
      method: 'GET',
      headers: {
        'token': this.props.token
      }
    }).then(res => res.json())
    .then(console.log)
  }

  render(){
    return (
      <>
        Profile Page
      </>
    )
  }
}

export default Profile;