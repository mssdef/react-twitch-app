import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


const PageOne = () => {
  return <div>PageOne</div>;
}

const PageTwo = () => {
  return <div>PageTwo</div>;
}


const App = () => {
  return <div>
    <BrowserRouter>
      <Route path="/1" exact component={PageOne} />
      <Route path="/2" exact component={PageTwo} />
    </BrowserRouter>
  </div>
}

export default App;
