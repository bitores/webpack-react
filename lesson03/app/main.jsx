import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorldComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (<div>Hello ES6</div>);
  }
}

ReactDOM.render(
  <HelloWorldComponent />,
  document.getElementById('content')
);