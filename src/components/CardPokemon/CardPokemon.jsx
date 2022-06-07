import React from "react";
import styled from "styled-components";
import { sombra } from "../UI/variaveis";

const Card_container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 5px solid transparent;
  border-radius: 15px;
  padding: 1rem;
  transition: transform 0.25s ease-out;
  box-shadow: ${sombra};
  font-family: "Righteous", cursive;
`;

const ImgPokemon = styled.img`
  width: 80px;
  height: 80px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const PokemonName = styled.a`
  color: #000000;
  text-decoration: none;
`;

export const CardPokemon = (props) => (
  <Card_container>
    <PokemonName
      href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}
      target="_blank"
      rel="noreferrer"
    >
      <ImgPokemon
        alt="pokemon"
        src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
      />
      <h2>
        {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
      </h2>
    </PokemonName>
  </Card_container>
);

export default CardPokemon;
