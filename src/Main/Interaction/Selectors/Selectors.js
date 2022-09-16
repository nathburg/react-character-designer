import React from 'react';
import { useState } from 'react';
import './Selectors.css';

export default function Selectors({ setHead, setTorso, setLegs }) {
  const [headCounter, setHeadCounter] = useState(0);
  const [torsoCounter, setTorsoCounter] = useState(0);
  const [legsCounter, setLegsCounter] = useState(0);


  return (
    <div>  
      <div className='selectors'>
        <div className='select-container'>
          <label>Head
            <select onChange={(e) => {
              setHead(e.target.value);
              setHeadCounter(headCounter + 1);
            }}>
              <option value='dog-head'>Dog</option>
              <option value='cat-head'>Cat</option>
              <option value='crocodile-head'>Crocodile</option>
              <option value='eagle-head'>Eagle</option>
            </select>
          </label>
        </div>
        <div className='select-container'>
          <label>Torso
            <select onChange={(e) => {
              setTorso(e.target.value);
              setTorsoCounter(torsoCounter + 1);
            }}>
              <option value='dress-torso'>Dress</option>
              <option value='shirt-torso'>Shirt</option>
              <option value='man-torso'>Man</option>
              <option value='woman-torso'>Woman</option>
            </select>
          </label>
        </div>  
        <div className='select-container'>
          <label>Legs
            <select onChange={(e) => {
              setLegs(e.target.value);
              setLegsCounter(legsCounter + 1);
            }}>
              <option value='socks-legs'>Socks</option>
              <option value='skirt-legs'>Skirt</option>
              <option value='baby-legs'>Baby</option>
              <option value='swimmer-legs'>Swimmer</option>
            </select>
          </label>
        </div>  
      </div>
      <p>Number of times head changed: {headCounter}</p>
      <p>Number of times torso changed: {torsoCounter}</p>
      <p>Number of times legs changed: {legsCounter}</p>

    </div>  
  );
}
