import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "cc6bc1f93235d0f0b64c1a67c844b117";
const API_KEY2 = "15bd04ed701658d4508fc08bd0a5d277";


class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY2}&q=${recipeName}`);

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
