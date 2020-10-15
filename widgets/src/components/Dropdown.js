import React, { useState } from 'react';

const Dropdown =  ({ options, selected, onSelectedChange }) => {
  const [ activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (i) => {
    setActiveIndex(i);
  }

  const renderedOptions = options ? options.map((item, i) => {
      // const activeClass = i === activeIndex ? 'active' : '';

      return <div key={item.value} className="item"
        onClick={()=>onSelectedChange(item)}>
        {item.label}
      </div>;
  }) : <div/>;

  return <div className="ui form">
    <div className="field">
      <label className="label">Select a Color</label>
      <div className="ui selection dropdown visible active">
        <i className="dropdown icon"/>
        <div className="text">{selected.label}</div>
        <div className="menu visible transition">{renderedOptions}</div>
      </div>
    </div>
    <h1>{activeIndex} Dropdown</h1>
  </div>;
}

export default Dropdown;
