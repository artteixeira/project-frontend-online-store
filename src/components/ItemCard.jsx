import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  state = {
    quantity: 1,
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
        <p
          name="quantity"
          data-testid="shopping-cart-product-quantity"
          onChange={ this.handleChange }
          value={ quantity }
        >
          {quantity}
        </p>
        <p>{ ((price) * quantity).toFixed(2)}</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
