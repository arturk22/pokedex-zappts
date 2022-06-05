import React, { Component } from "react";
import { CardList } from "./components/ListaDeCard/CardList";
import { SearchBox } from './components/search-box/search-box.component';
import { Cabecalho } from './components/Cabecalho/Cabecalho'
import "./App.css";
import './assets/index.css';
import { FundoInicial } from "./components/FundoInicial/FundoInicial";

class App extends Component{
  constructor(){
    super();

    this.state = {
      pokemons: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){

    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <Cabecalho/>
        <FundoInicial/>
        {/* <SearchBox
          placeholder='Procurar Pokemon' 
          handleChange= {this.handleChange}
        />
        <CardList pokemons={fileteredPokemons}></CardList> */}
        
      </div>
    );
  }
}
export default App;
