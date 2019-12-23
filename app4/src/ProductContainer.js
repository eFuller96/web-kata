import React, { Component } from 'react'
import _ from 'underscore'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {

  render() {
    const product = this.props.products.find(p => p.name === this.props.match.params.productName)
    return <div className='product-container'>
      <Product product={product} />
    </div>
  }
}

export default ProductContainer