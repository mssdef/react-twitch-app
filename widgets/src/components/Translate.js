import React, { useState, useEffect, useRef } from 'react';

import Dropdown from './Dropdown';

const Translate =  () => {
  const options = [
    { label: 'Afrika', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' },
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
  </div>;
}

export default Translate;
