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
            <div className='overlay'>
              <h1>Breaking Bad</h1>
            </div>
          </div>
          <div className='item'>
            <img src={gameofthrones} alt='game of thrones cover' />
            <div className='overlay'>
              <h1>Game Of Thrones</h1>
            </div>
          </div>
          <div className='item'>
            <img src={bettercallsaul} alt='better call saul cover' />
            <div className='overlay'>
              <h1>Better Call Saul</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={walkingdead} alt='walking dead cover' />
            <div className='overlay'>
              <h1>Walking Dead</h1>
            </div>
          </div>
          <div className='item'>
            <img src={prisonbreak} alt='prison break cover' />
            <div className='overlay'>
              <h1>Prison Break</h1>
            </div>
          </div>
          <div className='item'>
            <img src={gotham} alt='gotham cover' />
            <div className='overlay'>
              <h1>Gotham</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
