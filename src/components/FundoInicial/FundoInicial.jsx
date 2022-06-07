import React from 'react';
import fundo from "./fundo.png"
import styled from 'styled-components';


const Box = styled.div`
display: flex;

`;

const Boxsecundario = styled.div`
width: 380px;
height: 330px;
text-align: left;
margin-left: 60px;
`;

const TextoPrincipal = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 54px;
line-height: 141%;
color: #282828;
`;

const TextoSecundario = styled.h2`

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 225%;

letter-spacing: 0.02em;

color: #282828;
`;

const Botao = styled.button`
height: 66px;
width: 231px;
border-radius: 11px;
border: none;
background: #48D0B0;
box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.18);
border-radius: 11px;

outline: 0;


`;


const ImagemFundo = styled.img`
align-items: center;
`;

const Link_a = styled.a`
text-decoration: none;
color: #FFFFFF;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
align-items: center;
text-align: center;
`;

export const FundoInicial = (props) => (
   
    <Box>
        <Boxsecundario>
            <TextoPrincipal>Qual Pokemon você escolheria?</TextoPrincipal>
            <TextoSecundario>Você pode saber o tipo de Pokémon, seus pontos fortes fracos e habilidades.</TextoSecundario>
            <Botao> <Link_a href="/pokemons">Veja os pokemons</Link_a></Botao>
        </Boxsecundario>
        <ImagemFundo src={fundo} alt="Pikachu" />
    </Box>


  );