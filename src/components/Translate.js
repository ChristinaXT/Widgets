import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
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
