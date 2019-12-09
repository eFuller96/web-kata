import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {products: data.products}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitProduct = this.handleSubmitProduct.bind(this)
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    
    this.setState({
      [name]: value
    })
  }

  handleSubmitProduct(event) {
    event.preventDefault()

    var updatedProductsArray = this.state.products.concat({
      name: this.state.productName,
      description: this.state.description
    });
    
    this.setState({
      products: updatedProductsArray
    })
  }

  handleRemoveProduct(productToRemove) {
    
    var updatedProductsArray = this.state.products.filter(product =>
      product.name !== productToRemove.name)

    this.setState({
      products: updatedProductsArray
    })
  }

  render() {

    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form onSubmit={this.handleSubmitProduct}>
          <label>Product Name
            <input
              name='productName'
              onChange={this.handleInputChange} />
          </label>
          <label>Product Description
            <input
              name='description'
              onChange={this.handleInputChange} />
          </label>
          <input type='submit' value='Submit'></input>
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} parentMethod={this.handleRemoveProduct} />
      </div>
    </div>
  }
}

export default App
