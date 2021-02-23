import React, { Component } from 'react';

import MainNavigation from '../components/MainNavigation';
import ShopContext from "../context/shop-context"
import './Cart.css';

export class CartPage extends Component {
  static contextType = ShopContext

  render() {
    return (
      <React.Fragment>
          <MainNavigation cartItemNumber={this.context.cart.reduce((count, currentItem) => {
            return count + currentItem.quantity
          })} />
        <main className="cart">
          {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.context.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={this.context.removeProductToCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}
