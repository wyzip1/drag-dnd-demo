import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'

import App from './App'

import Example from './example'
import { observe } from './Game'

observe((knightPosition) => {
  console.log(knightPosition);
  ReactDOM.render(
    <Example knightPosition={knightPosition} />,
    // <App />,
    document.getElementById('root')
  )
})

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )
