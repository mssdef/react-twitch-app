import React, { useState, useEffect, useRef } from 'react';

const Dropdown =  ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const [ activeIndex, setActiveIndex] = useState(null);
  const ref = useRef();

  useEffect(()=>{
    document.body.addEventListener('click', (event) => {
      if (ref.current?.contains(event.target)) {
          return;
      }

      setOpen(false);
    });
  }, []);

  const onTitleClick = (i) => {
    setActiveIndex(i);
  }

  const renderedOptions = options ? options.map((item, i) => {
      if (item.value === selected.value) return null;

      return <div key={item.value} className="item"
        onClick={()=>onSelectedChange(item)}>
        {item.label}
      </div>;
  }) : <div/>;

  return <div ref={ref} className="ui form">
    <div className="field">
      <label className="label">{label || "Select a Color"}</label>
      <div onClick={()=>{return setOpen(!open)}}
        className={open ? "ui selection dropdown visible active" : "ui selection dropdown"}>
        <i className="dropdown icon"/>
        <div className="text">{selected.label}</div>
        <div className={open ? "menu visible transition" : "menu"}>{renderedOptions}</div>
      </div>
    </div>
    <h1>{activeIndex} Dropdown</h1>
  </div>;
}

export default Dropdown;
