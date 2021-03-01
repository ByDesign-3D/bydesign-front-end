import styled from "styled-components";
import { Link } from "react-router-dom";


export const Nav = styled.nav`
    height: 80px;
    background: black;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
`;

export const Logo = styled(Link)`
    font-style: italic;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
`;


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;


    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const MenuLinks = styled(Link)`
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;


