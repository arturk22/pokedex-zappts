import React from "react";
import styled from "styled-components";
import { corFonteCabecalho, fonteOpen, sombra } from "../UI/variaveis";
import logo from "./logo.png";

const CabecalhoC = styled.header`
  background: #ffffff;
  border-radius: 0 0 10px 10px;
  box-shadow: ${sombra};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.8rem;
  width: 100%;
  margin-bottom: 3rem;
  font-size: 1.6rem;
  @media screen and (max-width: 1024px) {
    margin-left: 0.5rem;
    height: 10rem;
    flex-direction: column;
  
}


`;

const Cabecalho__logo = styled.img`
  width: 10rem;
  margin-left: 5rem;
  @media screen and (max-width: 1024px) {
    margin-right: 0px;
    margin-left: 0px;
    width: 8rem;
}
`;

const Cabecalho__lista = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  @media screen and (max-width: 1024px) {
    margin-left: 6rem;
}
`;

const Cabecalho__link = styled.li`
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  margin-right: 5rem;
  @media screen and (max-width: 1024px) {
    margin-right:3rem;
    font-size: 15px;
    
}
  
`;

const Cabecalho__link_a = styled.a`
text-decoration: none;
color: ${corFonteCabecalho};
font-family: ${fonteOpen};
`;

const Navegation = styled.nav`

`;

export const Cabecalho = () => {
  return (
    <CabecalhoC>
      <Cabecalho__logo src={logo} />
      <Navegation>
        <Cabecalho__lista>
          <Cabecalho__link>
            <Cabecalho__link_a href="/">Home</Cabecalho__link_a>
          </Cabecalho__link>
          <Cabecalho__link>
            <Cabecalho__link_a href="/pokemons">Pokemons</Cabecalho__link_a>
          </Cabecalho__link>
          <Cabecalho__link>
            <Cabecalho__link_a href="#">Contato</Cabecalho__link_a>
          </Cabecalho__link>
        </Cabecalho__lista>
      </Navegation>
    </CabecalhoC>
  );
};

export default Cabecalho;
