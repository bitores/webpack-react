var React = require('react');
var ReactDOM = require('react-dom');

import {Router,IndexRoute,Route,hashHistory} from 'react-router';

import App from './components/App.jsx';
import About from './components/About.jsx';
import Inbox from './components/Inbox.jsx';
import Message from './components/Message.jsx';
import Dashboard from './components/Dashboard.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/* 当 url 为/时渲染 Dashboard */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('content'));
