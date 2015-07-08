import React from 'react';
import { Router } from 'react-router';
import Repos from './Github/Repos';
import  UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';

class Profile extends React.Component {
  constructor(props) {  //set class state - props of the constructor
    super(props);
    this.state = {
      notes: ['note1', 'note2'],
      bio: {name: "jeff"},
      repos: [1,2,3]
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
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
};

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
}


export default Profile;