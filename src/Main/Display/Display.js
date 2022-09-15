import React from 'react';
import './Display.css';

export default function Display({ head }) {
  return (
    <div className='display'>
      <img src={`${process.env.PUBLIC_URL}/pictures/${head}.jpg`}></img>
    </div>
  );
}
