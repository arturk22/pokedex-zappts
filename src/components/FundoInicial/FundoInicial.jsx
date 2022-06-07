import React from 'react';
import fundo from "./fundo.png"
import styled from 'styled-components';
import { corBackgroundBotao, fonteInter, sombra } from '../UI/variaveis';


const Box = styled.div`
display: flex;
Width: 454px;
@media screen and (max-width: 1024px) {
    flex-direction: column;
}
`;

const Boxsecundario = styled.div`
text-align: left;
margin-left: 60px;
@media screen and (max-width: 1024px) {
    margin-left: 10px;
}
`;

const TextoPrincipal = styled.h1`
font-family: ${fonteInter};
font-weight: bold;
font-size: 50px;
line-height: 140%;
color: #282828;

@media screen and (max-width: 1024px) {
    font-size: 35px;
}
`;

const TextoSecundario = styled.h2`
font-family: ${fonteInter};
font-weight: 400;
font-size: 16px;
line-height: 225%;

letter-spacing: 0.02em;

color: #282828;

@media screen and (max-width: 1024px) {
    font-size: 14px;
}
`;

const Botao = styled.button`
height: 66px;
width: 231px;
border-radius: 11px;
border: none;
background: ${corBackgroundBotao};
box-shadow: ${sombra};
border-radius: 11px;

outline: 0;


`;


const ImagemFundo = styled.img`

`;

const Link_a = styled.a`
text-decoration: none;
color: #FFFFFF;
font-family: ${fonteInter};
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