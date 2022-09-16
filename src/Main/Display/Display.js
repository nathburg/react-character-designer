import React from 'react';
import './Display.css';

export default function Display({ head, torso, legs }) {
  return (
    <div className='display'>
      <img src={`${process.env.PUBLIC_URL}/pictures/${head}.jpg`}></img>
      <img src={`${process.env.PUBLIC_URL}/pictures/${torso}.jpg`}></img>
      <img src={`${process.env.PUBLIC_URL}/pictures/${legs}.jpg`}></img>

    </div>
  );
}
