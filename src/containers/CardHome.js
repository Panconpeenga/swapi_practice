import React, { Component } from 'react';
import deathstar from './Death_Star_icon.png';

class CardHome extends Component {
  render() {
    return (
      <div className=''>
        <p className='f1'>Welcome! Click on a category above to get started!</p>
        <img className='h4 w4' src={deathstar} alt='death star' />
      </div>
    );
  }
}

export default CardHome;
