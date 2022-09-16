import React from 'react';
import './RenderCatchphrase.css';

export default function RenderCatchphrase({ element }) {
  return (
    <div className='catchphrase'>
      <p>{element}</p>
    </div>
  );
}
