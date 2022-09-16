import React from 'react';
import Catchphrases from './Catchphrases/Catchphrases';
import Selectors from './Selectors/Selectors';
import './Interaction.css';

export default function Interaction({ setHead, setTorso, setLegs, catchphraseArr, handleArrChange, setCatchphrase }) {
  return (
    <div className="interaction">
      <Selectors setHead={setHead} setTorso={setTorso} setLegs={setLegs}/>
      <Catchphrases catchphraseArr={catchphraseArr} handleArrChange={handleArrChange} setCatchphrase={setCatchphrase}/>
    </div>
  );
}
