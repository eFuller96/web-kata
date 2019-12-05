import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {props: data.products}
  }
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>View to add product here...</div>
      <div className='products-container'>
        <Products products={this.state.props} />
      </div>
    </div>
  }
}

export default App
