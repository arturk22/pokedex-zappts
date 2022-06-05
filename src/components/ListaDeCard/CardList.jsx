import React from "react";
import styled from "styled-components";
import CardPokemon from "../CardPokemon/CardPokemon";


const Card_List = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.2rem;

  @media (max-width: 576px) {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.8rem;
  }

  @media (min-width: 576px) {
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.2rem;
  }

  @media (min-width: 768px) {
    width: 85vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.2rem;
  }

  @media (min-width: 992px) {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1.2rem;
  }
`;

const Card__lista_nav = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 4rem;
  margin-bottom: 4rem;
`;

const Card__link = styled.li`
margin-left: 4rem;
border-radius: 4px;
height: 1rem;
width: 8rem;
text-align: center;
background: #F2F2F2;
font-weight: bold;
box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
`;


export const CardList = (props) => (
  <>
  <Card__lista_nav>
    <Card__link>Tipo</Card__link>
    <Card__link>Ataque</Card__link>
    <Card__link>Defesa</Card__link>
  </Card__lista_nav>
  <Card_List>
      {props.pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.name} {... pokemon.id} pokemon={pokemon}></CardPokemon>
      ))}
    </Card_List></>
);

export default CardList;
