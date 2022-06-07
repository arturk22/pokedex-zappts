import React, { Component } from "react";
import { Cabecalho } from "../components/Cabecalho/Cabecalho";
import { CardList } from "../components/ListaDeCard/CardList";
import { SearchBox } from '../components/search-box/search-box.component';


class PagePokemons extends Component{
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
        <div>
        <Cabecalho />
        <SearchBox
          placeholder="Procurar Pokemon"
          handleChange={this.handleChange}
        />
        <CardList pokemons={fileteredPokemons}></CardList>
      </div>
      );
    }
}

export default PagePokemons;
