import React from 'react';
import RenderCatchphrase from './RenderCatchphrase.js/RenderCatchphrase';
import './Catchphrases.css';

export default function Catchphrases({ handleArrChange, catchphraseArr, setCatchphrase }) {
  
  return (
    <div>  
      <div>
        <label>Write a new catchphrase
          <textarea onChange={(e) => setCatchphrase(e.target.value)}></textarea>
        </label>
        <button onClick={
          handleArrChange
        }>
          Enter catchphrase
        </button>
      </div>
      {catchphraseArr.map((element, i) => (

        <RenderCatchphrase key={i} element={element} />
      )
      )}
    </div>  
  );
}
