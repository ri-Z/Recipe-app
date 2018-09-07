import React, { Component } from 'react';
import { Link } from "react-router-dom";

const API_KEY = "cc6bc1f93235d0f0b64c1a67c844b117";
const API_KEY2 = "15bd04ed701658d4508fc08bd0a5d277";

class Recipe extends Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY2}&q=${title}`);

    const response = await request.json();
    this.setState({ activeRecipe: response.recipes[0] });
    console.log("this.state.activeRecipe", this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">
            <img className="active-recipe__img" src={ recipe.image_url } alt={ recipe.title } />
            <h3 className="active-recipe__title">{ recipe.title }</h3>
            <h4 className="active-recipe__publisher">{ recipe.title }
              Publisher: <span>{ recipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">
              Website: <span><a href={ recipe.publisher_url }>{ recipe.publisher_url }</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
}

export default Recipe;
