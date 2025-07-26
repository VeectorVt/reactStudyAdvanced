// This file is part of a React project that uses styled-components for global styles and theming(DESTAQUE).

import styled, { createGlobalStyle} from "styled-components"
import * as colors from "../config/colors";
import 'react-toastify/dist/ReactToastify.css';

export default
createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    font-family: Arial, Helvetica, sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
}
/*
  Esse trecho garante que os elementos <html>, <body> e o elemento com id="root"
  ocupem 100% da altura da janela do navegador.

  Isso é muito útil principalmente em aplicações SPA (como React ou Vue),
  onde o componente raiz (#root) precisa preencher toda a altura da tela
  para que layouts com 100% de altura funcionem corretamente.

  Sem isso, se você colocar height: 100% em elementos internos,
  eles não saberão qual é a "altura total", pois seus elementos-pai (html e body)
  não têm altura definida. Esse código resolve isso.
*/
html, body, #root{
    height: 100%;
    }


button{
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
 }

a{
    text-decoration: none;
    color: ${colors.primaryColor};
 }

ul{
    list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.sucessColor};
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor};
}


`;

export const Container = styled.section`
max-width: 360px;
background: #fff;
margin: 30px auto;
padding:30px;
border-radius: 4px;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
`
