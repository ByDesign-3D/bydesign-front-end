import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:"Montserrat",sans-serif;
    }
    
    html,body{
        overflow-x:hidden;
        
    }

    

    .landing-img{
        box-shadow: 0 0 30px #333;

        &::before{
            opacity: 0.4;
            background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.6) 100%
        );
        }
    }
    

`;

export default GlobalStyle;
