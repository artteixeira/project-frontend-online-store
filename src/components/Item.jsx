import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    const { name, price, shipping, thumbnail, linkItem } = this.props;
    return (
      <Link data-testid="product-detail-link" to={ `/details/${linkItem}` }>
        <div data-testid="product">
          <img src={ thumbnail } alt={ name } />
          <p>{name}</p>
          <p>{price}</p>
          { shipping ? <p>Frete Gratis!</p> : true }
        </div>
      </Link>

    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
  thumbnail: PropTypes.string.isRequired,
  linkItem: PropTypes.string.isRequired,
};

export default Item;
