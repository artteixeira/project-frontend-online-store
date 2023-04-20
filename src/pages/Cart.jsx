import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';

class Cart extends Component {
  render() {
    const cartList = JSON.parse(localStorage.getItem('cartList'));
    console.log(cartList, 'estou no cart');
    return (
      <div>
        { !cartList ? (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>) : (
          cartList.map(({ title, price }, index) => (
            <ItemCard
              key={ index }
              title={ title }
              price={ price }
            />
          )))}
      </div>
    );
  }
}

export default Cart;
