import {createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-decoration:none;
    font-family: Roboto, Helvetica, Sans-Serif;
    background-color:${({theme})=> theme.bodyBackgroundColor}
  }
  *{
    border:0;
    outline:0;
    -ms-user-select: none;
    user-select:none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
  }
  pre code,pre code span{
    -ms-user-select: text;
    user-select:text;
    -webkit-user-drag: text;
    -khtml-user-drag: text;
    -moz-user-drag: text;
    -o-user-drag: text;
    user-drag: text;
    -moz-user-select: -moz-text;
    -khtml-user-select: text;
    -webkit-user-select: text;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
  @mixin hideScrollbar {
    &::-webkit-scrollbar { 
      width: 0 !important
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default GlobalStyle