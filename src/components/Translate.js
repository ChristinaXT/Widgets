import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  
];


const Translate = () => {
  return (
    <div>
     <Dropdown />
    </div>
  );
};

export default Translate;
