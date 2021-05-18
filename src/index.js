import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleClick = (e) =>{
  let text = e.target.innerText
  text === 'I am just happy.' ? e.target.innerText = 'sad' : e.target.innerText = 'happy'
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(e) => handleClick(e)} />
  </div>,
  document.getElementById('root')
);



