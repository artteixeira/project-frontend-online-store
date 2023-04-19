import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Item from '../components/Item';

class Home extends Component {
  state = {
    search: '',
    categories: [],
    categorie: '',
    searchList: [],
    start: true,
  };

  componentDidMount() {
    this.setCategories();
  }

  setCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  onClickSearchButton = async () => {
    const { search, categorie } = this.state;
    const result = await getProductsFromCategoryAndQuery(categorie, search);
    this.setState({
      searchList: result,
      start: false,
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { search, categories, categorie, searchList, start } = this.state;
    return (
      <div>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <button>Ver Carrinho</button>
        </Link>
        <div>
          <input
            data-testid="query-input"
            type="text"
            name="search"
            id="search"
            value={ search }
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="submit"
            onClick={ this.onClickSearchButton }
          >
            Pesquisar
          </button>
        </div>
        <div
          className="SideCategories"
          value={ categorie }
          onChange={ this.handleChange }
        >
          { categories
            .map((element, index) => (
              <label key={ index }>
                <input
                  data-testid="category"
                  name="categorie"
                  type="radio"
                  value={ element.id }
                />
                { element.name }
              </label>
            ))}
        </div>
        <div>
          { start
            ? (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>) : true }
          { searchList.length <= 0
            ? (
              <p>
                Nenhum produto foi encontrado
              </p>)
            : searchList
              .map((element, index) => (<Item
                key={ index }
                name={ element.title }
                price={ element.price }
                shipping={ element.shipping.free_shipping }
                thumbnail={ element.thumbnail }
              />)) }
        </div>
      </div>
    );
  }
}

export default Home;
