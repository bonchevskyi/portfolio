import { createGlobalStyle } from "styled-components";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import KaushanScript from "./assets/fonts/Kaushan-Script.woff";
import KaushanScript2 from "./assets/fonts/Kaushan-Script.woff2";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Kaushan Script';
  src: url(${KaushanScript2}) format('woff2'),
       url(${KaushanScript}) format('woff');
  font-weight: 300;
  font-style: normal;
}

:root {
    --primaryFont: 'Poppins', sans-serif;
}

*{    
  box-sizing: border-box;
  margin: 0;
  text-decoration: none; 
  scroll-behavior: smooth;
}

html,
body{
  width:100%;
  overflow-x:hidden;

}

&::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

&::-webkit-scrollbar-track {
    background: #555;
}

&::-webkit-scrollbar-thumb {
    background: #555;
  border-radius: 10px;
  transition: 0.3s;
} 

img{
  -webkit-touch-callout: none; 
    -webkit-user-select: none;
     -khtml-user-select: none; 
       -moz-user-select: none;
        -ms-user-select: none; 
            user-select: none; 

}

@media screen and (max-width: 400px) {
  body {
    overflow-x: hidden;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 
  480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    body {
      overflow-x: hidden;
    }
}

`;

export default GlobalStyles;
