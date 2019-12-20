import React, { Component } from 'react'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: data.products
    }
  }

  render() {    
    const product = data.products.find(p => p.name === this.props.match.params.productName)
    console.error(product)
    return <div className='product-container'>
      <Product product={product} />
    </div>
  }
}

export default ProductContainer