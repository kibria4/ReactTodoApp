// var React = require('react');
// var ReactDOM = require('react-dom');
// var { Route, Router, IndexRoute, hashHistory } = require('react-router');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

//Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
