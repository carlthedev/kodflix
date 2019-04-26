import React, { Component } from 'react';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Details/Details.js';
import NotFound from './NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/not-found' component={NotFound} />
          <Route exact path='/:tvshowId' component={Details} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
