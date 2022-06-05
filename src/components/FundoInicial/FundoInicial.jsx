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
line-height: 76px;

color: #282828;
`;

const TextoSecundario = styled.h2`

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 36px;

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


font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
`;


const ImagemFundo = styled.img`
align-items: center;
`;

export const FundoInicial = (props) => (
   
    <Box>
        <Boxsecundario>
            <TextoPrincipal>Qual Pokemon você escolheria?</TextoPrincipal>
            <TextoSecundario>Você pode saber o tipo de Pokémon, seus pontos fortes fracos e habilidades.</TextoSecundario>
            <Botao>Veja os pokemons</Botao>
        </Boxsecundario>
        <ImagemFundo src={fundo} alt="" />
    </Box>


  );