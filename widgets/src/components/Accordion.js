import React, { useState } from 'react';

export default ({ items }) => {
  const [ activeIndex, setActiveIndex ] = useState(null);

  const onTitleClick = (i) => {
    setActiveIndex(i);
  }

  const renderedItems = items.map((item, i) => {
      return <React.Fragment id={item.title}>
        <div className="title active" onClick={()=>{onTitleClick(i)}}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>;
  });

  return <div className="ui styled accordion">
    {renderedItems}
    <h1>{activeIndex}</h1>
  </div>;
}
