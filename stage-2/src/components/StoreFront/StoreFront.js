import React, { Component } from 'react';
import axios from 'axios';
import './StoreFront.css';

class StoreFront extends Component {
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("https://practiceapi.devmountain.com/products/")
            .then((response) => {
                this.setState({
                    products: response.data
                })
            })
    }

    render() {
        let productDisplay = this.state.products.map((element, index) => {
            return (
                <div className="product-container" key={index}>
                    <h2>{element.title}</h2>
                    <img src={element.image} alt="" />
                    <h2>{element.desc}</h2>
                    <h3>{"$" + element.price + ".00"}</h3>
                    <button onClick={() => this.props.addToShoppingCart(element)}>Purchase!</button>
                </div>
            )
        })
        return (
            <div className="storefront-container">
                {productDisplay}
            </div>
        )
    }
}

export default StoreFront;