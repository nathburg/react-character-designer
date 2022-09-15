import React from 'react';
import './Selectors.css';

export default function Selectors({ setHead }) {
  return (
    <div className='selectors'>
      <div className='select-container'>
        <label>Head
          <select onChange={(e) => setHead(e.target.value)}>
            <option value='dog-head'>Dog</option>
            <option value='cat-head'>Cat</option>
            <option value='crocodile-head'>Crocodile</option>
            <option value='eagle-head'>Eagle</option>
          </select>
        </label>
      </div>
      <div className='select-container'>
        <label>Torso
          <select>
            <option value='dress-torso'>Dress</option>
            <option value='shirt-torso'>Shirt</option>
            <option value='man-torso'>Man</option>
            <option value='woman-torso'>Woman</option>
          </select>
        </label>
      </div>  
      <div className='select-container'>
        <label>Legs
          <select>
            <option value='socks-legs'>Socks</option>
            <option value='skirt-legs'>Skirt</option>
            <option value='baby-legs'>Baby</option>
            <option value='swimmer-legs'>Swimmer</option>
          </select>
        </label>
      </div>  
    </div>
  );
}
