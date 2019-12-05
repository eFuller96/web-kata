import React, { Component } from 'react'
import './App.css'
import data from './data' 
import ProductList from './ProductList'

class App extends Component {
  render() {

    return <div className="App">
      <div className="App-header">
        <h2>Redgate Products</h2>
      </div>
      <div className='productList'>
        <ProductList products={data.products} />
      </div>
    </div>
  }
}

export default App; 