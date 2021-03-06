import React, { Component } from 'react'
import axios from 'axios'


export default class ProductList extends Component {
    state = {
        products: []
    }
    constructor() {
        super();
        axios.get('/api/products/product_list').then(res => {
            console.log(res.data)
            this.setState({ products: res.data })
        })
    }

    render() {
        return (
            <div>
                {this.state.products.map(product => <p key={product.id}>{product.name}</p>)}
            </div>
        )
    }
}
