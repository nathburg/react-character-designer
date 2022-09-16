import React from 'react';
import { useState } from 'react';
import Display from './Display/Display';
import Interaction from './Interaction/Interaction';
import './Main.css';



export default function Main() {
  const [head, setHead] = useState('dog-head');
  const [torso, setTorso] = useState('dress-torso');
  const [legs, setLegs] = useState('socks-legs');
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphraseArr, setCatchphraseArr] = useState([]);
  const handleArrChange = () => {
    setCatchphraseArr((oldArray) => [catchphrase, ...oldArray]);

  };
  return (
    <div className='main'>
      <Interaction 
        setHead={setHead}
        setTorso={setTorso}
        setLegs={setLegs}
        setCatchphrase={setCatchphrase}
        catchphraseArr={catchphraseArr}
        handleArrChange={handleArrChange}
      />
      <Display head={head} torso={torso} legs={legs}/> 
    </div>
  );
}
