import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    const { name, price, shipping, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ name } />
        <p>{name}</p>
        <p>{price}</p>
        { shipping ? <p>Frete Gratis!</p> : true }
      </div>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Item;
