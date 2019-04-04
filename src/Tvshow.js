import React from 'react';

export default function Tvshow(props) {
    return (
      <div className='item'>
        <img src={props.cover} alt={`${props.name} Breaking bad cover`} />
        <div className='overlay'>
          <h1>{props.name}</h1>
        </div>
      </div>
    );
  }