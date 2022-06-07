import React from "react";
import styled from "styled-components";
import { SearchIcon } from "@primer/octicons-react";
import { fonteInter, sombra } from "../UI/variaveis";

const Search = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  width: 45rem;
  text-align: left;
  font-size: 1.2rem;
  margin-right: 12rem;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
    width: 50%;
    margin-right: 4rem;
    
}
`;

const Texto = styled.h2`
font-family: ${fonteInter};
font-weight: 400;
font-size: 35px;
line-height: 42px;
text-align: center;
letter-spacing: 3px;
color: #171414;
@media screen and (max-width: 1024px) {
  font-size: 30px;
}
`;

const Search_box = styled.div`
  display: flex
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 3.1rem;
  width: 80%;
  padding: 10px;
  border-radius: 40px;
  box-shadow: ${sombra};
`;

export const SearchBox = ({ placeholder, handleChange }) => (
  <>
    <Texto>Mais de 250 Pokemons para você escolher o seu favorito</Texto>
    <Search_box>
      <Search type="search" placeholder={placeholder} onChange={handleChange} />
        <SearchIcon size={24} />
    </Search_box>
  </>
);
