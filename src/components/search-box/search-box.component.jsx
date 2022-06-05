import React from "react";
import styled from "styled-components";
import { SearchIcon } from "@primer/octicons-react";
import "../style.css"

const Search = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 10px;
  width: 45rem;
  text-align: left;
  font-size: 1.2rem;
  margin-right: 12rem;
  
`;

const Texto = styled.h2`
left: -0.74%;
right: -0.74%;
top: 0%;
bottom: 71.81%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 42px;
text-align: center;
letter-spacing: 3px;

color: #171414;
`;

const Search_box = styled.div`
  display: flex
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 3.1rem;
  width: 60rem;
  padding: 10px;
  border-radius: 40px;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;

export const SearchBox = ({ placeholder, handleChange }) => (
  <>
    <Texto>Mais de 250 Pokemons para você escolher o seu favorito</Texto>
    <Search_box>
      <Search type="search" placeholder={placeholder} onChange={handleChange} />
      <a href="#">
        <SearchIcon size={24} />
      </a>
    </Search_box>
  </>
);
