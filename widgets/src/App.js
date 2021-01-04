 import React, { useState } from 'react';
 import Accordion from './components/Accordion';
 import Search from './components/Search';
 import Dropdown from './components/Dropdown';
 import Translate from './components/Translate';
 import Route from './components/Route';

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
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown label="Select a color..."
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>;
 }
