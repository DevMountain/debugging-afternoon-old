import React, { Component } from 'react';
import './ShoppingCart.css';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: this.props.shoppingCart
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            shoppingCart: nextProps.shoppingCart
        })
    }

    render() {
        let shoppingCartDisplay = this.state.shoppingCart.map((element, index) => {
            <div className="shopping-cart-product-container">
                <img src={element.image} alt="" />
                <div className="shopping-cart-info">
                    <h2>{element.title}</h2>
                    <h2>{"$" + element.price + ".00"}</h2>
                    <div className="shopping-cart-button-container">
                        <button className="shopping-cart-button" onClick={() => this.props.removeFromShoppingCart(element)}>Remove From Shopping Cart</button>
                    </div>
                </div>
            </div>
        })
        return (
            <div className="shopping-cart-container">
                {shoppingCartDisplay[0] ?
                    shoppingCartDisplay
                    : <div className="go-buy-something"><h1>Your shopping cart is empty!  Go buy something!</h1></div>}
            </div>
        )
    }
}

export default ShoppingCart;