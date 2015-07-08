import React from 'react';

class Repos extends React.Component {
  render() {
    return (
      <div>
        Username: {this.props.username} <br/>
        Repos: {this.props.repos}
      </div>
    )
  }
};

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;