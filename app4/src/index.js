import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/products"><App /></BrowserRouter>,
  document.getElementById('root')
)
