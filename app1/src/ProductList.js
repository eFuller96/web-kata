import React, { Component } from 'react'
import './ProductList.css'

class ProductList extends Component {
    render() {
      const productNames = this.props.products.map(x =>
          <div className='products'>
            <li key={x.name}>{x.name}<b>{x.free ? ' [ Free!!! ]' : ''}</b></li>
          </div>)
  
      return <div>{productNames}</div>
    }
  }

  export default ProductList;