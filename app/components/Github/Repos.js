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

export default Repos;