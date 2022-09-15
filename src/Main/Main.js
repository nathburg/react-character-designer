import React from 'react';
import { useState } from 'react';
import Display from './Display/Display';
import Selectors from './Interaction/Selectors/Selectors';
import './Main.css';



export default function Main() {
  const [head, setHead] = useState('dog-head');
  // const [torso, setTorso] = useState('dress-torso');
  // const [legs, setLegs] = useState('socks-legs');
  
  return (
    <div className='main'>
      <Selectors setHead={setHead} />
      <Display head={head} /> 
    </div>
  );
}
