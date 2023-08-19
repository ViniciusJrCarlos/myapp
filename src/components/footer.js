import React from "react";
import styled from "styled-components";

const Rodape=styled.p`

    color: blue;
    font-size: 15px;

`;

const Footer = () => (

    <footer>
        <Rodape>
            Obrigado pela visita <br/>
            Endereço: Rua 7 de setembro, Centro, Poá / SP. 
        </Rodape>
    </footer>


);

export default Footer;