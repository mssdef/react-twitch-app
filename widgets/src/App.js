 import React, { useState } from 'react';
 import Accordion from './components/Accordion';
 import Search from './components/Search';
 import Dropdown from './components/Dropdown';

 const items = [
   {
      title: 'What is React?',
      content: 'React is front end javascript framework'
   },
   {
      title: 'Why use React?',
      content: 'React is favorite JS library among engineers'
   },
   {
      title: 'How do you use React?',
      content: 'You use React by creating components'
   }
 ];

 const options = [
   { label: 'Color Red', value: 'red'},
   { label: 'Color Blue', value: 'blue'},
   { label: 'The Green', value: 'green'},
 ]

 export default () => {
   const [selected, setSelected] = useState(options[0]);

   return <div>
    <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
   </div>;
 }
