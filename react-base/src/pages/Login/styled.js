/*
  Em React, muitas pessoas usam a biblioteca "styled-components"
  para escrever estilos CSS dentro do próprio JavaScript. Isso facilita
  a criação de componentes com estilos encapsulados, dinâmicos e reutilizáveis.

  No entanto, no Vue não precisamos dessa abordagem, porque o próprio framework
  já oferece uma forma nativa e eficiente de lidar com estilos:

  - Podemos usar <style scoped> para isolar os estilos de cada componente.
  - Podemos usar :class e :style para aplicar estilos dinâmicos baseados em dados reativos.
  - O bind do Vue (v-bind) já nos permite passar valores dinâmicos para os atributos CSS.

  Ou seja, o Vue já resolve os principais problemas que o styled-components tenta resolver no React.
  Por isso, não há necessidade de usar CSS-in-JS ou bibliotecas externas para estilização básica no Vue.
*/
import styled from 'styled-components';

export const Title = styled.h1`
//configuração do title
background-color: wheat;

/* Configuração de elemento dentro do title */
small {
    color: #666;
    font-size: 1.8em;
}


`;


export const Paragrafo = styled.p`
font-size: 1.2em;
color: #333;

`
