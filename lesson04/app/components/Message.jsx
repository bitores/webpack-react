import React from 'react';

module.exports = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
});