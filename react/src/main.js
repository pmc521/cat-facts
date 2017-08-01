import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage ``';

$(function() {
  ReactDOM.render(
    <h1>HomePage</h1>,
    document.getElementById('app')
  );
});
