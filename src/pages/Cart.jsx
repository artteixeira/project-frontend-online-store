import React, { Component } from 'react';
import ItemCard from '../components/ItemCart';

class Cart extends Component {
  state = {
    cartList: [],
  };

  componentDidMount() {
    const cartStorage = JSON.parse(localStorage.getItem('cartList'));
    this.setState({
      cartList: cartStorage,
    });
  }

  removeBtn = (index) => {
    const { cartList } = this.state;
    const result = cartList;
    cartList.splice(index, 1);
    this.setState({
      cartList: result || [],
    }, localStorage.setItem('cartList', JSON
      .stringify(result || [])));
  };

  render() {
    const { cartList } = this.state;
    return (
      <div>
        { cartList <= 0 ? (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>) : (
          cartList.map(({ title, price, availableQuantity }, index) => (
            <ItemCard
              key={ index }
              title={ title }
              price={ price }
              availableQuantity={ availableQuantity }
              removeButton={ () => this.removeBtn(index) }
            />
          )))}
      </div>
    );
  }
}

export default Cart;
