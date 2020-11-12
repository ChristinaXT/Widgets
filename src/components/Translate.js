// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Bengali',
    value: 'bn'
  },
  {
    label: 'Bulgarian',
    value: 'bg'
  },
  {
    label: 'Chinese',
    value: 'zh-TW'
  },
  {
    label: 'Danish',
    value: 'da'
  },
  {
    label: 'Icelandic',
    value: 'is'
  },
  {
    label: 'Irish',
    value: 'ga'
  },
  {
    label: 'Japanese',
    value: 'ja'
  },
  {
    label: 'Latin',
    value: 'la'
  },
  {
    label: 'Macedonian',
    value: 'mk'
  },
  {
    label: 'Mongolian',
    value: 'mn'
  },
  {
    label: 'Punjabi',
    value: 'pa'
  },

];


const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
         <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
     <Dropdown
       label="Select a Language"
       selected={language}
       onSelectedChange={setLanguage}
       options={options}
       />
     <hr />
     <h3 className="ui header">Output</h3>
     <Convert />
    </div>
  );
};

export default Translate;
