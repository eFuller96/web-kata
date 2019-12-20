import React, { Component } from 'react'
import './ProductItem.css'
import { Link } from '../node_modules/react-router-dom'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>
        <Link to={`/${name}`}>{name}</Link>
      </div>
    </div>
  }
}

export default ProductItem