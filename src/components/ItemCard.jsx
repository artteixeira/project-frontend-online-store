import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  state = {
    quantity: 1,
    availableQuantity: 0,
  };

  componentDidMount() {
    const { availableQuantity } = this.props;
    this.setState({
      availableQuantity,
    });
  }

  addItem = () => {
    const { availableQuantity, quantity } = this.state;
    if (quantity < availableQuantity) {
      this.setState({ quantity: quantity + 1 });
    }
  };

  subQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { quantity } = this.state;
    const { title, price } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ this.subQuantity }
        >
          -
        </button>
        <p
          name="quantity"
          data-testid="shopping-cart-product-quantity"
          onChange={ this.handleChange }
          value={ quantity }
        >
          {quantity}
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ this.addItem }
        >
          +
        </button>
        <p>{ ((price) * quantity).toFixed(2)}</p>
        <button
          type="button"
          data-testid="remove-product"
        >
          Excluir
        </button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
