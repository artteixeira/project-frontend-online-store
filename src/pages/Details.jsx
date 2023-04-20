import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import Header from '../components/Header';

class Details extends Component {
  state = {
    title: '',
    url: '',
    price: '',
    availableQuantity: 0,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const details = await getProductById(id);
    const { title, price, pictures } = details;
    const { available_quantity: availableQuantity } = details;
    const { url } = pictures[0];
    this.setState({
      title,
      url,
      price,
      availableQuantity,
    });
  }

  onClickAddCartButton = () => {
    const { title, price, availableQuantity } = this.state;
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    localStorage.setItem('cartList', JSON
      .stringify([...cartList, { title, price, availableQuantity }]));
  };

  render() {
    const { title, url, price } = this.state;
    return (
      <div>
        <Header />
        <img
          data-testid="product-detail-image"
          src={ url }
          alt={ title }
        />
        <p data-testid="product-detail-name">{title}</p>
        <p data-testid="product-detail-price">{price}</p>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.onClickAddCartButton }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
