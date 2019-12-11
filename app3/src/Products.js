import React, { Component } from 'react'
import './Products.css'

class Product extends Component{
    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{(!this.props.product.collapseDescription) && this.props.product.description }</div>
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
                <div className='collapse-description' onClick={() => this.props.collapseDescription(this.props.product)}>-</div>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product
                    product={p}
                    key={'product-' + i }
                    removeProduct={this.props.removeProduct}
                    collapseDescription={this.props.collapseDescription}
                />
            )}
        </div>
    }
}

export default Products