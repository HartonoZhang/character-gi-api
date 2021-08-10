// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import { CardList } from "./component/card-list/card-list.component.jsx";
import { SearchField } from "./component/search-field/search-field.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://genshinlist.com/api/characters")
      .then((response) => response.json())
      .then((character) => this.setState({ characters: character }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { characters, searchField } = this.state;
    const filterCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title-app">GENSHIN IMPACT CHARACTERS</h1>
        <SearchField
          placeholder="Search characters"
          handleChange={this.handleChange}
        />
        <CardList characters={filterCharacters} />
      </div>
    );
  }
}

export default App;
