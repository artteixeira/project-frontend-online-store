import React, { Component } from 'react';

class Home extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => getProductsFromCategoryAndQuery(params));
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={ search }
          onChange={ this.handleChange }
        />
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          {/* { search !== ''
            ? (
              <p data-testid="home-initial-message">
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>)
            : searchList
              .map((element, index) => (<Item
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
