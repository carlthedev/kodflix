import React, { Component } from 'react';
import Tvshow from './Tvshow'
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
          <Tvshow name='Breaking bad' cover={breakingbad} />
          <Tvshow name='Game Of Thrones' cover={gameofthrones} />
          <Tvshow name='Better call saul' cover={bettercallsaul} />
        </div>
        <div className='container'>
          <Tvshow name='Walking Dead' cover={walkingdead} />
          <Tvshow name='Prison Break' cover={prisonbreak} />
          <Tvshow name='Gotham' cover={gotham} />
        </div>
      </div>
    );
  }
}

export default App;
