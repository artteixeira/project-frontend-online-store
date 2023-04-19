import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getCategories } from '../services/api';

class Home extends Component {
  state = {
    search: '',
    categories: [],
    categorie: '',
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

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { search, categories, categorie } = this.state;
    return (
      <div>
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
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <button>Ver Carrinho</button>
          </Link>
          {/* { searchList.length > 0
            ? (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>)
            : searchList
              .map((element, index) => (<Item
                data-testid="product"
                key={ index }
                id={ element.id }
                name={ element.title }
                price={ element.price }
                shipping={ element.shipping.free_shipping }
              />)) } */}
        </div>
      </div>
    );
  }
}

export default Home;
