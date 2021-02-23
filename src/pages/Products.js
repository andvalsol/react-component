import React, {Component} from 'react';

import MainNavigation from '../components/MainNavigation';
import ShopContext from "../context/shop-context"
import './Products.css';

export class ProductsPage extends Component {
    render() {
        return ( // Approach #1 is to create the component for the ShopContext
            <ShopContext.Consumer>
              {(context) =>
                  <React.Fragment>
                    <MainNavigation cartItemNumber={context.cart.reduce((count, currentItem) => {
                      return count + currentItem.quantity
                    })}/>
                    <main className="products">
                      <ul>
                        {context.products.map(product => (
                            <li key={product.id}>
                              <div>
                                <strong>{product.title}</strong> - ${product.price}
                              </div>
                              <div>
                                <button
                                    onClick={context.addProductToCart.bind(this, product)}
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </li>
                        ))}
                      </ul>
                    </main>
                  </React.Fragment>}
            </ShopContext.Consumer>
        );
    }
}
