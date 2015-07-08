import React from 'react';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        User Profile <br/>
        Username: {this.props.username} <br/>
        Bio: {this.props.bio}
      </div>
    )
  }
};

export default UserProfile;