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
  {
    label: 'Albanian',
    value: 'af'
  },
  {
    label: 'Belarusian',
    value: 'be'
  },
  {
    label: 'Czech',
    value: 'cs'
  },
  {
    label: 'Georgian',
    value: 'ka'
  },
  {
    label: 'Hawaiian',
    value: 'haw'
  },
  {
    label: 'Hebrew',
    value: 'he'
  },
  {
    label: 'Kinyarwanda',
    value: 'rw'
  },
  {
    label: 'Russian',
    value: 'ru'
  },
  {
    label: 'Romanian',
    value: 'ro'
  },
  {
    label: 'Scots Gaelic',
    value: 'gd'
  },
  {
    label: 'Swahili',
    value: 'sw'
  },
  {
    label: 'Tagalog',
    value: 'tl'
  },
  {
    label: 'Thai',
    value: 'th'
  },
  {
    label: 'Welsh',
    value: 'cy'
  },
];


const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form trans-form">
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
     <h3 className="ui header output">Output</h3>
     <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
