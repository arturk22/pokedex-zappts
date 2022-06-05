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
  font-family: Open Sans;
  font-size: 25px;
  font-weight: 700;
  line-height: 34px;
  margin-right: 5rem;
`;

export const Cabecalho = (props) => {
  return (
    <CabecalhoC>
      <Cabecalho__logo src={logo} />
      <nav>
        <Cabecalho__lista>
          <Cabecalho__link>
            <a href="#">Home</a>
          </Cabecalho__link>
          <Cabecalho__link>
            <a href="#">Pokemons</a>
          </Cabecalho__link>
          <Cabecalho__link>
            <a href="#">Contato</a>
          </Cabecalho__link>
        </Cabecalho__lista>
      </nav>
    </CabecalhoC>
  );
};

export default Cabecalho;
