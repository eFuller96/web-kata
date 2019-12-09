import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {products: data.products, nameSearch: ''}

    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.handleFilterProduct = this.handleFilterProduct.bind(this)
  }

  handleAddProduct(event){
    event.preventDefault()
    const products = [...this.state.products]

    products.push({
      name: event.target.name.value,
      description: event.target.description.value
    })

    this.setState({products: products})
  }

  removeProduct(product){
    const newProducts = _.filter(this.state.products, p => p.name !== product.name)
    this.setState({products: newProducts})
  }

  handleFilterProduct(event){
    this.setState({nameSearch: event.target.value})
  }

  render() {
    var filteredResults= _.filter(this.state.products, (product) => product.name.toUpperCase().includes(this.state.nameSearch.toUpperCase()))
    
    return <div className="App">
      <div className="App-header">
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>
        Filter products by name
        <form>
          <label>product name:
            <input type='text' name='name' onChange={this.handleFilterProduct} />
          </label>
        </form>
      </div>
      <div className='add-product'>
        <form onSubmit={this.handleAddProduct}>
          <label>product name:
            <input type='text' name='name' />
          </label>
          <label>description:
            <input type='text' name='description'/>
          </label>
          <input type='submit' value='add product' />
        </form>
      </div>
      <div className='products-container'>
        <Products products={filteredResults} removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
