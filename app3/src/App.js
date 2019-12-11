import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {

  constructor(props){
    super(props)
    const products = data.products.map(p => {
      return {
        ...p, 
        collapseDescription: false
      }
    })

    this.state= {products, filteredProducts: products}
    this.handleAddProduct = this.handleAddProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.handleFilterProduct = this.handleFilterProduct.bind(this)
    this.collapseDescription = this.collapseDescription.bind(this)
  }

  handleAddProduct(event){
    event.preventDefault()
    const products = [...this.state.products]

    products.push({
      name: event.target.name.value,
      description: event.target.description.value,
      collapseDescription: false
    })

    this.setState({products})
  }

  removeProduct(product){
    const newProducts = _.filter(this.state.products, p => p.name !== product.name)
    this.setState({products: newProducts})
  }

  collapseDescription(product){
    const updateArray = this.state.filteredProducts.map(function(p){
    if(p.name === product.name){
      return {
        ...p,
        collapseDescription: !p.collapseDescription
      }
    } else{
      return p
    }})
    this.setState({
      filteredProducts: updateArray
      })
  }

  handleFilterProduct(event){
    const nameSearch = event.target.value
    const filteredProducts=this.state.products.filter(product => product.name.toUpperCase().includes(nameSearch.toUpperCase()))
    this.setState({
      filteredProducts
    })
  }

  render() {
    
    return <div className="App">
      <div className="App-header">
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>
        Filter products by name
        <div className='filter-form'>
          <form>
            <label>product name:
              <input type='text' name='name' onChange={this.handleFilterProduct} />
            </label>
          </form>
        </div>
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
        <Products products={this.state.filteredProducts} removeProduct={this.removeProduct} collapseDescription={this.collapseDescription}/>
      </div>
    </div>
  }
}

export default App
