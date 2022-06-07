import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const CabecalhoC = styled.header`
  background: #ffffff;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.8rem;
  margin-bottom: 3rem;
  font-size: 1.6rem;
`;

const Cabecalho__logo = styled.img`
  width: 10rem;
  margin-left: 5rem;
`;

const Cabecalho__lista = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;

const Cabecalho__link = styled.li`
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  margin-right: 5rem;
  
`;

const Cabecalho__link_a = styled.a`
text-decoration: none;
color: #212121;
font-family: Open Sans;
`;

export const Cabecalho = () => {
  return (
    <CabecalhoC>
      <Cabecalho__logo src={logo} />
      <nav>
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
      </nav>
    </CabecalhoC>
  );
};

export default Cabecalho;
