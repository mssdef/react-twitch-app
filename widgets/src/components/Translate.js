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

  useEffect(()=>{

  }, []);



  return <div  className="ui form">
    <Dropdown selected={language}
      onSelectedChange={setLanguage}
      options={options}  />
  </div>;
}

export default Translate;
