import React from 'react';

class Notes extends React.Component {
  render() {
    return (
      <div>
      Notes <br/>
      Username: {this.props.username} <br/>
      Notes: {this.props.notes}
      </div>
    )
  }
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired
};

export default Notes;