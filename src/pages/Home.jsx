import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Item from '../components/Item';
import Header from '../components/Header';

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

  onChangeAndClick = async ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.onClickSearchButton);
  };

  onClickAddCartButton = (element) => {
    const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
    localStorage.setItem('cartList', JSON.stringify([...cartList, element]));
  };

  setCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  onClickSearchButton = async () => {
    const { search, categorie } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(categorie, search);
    this.setState({
      searchList: results,
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
        <Header />
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
        >
          { categories
            .map((element, index) => (
              <label key={ index }>
                <input
                  data-testid="category"
                  name="categorie"
                  type="radio"
                  value={ element.id }
                  onClick={ this.onChangeAndClick }
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
          { searchList.length === 0 && start !== true
            ? (
              <p>
                Nenhum produto foi encontrado
              </p>) : true }
          { searchList
            .map((element, index) => (<Item
              key={ index }
              id={ element.id }
              ButtonCartFunc={ () => this.onClickAddCartButton(element) }
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
