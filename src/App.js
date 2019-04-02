import React, { Component } from 'react';
import crashposter from './crash-poster.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Kodflix!</h1>
        <img src={crashposter} alt='Crash Poster' />
      </div>
    );
  }
}

export default App;
