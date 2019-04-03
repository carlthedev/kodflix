import React, { Component } from 'react';
import breakingbad from './images/bb-cover.jpg'
import gameofthrones from './images/got-cover.jpg'
import bettercallsaul from './images/bcs-cover.jpg'
import walkingdead from './images/wd-cover.jpg'
import prisonbreak from './images/pd-cover.jpg'
import gotham from './images/g-poster.jpg'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <br /><br /><br />
        <div className='container'>
          <div className='item'>
            <img src={breakingbad} alt='breaking bad cover' />
          </div>
          <div className='item'>
            <img src={gameofthrones} alt='game of thrones cover' />
          </div>
          <div className='item'>
            <img src={bettercallsaul} alt='better call saul cover' />
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={walkingdead} alt='walking dead cover' />
          </div>
          <div className='item'>
            <img src={prisonbreak} alt='prison break cover' />
          </div>
          <div className='item'>
            <img src={gotham} alt='gotham cover' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
