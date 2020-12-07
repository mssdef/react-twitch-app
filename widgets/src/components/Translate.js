import React, { useState, useEffect, useRef } from 'react';

import Dropdown from './Dropdown';
import Convert from './Convert';


const Translate =  () => {
  // key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
  const options = [
    { label: 'French', value: 'fr' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' },
    { label: 'Dutch', value: 'nl' },
  ];

  const [open, setOpen] = useState(false);
  const [ language, setLanguage ] = useState(options[0]);
  const [text, setText] = useState('');

  useEffect(()=>{
  }, []);



  return <div  className="ui form">
    <div className="field">
      <label>Enter Text</label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
    <Dropdown
      label="Select a Language"
      selected={language}
      onSelectedChange={setLanguage}
      options={options}  />

    <hr />
    <h3 className="ui header">Output</h3>
    <Convert language={language} text={text} />
  </div>;
}

export default Translate;
