import React, { Component } from 'react'
import './App.css'
import data from './data.js' 

class Product extends React.Component {
  render() {
    const productNames = this.props.products.map(x =>
      <li key={x.name}>{x.name}</li>)

    return <div>{productNames}</div>
  }
}

class App extends Component {
  render() {
    var products = data.products
    
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata#1</code></h2>
      </div>
      <div className='products'>
        <Product products={products}/>
      </div>
    </div>
  }
}

export default App;
