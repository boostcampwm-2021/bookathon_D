import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SCDream';
    src: /Users/maxcha/bookathon_D/client/src/assets/font/SCDream5.otf format('otf');
    font-weight: normal;
    font-style: normal;
  }

  html, body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    font-family: 'NeoDunggeunmo';
    *:focus { outline:none; }
  }

  p{
    margin: 0px;
    font-family: 'NeoDunggeunmo';
    word-break: keep-all;
  }

  button, input {
    font-family: 'NeoDunggeunmo';
  }
`;

export default GlobalStyle;
