import React, { Component } from 'react'
import './App.css'
import data from './data.js' 

class Product extends React.Component {
  render() {
    var products = data.products.map(x => 
        <li key={x.name}>{x.name}</li>)
        return <div>{products}</div>
  }
}

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata#1</code></h2>
      </div>
      <div className='products'>
        <Product/>
      </div>
    </div>
  }
}

export default App;
