//2016 Paul Fooks

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components




//load foundation
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>React Boilerplate 3 Project</p>,
  document.getElementById('app')
);
