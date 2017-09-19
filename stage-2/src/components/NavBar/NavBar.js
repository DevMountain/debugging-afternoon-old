import React, { Component } from 'react';
import './NavBar.css';
import Logo from '../../images/dev-mountain-logo.png'

class NavBar extends Component {

    render() {
        return (
            <div>
                <div className="navbar-container">
                    <div className="logo-container">
                        <Link to="/"><img className="logo-image" src={Logo} alt="" /></Link>
                    </div>

                    <div className="navbar-links-container">
                        <ul className="navbar-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/storefront">Store</Link></li>
                            <li><Link to="/shoppingcart">Shopping Cart</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default NavBar;