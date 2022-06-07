import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import './assets/index.css';

import PageInicial from "./pages/PageIncial";
import PagePokemons from "./pages/PagePokemons";

class App extends Component{

  render(){

    return(
      <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInicial/>} />
        <Route path="/pokemons" element={<PagePokemons/>} />
      </Routes>
      </BrowserRouter>
        
      </div>
    );
  }
}
export default App;
