import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Item extends Component {
  render() {
    const { name, price, shipping, thumbnail, id, ButtonCartFunc } = this.props;
    return (
      <div>
        <Link data-testid="product-detail-link" to={ `/details/${id}` }>
          <div data-testid="product">
            <img src={ thumbnail } alt={ name } />
            <p>{name}</p>
            <p>{price}</p>
            { shipping ? <p>Frete Gratis!</p> : true }
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="submit"
          onClick={ ButtonCartFunc }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
  thumbnail: PropTypes.string.isRequired,
  ButtonCartFunc: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Item;
