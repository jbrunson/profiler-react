import React from 'react';
// import { Router } from 'react-router';

class Profile extends React.Component {
  constructor(props) {  //set class state - props of the constructor
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    };
  }

  componentWillMount() {
    this.router = this.context.router;
  }

  render() {
    var username = this.router.getCurrentParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile Component ---> {username}
        </div>
        <div className="col-md-4">
          Repos Component
        </div>
        <div className="col-md-4">
          Notes Component
        </div>
      </div>
    )
  }
};

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
}


export default Profile;