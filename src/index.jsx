import React from 'react';
import ReactDOM, { render } from 'react-dom';

function Index() {
  return(
    <div>Hello World!</div>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)