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

    .scrollIcon{
    position: fixed; 
    width: 50px;
    bottom: 150px;
    right:100px;
    align-items: center;
    height: 50px;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: 0.4s;
    color:white;
    border-radius:5px;
    background:red;
  border:1px solid black;
    &:hover{
        background:black;
        opacity:0.7;
    }
    @media screen and (max-width: 1100px) {
        right:5px;
        bottom:60px;
        height:40px;
        width:40px;
  }
    }
    

`;

export default GlobalStyle;
