import React from 'react';
import Catchphrases from './Catchphrases/Catchphrases';
import Selectors from './Selectors/Selectors';

export default function Interaction({ setHead, setTorso, setLegs, catchphraseArr, handleArrChange, setCatchphrase }) {
  return (
    <div>
      <Selectors setHead={setHead} setTorso={setTorso} setLegs={setLegs}/>
      <Catchphrases catchphraseArr={catchphraseArr} handleArrChange={handleArrChange} setCatchphrase={setCatchphrase}/>
    </div>
  );
}
