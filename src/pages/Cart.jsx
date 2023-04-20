import React, { Component } from 'react';

class Cart extends Component {
  state = {
    cartList: [],
    quantity: 1,
  };

  componentDidMount() {
    const cartList = JSON.parse(localStorage.getItem('cartList'));
    this.setState({
      cartList,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cartList, quantity } = this.state;
    return (
      <div>
        { cartList !== [] ? (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>) : (
          cartList.map((element, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{element.title}</p>
              <p
                value={ quantity }
                name="quantity"
                data-testid="shopping-cart-product-quantity"
                onChange={ this.handleChange }
              >
                {quantity}
              </p>
              <p>{ ((element.price) * quantity).toFixed(2)}</p>
            </div>)))}
      </div>
    );
  }
}

export default Cart;
