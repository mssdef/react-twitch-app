 import React, { useState } from 'react';
 import { Switch, Route } from 'react-router-dom';
 import Accordion from './components/Accordion';
 import Search from './components/Search';
 import Dropdown from './components/Dropdown';
 import Translate from './components/Translate';
 // import Route from './components/Route';
 import Header from './components/Header';

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
      <Header />

      <Switch>
        <Route exact path="/">
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
      </Switch>
    </div>;
 }
