//
import React from 'react';
import ReactDOM from 'react-dom';

//
function getButtonText(){
  return (
    <span>click on me</span>
  )
}
const App = () => {
  const buttonText = 'Click Me!';

  return <div>
    <label htmlFor="name">Name ({buttonText}):</label>
    <input id="name" />
    <button style={{ fontSize: '2em', backgroundColor: 'blue', color: 'white'}}>
      {getButtonText()}
    </button>
  </div>
};

//
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
